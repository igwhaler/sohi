import {useCallback, useState} from 'react';
import {UploadFile} from 'antd/es/upload/interface';
import Material from './index';

const imagesData = [
    {image: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
    {image: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
    {image: 'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'},
    {image: 'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
    {image: 'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg'},
    {image: 'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg'},
    {image: 'http://b.hiphotos.baidu.com/image/pic/item/9d82d158ccbf6c81b94575cfb93eb13533fa40a2.jpg'},
    {image: 'http://e.hiphotos.baidu.com/image/pic/item/4bed2e738bd4b31c1badd5a685d6277f9e2ff81e.jpg'},
    {image: 'http://g.hiphotos.baidu.com/image/pic/item/0d338744ebf81a4c87a3add4d52a6059252da61e.jpg'},
    {image: 'http://a.hiphotos.baidu.com/image/pic/item/f2deb48f8c5494ee5080c8142ff5e0fe99257e19.jpg'},
    {image: 'http://f.hiphotos.baidu.com/image/pic/item/4034970a304e251f503521f5a586c9177e3e53f9.jpg'},
    {image: 'http://b.hiphotos.baidu.com/image/pic/item/279759ee3d6d55fbb3586c0168224f4a20a4dd7e.jpg'},
    {image: 'http://a.hiphotos.baidu.com/image/pic/item/e824b899a9014c087eb617650e7b02087af4f464.jpg'},
    {image: 'http://c.hiphotos.baidu.com/image/pic/item/9c16fdfaaf51f3de1e296fa390eef01f3b29795a.jpg'},
    {image: 'http://d.hiphotos.baidu.com/image/pic/item/b58f8c5494eef01f119945cbe2fe9925bc317d2a.jpg'},
    {image: 'http://h.hiphotos.baidu.com/image/pic/item/902397dda144ad340668b847d4a20cf430ad851e.jpg'},
    {image: 'http://b.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9ea5c0e3c23d139b6003bf3b374.jpg'},
    {image: 'http://a.hiphotos.baidu.com/image/pic/item/8d5494eef01f3a292d2472199d25bc315d607c7c.jpg'},
    {image: 'http://b.hiphotos.baidu.com/image/pic/item/e824b899a9014c08878b2c4c0e7b02087af4f4a3.jpg'},
];

function SelfMaterial() {
    const [imgList, setImgList] = useState(imagesData);
    const [localFileList, setLocalFileList] = useState<UploadFile[]>([]);

    // 点击上传
    const handleUpload = () => {
        return true;
    };

    // 删除图片
    const handleRemoveImg = useCallback((index: number) => {
        imgList.splice(index, 1);

        setImgList([...imgList]);
    }, [imgList]);

    // 选中图片
    const handleSelectImg = useCallback((data) => {
        console.log(data);
    }, []);

    // 监听文件上传
    const handleLocalFilesChange = useCallback((list: UploadFile[]) => {
        // console.log(list);
        const slefList = list.map(item => {
            if (item.status === 'done') {
                const httpUrl = item?.response?.data?.data?.url;

                item.thumbUrl = httpUrl;
            }

            return item;
        });

        setLocalFileList(slefList);
    }, []);

    // 关闭弹窗
    const handleCloseModal = useCallback(() => {
        setLocalFileList([]);
    }, []);

    // 添加全部
    const handleAddAll = useCallback(
        (successFiles) => {
            const list = successFiles.map((data: { response: { data: { data: { url: any; }; }; }; }) => {
                return {
                    image: data.response.data.data.url
                };
            });

            // setImgList(imgList.concat(list))
            setImgList(imgList.concat(list));

            setLocalFileList([]);

            return false;
        },
        [imgList]
    );

    return (
        <Material
            imgLibraryProps={{
                onUpload: handleUpload,
                imgListProps: {
                    imgList: imgList,
                    onSelect: handleSelectImg,
                    onRemoveImg: handleRemoveImg
                }
            }}
            localUploadProps={{
                maxSize: 5,
                desc: "支持jpg、png等格式，单张图片最大支持5M，清晰的图片更有利于推荐",
                onFilesChange: handleLocalFilesChange,
                uploadProps: {
                    action: '/bjhmis/manage/message/submit/uploadExcel',
                    fileList: localFileList
                }
            }}
            onAfterModalClose={handleCloseModal}
            onAddAll={handleAddAll}
            maxLen={100}
        />
    );
}

export default SelfMaterial;