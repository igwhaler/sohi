import {Button, Select, Tabs} from 'antd';
import {fabric} from 'fabric';
import {addText, setBgColor} from '../../utils/text';
import {setGroupAlign, AlignConfigs, alignType} from '../../utils/group-align';
import React, {useEffect, useState} from 'react';

const {Option} = Select;
const {TabPane} = Tabs;

const ToolBars = ({rootCollections, crops}: {
    rootCollections: {
        canvas: fabric.Canvas;
        img: fabric.Image;
    };
    crops: {
        cropCanvasEl: React.MutableRefObject<null>;
        // onClipImg: () => void
    };
}) => {
    const [cropCanvas, setCropCanvas] = useState<fabric.Canvas>();

    // 添加文本
    const handleAddText = () => {
        addText(rootCollections.canvas, 'hello world');
    };

    // 设置对齐
    const handleAlignChange = (type: alignType) => {
        setGroupAlign(rootCollections.canvas, type);
    };

    // 设置文本背景色
    const handleBgColorChange = (color: string) => {
        setBgColor(rootCollections.canvas, color);
    };

    // 裁剪
    const initCrop = () => {
        const {canvas, img} = rootCollections;

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
            top: img.top,
            left: img.left,
            width: (img.width|| 0) * (img.scaleX || 0) - 2,
            height: (img.height || 0) * (img.scaleY || 0) / 2,
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
            // lockScalingFlip: true,
            globalCompositeOperation: 'destination-out',
        });

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

        cropCanvas.on(
            'mouse:down',
            event => {
                cropCanvas.setActiveObject(cropRect);
            }
        );

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
                const {
                    left: imgLeft = 0,
                    top: imgTop = 0,
                    width: imgWidth = 0,
                    height: imgHeight = 0,
                    scaleX: imgScaleX = 0,
                    scaleY: imgScaleY = 0
                } = img;


                if (top <= imgTop) {
                    cropRect.set({
                        top: imgTop
                    });
                }

                if (left < imgLeft) {
                    cropRect.set({
                        left: imgLeft
                    });
                }

                const maxLeft = imgWidth * imgScaleX - width * scaleX + imgLeft - 1;
                if (left >= maxLeft) {
                    cropRect.set({
                        left: maxLeft
                    });
                }

                const maxTop = imgHeight * imgScaleY - height * scaleY + imgTop -1;
                if (top >= maxTop) {
                    cropRect.set({
                        top: maxTop
                    });
                }
            }
        );

        cropCanvas.on(
            'object:scaling',
            event => {
                console.log(event);
                const {
                    top = 0,
                    left = 0,
                    width = 0,
                    height = 0,
                    scaleX = 0,
                    scaleY = 0,
                } = event.target || {};
                const {
                    left: imgLeft = 0,
                    top: imgTop = 0,
                    width: imgWidth = 0,
                    height: imgHeight = 0,
                    scaleX: imgScaleX = 0,
                    scaleY: imgScaleY = 0
                } = img;


                console.log(width, width * scaleX, '|', imgWidth, imgWidth * imgScaleX);

                if (width * scaleX >= imgWidth * imgScaleX) {
                    cropRect.set({
                        width
                    });
                }

                if (height * scaleY >= imgHeight * imgScaleY) {
                    cropRect.set({
                        height
                    });
                }

                cropCanvas.renderAll();
            }
        );
    };

    const handleClipImg = () => {
        console.log(cropCanvas?._activeObject);
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

        rootCollections.canvas.clipPath = clipPath;
        rootCollections.canvas.renderAll();

        console.log(rootCollections.canvas);
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
