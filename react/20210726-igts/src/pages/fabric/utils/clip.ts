import {fabric} from 'fabric';
import {RootCollectionsType, ClipRatioType} from "../types";

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
        top: -1,
        left: -1,
        width: canvasWidth + 2,
        height: canvasHeight + 2,
        fill: 'rgba(51, 51, 51, 0.5)',
        evented: false,
        hasControls: false,
        selectable: false,
    });

    // 添加裁剪框
    const clipRect = new fabric.Rect({
        top: 0,
        left: 0,
        width: canvasWidth,
        height: canvasHeight,
        stroke: 'tan',
        strokeWidth: 0,
        padding: 0,
        hasBorders: true,
        cornerColor: 'tan',
        cornerSize: 30,
        transparentCorners: false,
        cornerStrokeColor: 'transparent',
        minScaleLimit: 0.2,
        selectable: true,
        lockScalingFlip: true,
        globalCompositeOperation: 'destination-out',
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

    // 缩放+拖拽裁剪框 不能溢出图片区域，记录初始值。
    let clipInitData = {
        scaleX: 1,
        scaleY: 1,
        top: 0,
        left: 0
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
                top = 0,
                left = 0,
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
                top,
                left
            };
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
                top = 0,
                left = 0,
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
                top,
                left
            };
        }
    );
};
