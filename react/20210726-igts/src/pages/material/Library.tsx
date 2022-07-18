import ImgList, {imgListProps} from './ImgList';
import './styles/library.scss';
import imgUpload from './images/image-upload.png';

export interface imgLibraryProps {
    onUpload: () => void | boolean
    imgListProps: imgListProps
}

const ImgLibrary = ({
    onUpload,
    imgListProps
}: imgLibraryProps) => {
    return (
        <div className="material-library">
            <div className="material-library-title">素材库</div>

            <div className="material-library-upload">
                <div className="material-library-upload-btn" onClick={onUpload}>
                    <img src={imgUpload} alt="" />
                    <span>上传图片</span>
                </div>
            </div>

            <ImgList {...imgListProps} />
        </div>
    );
};

export default ImgLibrary;
