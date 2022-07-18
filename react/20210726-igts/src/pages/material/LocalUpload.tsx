import {useState, useEffect, ReactElement, useCallback, useMemo} from 'react';
import {Upload} from 'antd';
import {UploadFile, UploadChangeParam, RcFile, UploadProps} from 'antd/es/upload/interface';
import './styles/localUpload.scss';
import deleteIcon from './images/delete.png';
import uploadIcon from './images/upload.png';

// 限制尺寸（单位M）
const ltImgSize = (size: number, max: number = 5): boolean => (size / 1024 / 1024 > max);

const statusTypes: string[] = ['uploading', 'error'];

// 自定义图片展示
const ImageItem = ({maxSize = 5, file, onRemove}: {
    maxSize?: number,
    file: UploadFile,
    onRemove: () => void
}) => {
    const [localUrl, setLocalUrl] = useState<string>('');
    let {thumbUrl, status = '', size = 0} = file;
    const isLtImg = ltImgSize(size, maxSize);

    if (isLtImg) {
        status = 'error';
    }

    // 缓存localurl
    useEffect(() => {
        thumbUrl && setLocalUrl(thumbUrl);
    }, [thumbUrl]);

    // console.log(file);
    return (
        <div className="img-item" >
            <div className="btn-delete" onClick={onRemove}>
                <img src={deleteIcon} alt="删除" />
            </div>

            <div className="wrap-img">
                <div
                    className="img"
                    style={{
                        backgroundImage: `url(${localUrl})`
                    }}
                />
            </div>

            {
                statusTypes.includes(status) && (
                    <div className="mask">
                        {
                            status === 'uploading' && (
                                <div className="wrap-progress">
                                    <div
                                        className="progress"
                                        style={{
                                            width: `${file.percent}%`
                                        }}
                                    />
                                </div>
                            )
                        }
                        {
                            status === 'error' && (
                                <div className="wrap-error">
                                    {isLtImg && <div className="error">大于{maxSize}M</div>}
                                    <div className="error">上传失败</div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

// 上传按钮
const UploadButton = ({isMore = false}: { isMore: boolean }) => (
    <div className="wrap-upload-btn">
        <div className={`btn-upload ${isMore && 'btn-upload-more'}`}>
            <img className="upload-icon" src={uploadIcon} alt="上传" />
            <div className="upload-desc">{isMore ? '继续上传' : '上传图片'}</div>
        </div>
    </div>
);

export interface localUploadProps {
    maxSize?: number
    desc?: string,
    onFilesChange: (list: UploadFile[]) => void,
    uploadProps: UploadProps
}

function LocalUpload({
    maxSize = 5,
    desc = '',
    onFilesChange,
    uploadProps
}: localUploadProps) {
    const {beforeUpload, fileList = []} = uploadProps;

    const handleChange = useCallback(
        (params: UploadChangeParam) => {
            const {fileList} = params;

            onFilesChange(fileList);
        },
        [onFilesChange]
    );

    const handleBeforeUpload = useCallback(
        (file: RcFile, fileList: RcFile[]) => {
            // 保留原来校验
            const selfCheck = beforeUpload && beforeUpload(file, fileList);
            // 扩展尺寸校验
            const limtCheck = (ltImgSize(file.size, maxSize) && Promise.reject(''));

            return limtCheck || selfCheck || true;
        },
        [beforeUpload, maxSize]
    );

    const handelItemRender = useCallback((
        _originNode: ReactElement,
        file: UploadFile,
        _fileList: UploadFile[],
        actions: {
            remove: () => void
        }
    ) => {
        return (
            <ImageItem
                file={file}
                onRemove={actions.remove}
                maxSize={maxSize}
            />
        );
    }, [maxSize]);

    const isMore = useMemo(() => !!fileList.length, [fileList]);

    return (
        <div className={`material-library-local-upload ${!isMore && 'material-library-local-upload-init'}`
        }>
            <Upload
                {...uploadProps}
                listType="picture-card"
                multiple={uploadProps.multiple || true}
                fileList={fileList}
                beforeUpload={handleBeforeUpload}
                onChange={handleChange}
                itemRender={handelItemRender}
            >
                <UploadButton isMore={isMore}/>
            </Upload>

            {!isMore && <div className="upload-tip">{desc}</div>}
        </div>
    );
}

export default LocalUpload;
