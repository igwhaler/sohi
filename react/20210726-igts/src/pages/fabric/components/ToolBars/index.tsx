import {Button, Select, Tabs} from 'antd';
import {fabric} from 'fabric';
import {addText, setBgColor} from '../../utils/text';
import {setGroupAlign, AlignConfigs, alignType} from '../../utils/group-align';
import React, {useEffect, useState} from 'react';
import {BoxConfigs} from '../../index';

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
    const [activeKey, setActiveKey] = useState('3');
    const defaultCilpRatio = {
        w: rootCollections.rootImg.width || 1,
        h: rootCollections.rootImg.height || 1
    };
    const [clipRatio, setClipRatio] = useState<{w: number, h: number}>(defaultCilpRatio);

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
            top: -1,
            left: -1,
            width: canvasWidth + 1,
            height: canvasHeight + 1,
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
            event => {
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

                setClipRatio({
                    w: clipInitData.scaleX,
                    h: clipInitData.scaleY
                });

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

    const getFlexBox = (
        width: number,
        height: number,
        ratio: { w: number, h: number }
    ) => {
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
        const clipResBoxData = getFlexBox(BoxConfigs.width, BoxConfigs.height, clipRatio);

        // 裁剪框的真实宽高
        clipWidth = clipWidth * clipScaleX;
        clipHeight = clipHeight * clipScaleY;

        // 计算裁裁剪后的 裁剪框 相对于 背景图 的缩放比
        const scaleWidth = clipWidth / clipResBoxData.width;
        const scaleHeight = clipHeight / clipResBoxData.height;

        // 一、裁剪后居中铺满，全裁剪，背景图+添加的元素；全裁剪有bug，新元素因为放大坐标不对导致选中异常。
        /* rootCollections.rootCanvas._objects.forEach(klass => {
            const {
                top = 0,
                left = 0,
                scaleX = 0,
                scaleY = 0,
            } = klass;

            klass.set({
                top: (top - clipTop) / scaleHeight,
                // top: top / scaleHeight,
                left: (left - clipLeft) / scaleWidth,
                // left: left / scaleWidth,
                scaleX: scaleX / scaleWidth,
                scaleY: scaleY / scaleHeight,
                // width: width / scaleWidth,
                // height: height / scaleHeight
            });
        }); */

        // 二、裁剪后居中铺满，只裁背景图，其它元素不变
        const kclassImg = rootCollections.rootCanvas._objects[0];
        const {
            top = 0,
            left = 0,
            scaleX = 0,
            scaleY = 0,
        } = kclassImg;
        kclassImg.set({
            top: (top - clipTop) / scaleHeight,
            left: (left - clipLeft) / scaleWidth - 0.5,
            scaleX: scaleX / scaleWidth,
            scaleY: scaleY / scaleHeight,
        });

        // 图片裁剪后，重新渲染canvas 宽高
        rootCollections.rootCanvas.setWidth(clipResBoxData.width);
        rootCollections.rootCanvas.setHeight(clipResBoxData.height);
        rootCollections.rootCanvas.renderAll();

        // 重置裁剪位置和大小
        clipCanvas?._objects.forEach(kclass => {
            kclass.set({
                top: -1 * (window.devicePixelRatio || 1),
                left: -1 * (window.devicePixelRatio || 1),
                width: clipResBoxData.width + 1,
                height: clipResBoxData.height + 1,
                scaleX: 1,
                scaleY: 1
            });
        });
        clipCanvas?.setWidth(clipResBoxData.width);
        clipCanvas?.setHeight(clipResBoxData.height);
        clipCanvas?.renderAll();
    };

    // 设置裁剪比例，调整裁剪框的大小；裁剪框的大小 由图片大小 + 裁剪比例共同决定
    const selectClipRatio = (ratio: {w: number, h: number}) => {
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

            setClipRatio(ratio);

            const {
                width: canvasWidth = 0,
                height: canvasHeight = 0
            } = rootCollections.rootCanvas;
            const selfClipData = {
                top: 0,
                left: 0,
                width: canvasWidth,
                height: canvasHeight,
                scaleX: 1,
                scaleY: 1
            };

            /* if (canvasWidth / ratio.w * ratio.h >= canvasHeight) {
                selfClipData.width = canvasHeight / ratio.h * ratio.w;
                selfClipData.height = canvasHeight;
                selfClipData.left = (canvasWidth - selfClipData.width) / 2;
            } else {
                selfClipData.width = canvasWidth;
                selfClipData.height = canvasWidth / ratio.w * ratio.h;
                selfClipData.top = (canvasHeight - selfClipData.height) / 2;
            } */
            const {width, height, flex} = getFlexBox(canvasWidth, canvasHeight, ratio);
            selfClipData.width = width;
            selfClipData.height = height;
            if (flex === 'w') {
                selfClipData.top = (canvasHeight - height) / 2;
            }
            if (flex === 'h') {
                selfClipData.left = (canvasWidth - width) / 2;
            }

            clipCanvas?._activeObject.set(selfClipData);
            clipCanvas?.renderAll();
        };
    };

    useEffect(() => {
        // handleAddText();
        // initClip();
    }, []);

    const handleChangTab = (key: string) => {
        if (activeKey === '2') {
            if (['1', '3', '4', '5'].includes(key)) {
                clipCanvas?.dispose();
            }
        }

        switch (key) {
            case '2':
                initClip();
                break;
            case '3':
                break;
        }

        setActiveKey(key);
    };

    return (
        <div>
            <Tabs activeKey={activeKey} onChange={handleChangTab}>
                <TabPane tab="模板" key="1">模板列表</TabPane>

                <TabPane tab="裁剪" key="2">
                    <Button onClick={selectClipRatio(defaultCilpRatio)}>原图比例</Button>
                    <Button onClick={selectClipRatio({w: 1, h: 1})}>1:1</Button>
                    <Button onClick={selectClipRatio({w: 3, h: 4})}>3:4</Button>
                    <Button onClick={selectClipRatio({w: 4, h: 3})}>4:3</Button>
                    <Button onClick={selectClipRatio({w: 2, h: 3})}>2:3</Button>
                    <Button onClick={selectClipRatio({w: 3, h: 2})}>3:2</Button>
                    <Button onClick={selectClipRatio({w: 9, h: 16})}>9:16</Button>
                    <Button onClick={selectClipRatio({w: 16, h: 9})}>16:9</Button>
                    <Button onClick={selectClipRatio({w: 0, h: 0})}>自定义</Button>
                    <Button type="primary" onClick={handleClipImg}>完成裁剪</Button>
                </TabPane>

                <TabPane tab="文字" key="3">
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

                <TabPane tab="贴纸" key="4">贴纸列表</TabPane>

                <TabPane tab="滤镜" key="5">滤镜列表</TabPane>
            </Tabs>
        </div>
    );
};

export default ToolBars;
