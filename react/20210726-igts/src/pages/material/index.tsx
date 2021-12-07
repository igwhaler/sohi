import { useCallback, useState, useMemo } from 'react';
import cls from 'classnames';
import { Modal, Tabs } from 'antd';
import { UploadFile } from 'antd/es/upload/interface';
import ImgLibrary, {imgLibraryProps} from './Library';
import LocalUpload, {localUploadProps} from './LocalUpload';
import './index.scss';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

export interface mterialProps {
    maxLen?: number; // 图片最大数
    onAddAll: (fils: UploadFile[]) => boolean | undefined
    onAfterModalClose?: () => void,
    imgLibraryProps: imgLibraryProps,
    localUploadProps: localUploadProps,
}

function Material(
    {
        maxLen = 100,
        onAddAll,
        onAfterModalClose,
        imgLibraryProps,
        localUploadProps,
    }: mterialProps
) {
    const [visible, setModalVisible] = useState(false);
    const [closeConfirmVisibel, setCloseConfirmVisibel] = useState(false);
    const { onUpload } = imgLibraryProps;
    const { fileList: localFileList = [] } = localUploadProps.uploadProps;

    // 点击上传图片
    const handleUpload = useCallback(() => {
        const result = onUpload();

        if (result) {
            setModalVisible(true);
        }
    }, [onUpload]);

    /* 本地上传相关逻辑 上传成功 */
    const [successLocalFiles, hasSuccessFile] = useMemo(() => {
        const successFiles = localFileList.filter(item => item.status === 'done');

        return [successFiles, successFiles.length > 0];
    }, [localFileList]);

    /* 本地上传相关逻辑 上传中 */
    const hasUploadingFile = useMemo(() => {
        const uploadingFiles = localFileList.filter(item => item.status === 'uploading');

        return uploadingFiles.length > 0;
    }, [localFileList]);

    const closeModal = useCallback(() => {
        setModalVisible(false);
        onAfterModalClose && onAfterModalClose();
    }, [onAfterModalClose]);

    // 关闭弹窗
    const handleBtnCloseModal = useCallback(() => {
        // 关闭二次确认逻辑
        if (hasUploadingFile || hasSuccessFile) {
            setCloseConfirmVisibel(true);
            return;
        }
        closeModal();
    }, [hasUploadingFile, hasSuccessFile, closeModal]);

    const handleCloseConfirm = useCallback(() => {
        setCloseConfirmVisibel(false);
    }, []);

    const handleOkConfirm = useCallback(() => {
        closeModal();
        setCloseConfirmVisibel(false);
    }, [closeModal]);

    // 添加全部
    const handleAddAll = useCallback(
        () => {
            if (hasSuccessFile) {
                const result = onAddAll(successLocalFiles);

                if (result) {
                    setTimeout(() => {
                        closeModal();
                    }, 0);
                }
            }
        },
        [hasSuccessFile, successLocalFiles, onAddAll, closeModal]
    );

    return (
        <>
            <ImgLibrary
                onUpload={handleUpload}
                imgListProps={imgLibraryProps.imgListProps}
            />

            <Modal
                maskClosable={false}
                keyboard={false}
                width={802}
                className="material-modal"
                visible={visible}
                footer={null}
                onCancel={handleBtnCloseModal}
            >
                <Tabs
                    defaultActiveKey="1"
                    centered
                    className="material-modal-tabs"                >
                    <TabPane
                        tab={
                            <div className="self-tab">
                                本地上传
                                { hasSuccessFile && <span className="count">{successLocalFiles.length}</span> }
                            </div>
                        }
                        key="1"
                    >
                        <LocalUpload {...localUploadProps} />
                    </TabPane>
                </Tabs>

                <div className="wrap-btn-add">
                    <div
                        className={cls('btn-add', {
                            'btn-add-disable': !hasSuccessFile,
                        })}
                        onClick={handleAddAll}
                    >
                        添加全部({successLocalFiles.length})
                    </div>
                </div>

                {
                    closeConfirmVisibel && (
                        <div className="material-modal-close-confirm">
                            <div className="title">确定关闭？</div>
                            <div className="desc">关闭后所上传图片无法同步到素材库</div>
                            <div className="wrap-btn">
                                <div className="btn btn-cancel" onClick={handleCloseConfirm}>取消</div>
                                <div className="btn btn-confirm" onClick={handleOkConfirm}>确定</div>
                            </div>
                        </div>
                    )
                }
            </Modal>
        </>
    );
};

export default Material;
