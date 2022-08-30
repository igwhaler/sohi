import {Button, Select, Tabs} from 'antd';
import {fabric} from 'fabric';
import {addText, setBgColor} from '../../utils/text';
import {setGroupAlign, AlignConfigs, alignType} from '../../utils/group-align';
import React, {useEffect, useState} from 'react';

const {Option} = Select;
const {TabPane} = Tabs;

const ToolBars = ({rootCollections, crops}: {
    rootCollections: {
        rootCanvas: fabric.Canvas;
        rootImg: fabric.Image;
    };
    crops: {
        cropCanvasEl: React.MutableRefObject<null>;
        // onClipImg: () => void
    };
}) => {
    const [cropCanvas, setCropCanvas] = useState<fabric.Canvas>();

    // 添加文本
    const handleAddText = () => {
        addText(rootCollections.rootCanvas, 'hello world');
    };

    // 设置对齐
    const handleAlignChange = (type: alignType) => {
        setGroupAlign(rootCollections.rootCanvas, type);
    };

    // 设置文本背景色
    const handleBgColorChange = (color: string) => {
        setBgColor(rootCollections.rootCanvas, color);
    };

    // 裁剪 = 蒙层 + 裁剪框；裁剪是一个独立的canvas
    const initCrop = () => {
        const {rootImg} = rootCollections;
        const {
            left: imgLeft = 0,
            top: imgTop = 0,
            width: imgWidth = 0,
            height: imgHeight = 0,
            scaleX: imgScaleX = 0,
            scaleY: imgScaleY = 0
        } = rootImg;

        // 初始化裁剪canvas
        const cropCanvas = new fabric.Canvas(crops.cropCanvasEl.current,{
            width: 800,
            height: 500,
        });
        setCropCanvas(cropCanvas);

        // 添加蒙层
        const maskRect = new fabric.Rect({
            top: 0,
            left: 0,
            width: 800,
            height: 500,
            fill: 'rgba(51, 51, 51, 0.5)',
            evented: false,
            hasControls: false,
            selectable: false,
        });

        // 添加裁剪框
        const cropRect = new fabric.Rect({
            top: rootImg.top,
            left: rootImg.left,
            width: (rootImg.width|| 0) * (rootImg.scaleX || 0) - 2,
            height: (rootImg.height || 0) * (rootImg.scaleY || 0) - 2,
            stroke: 'tan',
            strokeWidth: 1,
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
        cropRect.setControlsVisibility({
            ml: false,
            mb: false,
            mr: false,
            mt: false,
            mtr: false
        });

        cropCanvas.selection = false;
        cropCanvas.add(maskRect, cropRect);
        cropCanvas.setActiveObject(cropRect).renderAll();

        // 缩放+拖拽裁剪框 不能溢出图片区域，记录初始值。
        let cropInitData = {
            scaleX: 1,
            scaleY: 1,
            top: rootImg.top,
            left: rootImg.left
        };

        // 始终选中裁剪框
        cropCanvas.on(
            'mouse:down',
            event => {
                cropCanvas.setActiveObject(cropRect);
            }
        );

        // 拖拽裁剪框 不能溢出图片区域
        cropCanvas.on(
            'object:moving',
            event => {
                const {
                    top = 0,
                    left = 0,
                    width = 0,
                    height = 0,
                    scaleX = 0,
                    scaleY = 0,
                } = event.target || {};


                // 挪出顶部
                if (top <= imgTop) {
                    cropRect.set({
                        top: imgTop
                    });
                }

                // 挪出左侧
                if (left < imgLeft) {
                    cropRect.set({
                        left: imgLeft
                    });
                }

                // 挪出底部
                const maxTop = imgHeight * imgScaleY - height * scaleY + imgTop -1;
                if (top >= maxTop) {
                    cropRect.set({
                        top: maxTop
                    });
                }

                // 挪出右侧
                const maxLeft = imgWidth * imgScaleX - width * scaleX + imgLeft - 1;
                if (left >= maxLeft) {
                    cropRect.set({
                        left: maxLeft
                    });
                }

                cropInitData = {
                    scaleX,
                    scaleY,
                    top,
                    left
                };
            }
        );

        // 缩放裁剪框 不能溢出图片区域
        cropCanvas.on(
            'object:scaling',
            event => {
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

                // ◰ + ◳ 溢出顶部
                if (top <= imgTop) {
                    if (corner === 'tl' || corner === 'tr') {
                        cropRect.set(cropInitData);
                        return;
                    }
                }

                //  ◰ + ◱ 溢出左侧
                if (left < imgLeft) {
                    if (corner === 'tl' || corner === 'bl') {
                        cropRect.set(cropInitData);
                        return;
                    }
                }

                // ◱ + ◲ 溢出底部
                const maxTop = imgHeight * imgScaleY - height * scaleY + imgTop -1;
                if (top >= maxTop) {
                    if (corner === 'bl' || corner === 'br') {
                        cropRect.set(cropInitData);
                        return;
                    }
                }

                // ◳ + ◲ 溢出右侧
                const maxLeft = imgWidth * imgScaleX - width * scaleX + imgLeft - 1;
                if (left >= maxLeft) {
                    if (corner === 'tr' || corner === 'br') {
                        cropRect.set(cropInitData);
                        return;
                    }
                }


                cropInitData = {
                    scaleX,
                    scaleY,
                    top,
                    left
                };
            }
        );
    };

    const handleClipImg = () => {
        // console.log(cropCanvas?._activeObject);
        const {
            top = 0,
            left = 0,
            width = 0,
            height = 0,
            scaleX = 0
        } = cropCanvas?._activeObject || {};

        const clipPath = new fabric.Rect({
            top,
            left,
            width: width * scaleX,
            height: height * scaleX
        });

        rootCollections.rootCanvas.clipPath = clipPath;
        rootCollections.rootCanvas.renderAll();

        // 裁剪后居中铺满
        // rootCollections.rootCanvas.setWidth(clipPath.width || 0);
        // rootCollections.rootCanvas.setHeight(clipPath.height || 0);

        console.log(rootCollections.rootCanvas, rootCollections.rootImg);

    };

    useEffect(() => {
        handleAddText();
        initCrop();
    }, []);

    return (
        <div>
            <Tabs defaultActiveKey="2">
                <TabPane tab="文字" key="1">
                    <Button onClick={handleAddText}>添加文字</Button>

                    <Select defaultValue="对齐方式" onChange={handleAlignChange}>
                        {
                            AlignConfigs.map(item => {
                                return (
                                    <Option key={item.type} value={item.type}>{item.value}</Option>
                                );
                            })
                        }
                    </Select>

                    <Select defaultValue="设置背景色" onChange={handleBgColorChange}>
                        <Option value="yellow">黄色</Option>
                        <Option value="green">绿色</Option>
                        <Option value="red">红色</Option>
                    </Select>
                </TabPane>

                <TabPane tab="裁剪" key="2">
                    <Button type="primary" onClick={handleClipImg}>完成裁剪</Button>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default ToolBars;
