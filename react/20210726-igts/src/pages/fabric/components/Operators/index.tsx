import {Button} from 'antd';
import {RootCollectionsType} from '../../types';

const EditOpterators = ({rootCollections}: {rootCollections: RootCollectionsType}) => {
    const handleDownload = () => {
        const ext = 'jpeg';
        const base64 = rootCollections?.rootCanvas?.toDataURL({
            quality: 1,
            format: 'jpeg',
            enableRetinaScaling: true
        }) || '';
        const link = document.createElement("a");

        link.href = base64;
        link.download = `hehe.${ext}`;
        link.click();
    };

    return (
        <div className="edit-operatios">
            <Button>上一步</Button>
            <Button>下一步</Button>

            <Button type="primary" ghost>旋转</Button>
            <Button type="primary" ghost>左右翻转</Button>
            <Button type="primary" ghost>上下翻转</Button>

            <Button type="primary" danger ghost>长按对比</Button>

            <Button onClick={handleDownload} type="primary">下载</Button>
        </div>
    );
};

export default EditOpterators;
