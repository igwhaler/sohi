import Masonry from 'react-masonry-css';
import './styles/imgList.scss';
import deleteIcon from './images/delete.png';

export interface imgData {
    image: string
}

export interface imgListProps {
    imgList: imgData[];
    onSelect?: (data: imgData) => void | undefined;
    onRemoveImg: (index: number) => void;
}

const ImgList = ({
    imgList,
    onSelect,
    onRemoveImg
}: imgListProps) => {
    const handleRemove = (index: number) => {
        return () => {
            onRemoveImg(index);
        };
    };

    const handleSelect = (data: imgData) => {
        return () => {
            onSelect && onSelect(data);
        };
    };

    return (
        <Masonry
            breakpointCols={2}
            className="material-library-img-list"
            columnClassName="material-library-img-column">
            {
                imgList.map((data, index) => {
                    const {image} = data;

                    return (
                        <div className="img-item" key={image}>
                            <img className="img" src={image} alt="" onClick={handleSelect(data)} />
                            <div className="btn-delete" onClick={handleRemove(index)}>
                                <img src={deleteIcon} alt="删除" />
                            </div>
                        </div>
                    );
                })
            }
        </Masonry>

    );
};

export default ImgList;
