import {fabric} from 'fabric';
import {RootCollectionsType, ClipRatioType} from "../types";
import {BoxConfigs} from '../const';


// 西索-伸缩自在的愛：输入宽高+裁剪比，返回自适应宽高
export function getFlexData(
    width: number,
    height: number,
    ratio: { w: number, h: number },
): {width: number, height: number, flex: 'h' | 'w' | string} {
    const result = {width: 0, height: 0, flex: 'h'};

    if (width / ratio.w * ratio.h >= height) {
        result.width = height / ratio.h * ratio.w;
        result.height = height;
    } else {
        result.width = width;
        result.height = width / ratio.w * ratio.h;
        result.flex = 'w';
    }

    return result;
};

// 设置4:3辅助线
const setFixLine = (clipRect: fabric.Rect) => {
    const {left = 0, top = 0, width = 0, height = 0} = clipRect;
    const clipResBoxData = getFlexData(width, height, {w: 4, h: 3});
    const fixLine = document.getElementById('fixLine');

    const styles: { [key: string]: string } = {
        left: (left + (width - clipResBoxData.width) / 2) + 'px',
        top: (top + (height - clipResBoxData.height) / 2) + 'px',
        width: clipResBoxData.width + 'px',
        height: clipResBoxData.height + 'px'
    };

    if (fixLine) {
        Object.keys(styles).forEach((key) => {
            fixLine.style.setProperty(key, styles[key]);
        });
    }
};

// 初始化裁剪 = 蒙层 + 裁剪框；裁剪是一个独立的canvas
export const initClip = (
    {
        rootCollections,
        clipCanvasEl,
        clipRatioData
    }: {
        rootCollections: RootCollectionsType,
        clipCanvasEl: React.MutableRefObject<null>,
        clipRatioData: React.MutableRefObject<ClipRatioType>
    },
    setCropCanvas: (clipCanvas: fabric.Canvas) => void
) => {
    const {rootCanvas} = rootCollections;
    const {
        width: canvasWidth = 0,
        height: canvasHeight = 0,
    } = rootCanvas;

    // 初始化裁剪canvas
    const clipCanvas = new fabric.Canvas(clipCanvasEl.current, {
        width: canvasWidth,
        height: canvasHeight,
    });
    setCropCanvas(clipCanvas);

    // 添加蒙层
    const maskRect = new fabric.Rect({
        left: -1,
        top: -1,
        width: canvasWidth + 2,
        height: canvasHeight + 2,
        fill: 'rgba(51, 51, 51, 0.5)',
        evented: false,
        hasControls: false,
        selectable: false,
    });

    // 添加裁剪框
    const clipResBoxData = getFlexData(canvasWidth, canvasHeight, clipRatioData.current);
    const clipRect = new fabric.Rect({
        left: 0,
        top: 0,
        // width: canvasWidth,
        // height: canvasHeight,
        width: clipResBoxData.width - 2,
        height: clipResBoxData.height - 2,
        stroke: 'red',
        strokeWidth: 0,
        borderColor: 'red',
        padding: 0,
        hasBorders: true,
        cornerColor: 'purple',
        cornerSize: 30,
        transparentCorners: false,
        cornerStrokeColor: 'transparent',
        minScaleLimit: 0.2,
        selectable: true,
        lockScalingFlip: true,
        globalCompositeOperation: 'destination-out',
    });
    // 裁剪框居中显示
    clipRect.set({
        left: ((maskRect.width || 0) - (clipRect.width || 0)) / 2 - 1,
        top: ((maskRect.height || 0) - (clipRect.height || 0)) / 2 - 1
    });

    // 隐藏无关控制区域
    clipRect.setControlsVisibility({
        ml: false,
        mb: false,
        mr: false,
        mt: false,
        mtr: false
    });

    clipCanvas.selection = false;
    clipCanvas.add(maskRect, clipRect);
    clipCanvas.setActiveObject(clipRect).renderAll();

    // 添加辅助线
    setFixLine(clipRect);

    // 缩放+拖拽裁剪框 不能溢出图片区域，记录初始值。
    let clipInitData = {
        scaleX: 1,
        scaleY: 1,
        left: 0,
        top: 0,
    };

    // 始终选中裁剪框
    clipCanvas.on(
        'mouse:down',
        () => {
            clipCanvas.setActiveObject(clipRect);
        }
    );

    // 拖拽裁剪框 不能溢出图片区域
    clipCanvas.on(
        'object:moving',
        event => {
            const {rootCanvas} = rootCollections;
            const {
                width: canvasWidth = 0,
                height: canvasHeight = 0,
            } = rootCanvas;
            const {
                left = 0,
                top = 0,
                width = 0,
                height = 0,
                scaleX = 0,
                scaleY = 0,
            } = event.target || {};

            // 挪出顶部
            if (top <= 0) {
                clipRect.set({
                    top: 0
                });
            }

            // 挪出左侧
            if (left < 0) {
                clipRect.set({
                    left: 0
                });
            }

            // 挪出底部
            const maxTop = canvasHeight - height * scaleY -1;
            if (top >= maxTop) {
                clipRect.set({
                    top: maxTop
                });
            }

            // 挪出右侧
            const maxLeft = canvasWidth - width * scaleX - 1;
            if (left >= maxLeft) {
                clipRect.set({
                    left: maxLeft
                });
            }

            clipInitData = {
                scaleX,
                scaleY,
                left,
                top,
            };

            event.target && setFixLine(event.target);
        }
    );

    // 缩放裁剪框 不能溢出图片区域
    clipCanvas.on(
        'object:scaling',
        event => {
            const {rootCanvas} = rootCollections;
            const {
                width: canvasWidth = 0,
                height: canvasHeight = 0,
            } = rootCanvas;
            const {
                left = 0,
                top = 0,
                width = 0,
                height = 0,
                scaleX = 0,
                scaleY = 0,
            } = event.target || {};
            const {
                corner
            } = event.transform || {};

            clipRatioData.current = {
                w: width * clipInitData.scaleX,
                h: height * clipInitData.scaleY
            };

            event.target && setFixLine(event.target);

            // ◰ + ◳ 溢出顶部
            if (top <= 0) {
                if (corner === 'tl' || corner === 'tr' || corner === 'mt') {
                    clipRect.set(clipInitData);
                    return;
                }
            }

            //  ◰ + ◱ 溢出左侧
            if (left < 0) {
                if (corner === 'tl' || corner === 'bl' || corner === 'ml') {
                    clipRect.set(clipInitData);
                    return;
                }
            }

            // ◱ + ◲ 溢出底部
            const maxTop = canvasHeight - height * scaleY -1;
            if (top >= maxTop) {
                if (corner === 'bl' || corner === 'br' || corner === 'mb') {
                    clipRect.set(clipInitData);
                    return;
                }
            }

            // ◳ + ◲ 溢出右侧
            const maxLeft = canvasWidth - width * scaleX - 1;
            if (left >= maxLeft) {
                if (corner === 'tr' || corner === 'br' || corner === 'mr') {
                    clipRect.set(clipInitData);
                    return;
                }
            }

            clipInitData = {
                scaleX,
                scaleY,
                left,
                top,
            };
        }
    );
};
