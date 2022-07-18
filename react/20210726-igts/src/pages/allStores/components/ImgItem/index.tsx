import './index.scss';

const ImgItem = ({
    data,
    onDeletImg
}: {
    data: any
    onDeletImg?: (data: any) => void
}) => {
    const handleDeletImg = (data: any) => {
        onDeletImg && onDeletImg(data);
    };

    return (
        <div className="img-wrap" key={data.url}>
            <img src={data.url} alt="" />
            {onDeletImg && <div
                className="btn-delete"
                onClick={handleDeletImg.bind(null, data)}
            >删除</div>}
        </div>
    );
};

export default ImgItem;
