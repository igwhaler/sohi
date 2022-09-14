import {fabric} from 'fabric';
import {Button} from 'antd';
import {getFlexData, ClipFixLine} from "../../../utils/clip";
import {BoxConfigs, ClipRatioList} from "../../../const";
import {RootCollectionsType, ClipRatioType} from "../../../types";

const ClipTools = (
    {
        rootCollections,
        clipCanvas,
        clipRatioData,
        defaultCilpRatio
    }: {
        rootCollections: RootCollectionsType,
        clipCanvas: fabric.Canvas,
        clipRatioData: React.MutableRefObject<ClipRatioType>,
        defaultCilpRatio: ClipRatioType
    }
) => {
    // 完成裁剪
    const handleClipImg = () => {
        let {
            top: clipTop = 0,
            left: clipLeft = 0,
            width: clipWidth = 0,
            height: clipHeight = 0,
            scaleX: clipScaleX = 0,
            scaleY: clipScaleY = 0
        } = clipCanvas?._activeObject || {};
        const clipResBoxData = getFlexData(BoxConfigs.width, BoxConfigs.height, clipRatioData.current);

        // 裁剪框的真实宽高
        clipWidth = clipWidth * clipScaleX;
        clipHeight = clipHeight * clipScaleY;

        // 计算裁裁剪后的 裁剪框 相对于 背景图 的缩放比
        const scaleWidth = clipWidth / clipResBoxData.width;
        const scaleHeight = clipHeight / clipResBoxData.height;

        // 裁剪后居中缩放居中铺满
        const [kclassImg, ...otherKclasses] = rootCollections.rootCanvas._objects;
        const {
            top = 0,
            left = 0,
            scaleX = 0,
            scaleY = 0,
        } = kclassImg;
        kclassImg.set({
            top: (top - clipTop) / scaleHeight,
            left: (left - clipLeft) / scaleWidth,
            scaleX: scaleX / scaleWidth,
            scaleY: scaleY / scaleHeight,
        });

        // 其它元素等比缩放
        otherKclasses.forEach(klass => {
            const {
                top = 0,
                left = 0,
                scaleX = 0,
                scaleY = 0,
            } = klass;

            klass.set({
                top: (top - clipTop) / scaleWidth,
                left: (left - clipLeft) / scaleHeight,
                scaleX: scaleX / scaleWidth,
                scaleY: scaleY / scaleHeight,
            });
        });

        // 图片裁剪后，重新渲染canvas 宽高
        rootCollections.rootCanvas.setWidth(clipResBoxData.width);
        rootCollections.rootCanvas.setHeight(clipResBoxData.height);
        // canvas变化后重置坐标原点
        rootCollections.rootCanvas.relativePan(new fabric.Point(0, 0));
        rootCollections.rootCanvas.renderAll();

        // 重置裁剪位置和大小
        clipCanvas?._objects.forEach(kclass => {
            kclass.set({
                top: 0,
                left: 0,
                width: clipResBoxData.width,
                height: clipResBoxData.height,
                scaleX: 1,
                scaleY: 1
            });
        });
        clipCanvas?.setWidth(clipResBoxData.width);
        clipCanvas?.setHeight(clipResBoxData.height);
        clipCanvas?.renderAll();

        ClipFixLine.set(clipCanvas?._activeObject);
    };

    // 设置裁剪比例，调整裁剪框的大小；裁剪框的大小 由图片大小 + 裁剪比例共同决定
    const selectClipRatio = (ratio: ClipRatioType) => {
        return () => {
            if (!ratio.w) {
                clipCanvas?._activeObject.set({
                    lockScalingFlip: false,
                }).setControlsVisibility({
                    ml: true,
                    mb: true,
                    mr: true,
                    mt: true,
                });

                clipCanvas?.renderAll();
                return;
            } else {
                clipCanvas?._activeObject.set({
                    lockScalingFlip: true,
                }).setControlsVisibility({
                    ml: false,
                    mb: false,
                    mr: false,
                    mt: false,
                });
            }

            clipRatioData.current = ratio;

            const {
                width: canvasWidth = 0,
                height: canvasHeight = 0
            } = rootCollections.rootCanvas;
            const selfClipData = {
                top: 1,
                left: 1,
                width: canvasWidth - 3,
                height: canvasHeight - 3,
                scaleX: 1,
                scaleY: 1
            };

            const {width, height, flex} = getFlexData(canvasWidth, canvasHeight, ratio);
            selfClipData.width = width;
            selfClipData.height = height;
            if (flex === 'w') {
                selfClipData.top = (canvasHeight - height) / 2 + 0;
            }
            if (flex === 'h') {
                selfClipData.left = (canvasWidth - width) / 2 + 0;
            }

            clipCanvas?._activeObject.set(selfClipData);
            clipCanvas?.renderAll();

            if (ratio.w / ratio.h === 16 / 9) {
                ClipFixLine.set(clipCanvas?._activeObject);
            } else {
                ClipFixLine.destroy();
            }
        };
    };

    return (
        <>
            <Button onClick={selectClipRatio(defaultCilpRatio)}>原图比例</Button>
            {
                ClipRatioList.map(({w, h}) => {
                    return (
                        <Button key={w / h} onClick={selectClipRatio({w, h})}>{w}:{h}</Button>
                    );
                })
            }
            <Button onClick={selectClipRatio({w: 0, h: 0})}>自定义</Button>
            <Button type="primary" onClick={handleClipImg}>完成裁剪</Button>
        </>
    );
};

export default ClipTools;
