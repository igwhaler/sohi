import {Button, Select, Tabs} from 'antd';
import {fabric} from 'fabric';
import {addText, setBgColor} from '../../utils/text';
import {setGroupAlign, AlignConfigs, alignType} from '../../utils/group-align';
import React, {useEffect, useState} from 'react';

const {Option} = Select;
const {TabPane} = Tabs;

const ToolBars = ({rootCollections, clips}: {
    rootCollections: {
        rootCanvas: fabric.Canvas;
        rootImg: fabric.Image;
    };
    clips: {
        clipCanvasEl: React.MutableRefObject<null>;
    };
}) => {
    const [clipCanvas, setCropCanvas] = useState<fabric.Canvas>();

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
    const initClip = () => {
        const {rootCanvas} = rootCollections;
        const {
            width: canvasWidth = 0,
            height: canvasHeight = 0,
        } = rootCanvas;

        // 初始化裁剪canvas
        const clipCanvas = new fabric.Canvas(clips.clipCanvasEl.current, {
            width: canvasWidth,
            height: canvasHeight,
        });
        setCropCanvas(clipCanvas);

        // 添加蒙层
        const maskRect = new fabric.Rect({
            top: -2,
            left: -2,
            width: canvasWidth + 4,
            height: canvasHeight + 4,
            fill: 'rgba(51, 51, 51, 0.5)',
            evented: false,
            hasControls: false,
            selectable: false,
        });


        // 添加裁剪框
        const clipRect = new fabric.Rect({
            top: 0,
            left: 0,
            width: canvasWidth / 2,
            height: canvasHeight / 2,
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
            event => {
                clipCanvas.setActiveObject(clipRect);
            }
        );

        // 拖拽裁剪框 不能溢出图片区域
        clipCanvas.on(
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
                if (top <= 0) {
                    if (corner === 'tl' || corner === 'tr') {
                        clipRect.set(clipInitData);
                        return;
                    }
                }

                //  ◰ + ◱ 溢出左侧
                if (left < 0) {
                    if (corner === 'tl' || corner === 'bl') {
                        clipRect.set(clipInitData);
                        return;
                    }
                }

                // ◱ + ◲ 溢出底部
                const maxTop = canvasHeight - height * scaleY -1;
                if (top >= maxTop) {
                    if (corner === 'bl' || corner === 'br') {
                        clipRect.set(clipInitData);
                        return;
                    }
                }

                // ◳ + ◲ 溢出右侧
                const maxLeft = canvasWidth - width * scaleX - 1;
                if (left >= maxLeft) {
                    if (corner === 'tr' || corner === 'br') {
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

    // 完成裁剪
    const handleClipImg = () => {
        const {
            width: canvasWidth = 0,
            height: canvasHeight = 0
        } = rootCollections.rootCanvas;
        let {
            top: clipTop = 0,
            left: clipLeft = 0,
            width: clipWidth = 0,
            height: clipHeight = 0,
            scaleX: clipScaleX = 0,
            scaleY: clipScaleY = 0
        } = clipCanvas?._activeObject || {};

        clipWidth = clipWidth * clipScaleX;
        clipHeight = clipHeight * clipScaleY;

        // 计算裁裁剪后的缩放
        const scaleWidth = clipWidth / canvasWidth;
        const scaleHeight = clipHeight / canvasHeight;

        // 裁剪后居中铺满
        rootCollections.rootCanvas._objects.forEach(klass => {
            const {
                top = 0,
                left = 0,
                scaleX = 0,
                scaleY = 0
            } = klass;

            klass.set({
                top: (top - clipTop) / scaleHeight,
                left: (left - clipLeft) / scaleWidth,
                scaleX: scaleX / scaleWidth,
                scaleY: scaleY / scaleHeight,
            });
        });

        // 添加 clipPath
        /* const clipPath = new fabric.Rect({
            top: clipTop / scaleHeight,
            // top,
            left: clipLeft / scaleWidth,
            // left,
            width: clipWidth / scaleWidth,
            height: clipHeight / scaleHeight,
        });
        rootCollections.rootCanvas.clipPath = clipPath; */

        rootCollections.rootCanvas.renderAll();
    };

    useEffect(() => {
        // handleAddText();
        // initClip();
    }, []);

    const handleChangTab = (key: string) => {
        switch (key) {
            case '1':
                clipCanvas?.dispose();
                break;
            case '2':
                // rootCollections.rootCanvas._setActiveObject(null);
                initClip();
                break;
        }
    };

    return (
        <div>
            <Tabs defaultActiveKey="1" onChange={handleChangTab}>
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
