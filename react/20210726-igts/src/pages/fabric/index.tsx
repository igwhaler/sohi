import {useEffect, useRef, useState} from 'react';
import {Button} from 'antd';
import {fabric} from 'fabric';
import ToolBars from './components/ToolBars';
import './index.scss';
import imgDemo from './big.jpeg';
import imgRed from './red.jpeg';

export const BoxConfigs = {
    width: 800,
    height: 500
};

const FabricJSCanvas = () => {
    const canvasEl = useRef(null);
    const clipCanvasEl = useRef(null);
    const [rootCollections, setRootCollections] = useState<{
        rootCanvas: fabric.Canvas;
        rootImg: fabric.Image;
    }>();

    useEffect(() => {
        // init
        const rootCanvas = new fabric.Canvas(canvasEl.current);

        // load img
        fabric.Image.fromURL(
            // imgDemo,
            imgRed,
            rootImg => {
                // todo: 待计算 适配高度500 还是 宽度800
                rootImg.scaleToHeight(BoxConfigs.height);

                rootCanvas.add(rootImg);

                const {
                    scaleX = 0,
                    scaleY = 0,
                    width = 0,
                    height = 0
                } = rootImg;

                rootCanvas.setWidth(width * scaleX);
                rootCanvas.setHeight(height * scaleY);

                setRootCollections({
                    rootCanvas,
                    rootImg,
                });
            },
            {
                selectable: false,
                crossOrigin: 'anonymous',
            }
        );
        return () => {
            rootCanvas.dispose();
        };
    }, []);

    const handleDownload = () => {
        const ext = 'jpeg';
        const base64 = rootCollections?.rootCanvas?.toDataURL({
            quality: 1,
            format: 'jpeg',
            enableRetinaScaling: true
        }) || '';
        const link = document.createElement("a");

        link.href = base64;
        link.download = `hehe.${ext}`;
        link.click();
    };

    return (
        <div className="editor">
            {rootCollections && (
                <ToolBars
                    rootCollections={rootCollections}
                    clips={{
                        clipCanvasEl: clipCanvasEl,
                        // onClipImg: handleClipImg
                    }}
                />
            )}

            <div
                className="wrap-canvas"
                style={{
                    width: BoxConfigs.width,
                    height: BoxConfigs.height
                }}
            >
                <div className="self-canvas">
                    <canvas ref={canvasEl} />
                </div>

                <div className="clip-canvas">
                    <canvas
                        className="clip-canvas"
                        ref={clipCanvasEl}
                    />
                </div>
            </div>

            <div className="wrap-btns">
                <div className="history">
                    <Button>上一步</Button>
                    <Button>下一步</Button>

                    <Button type="primary" ghost>旋转</Button>
                    <Button type="primary" ghost>左右翻转</Button>
                    <Button type="primary" ghost>上下翻转</Button>

                    <Button type="primary" danger ghost>长按对比</Button>

                    <Button onClick={handleDownload} type="primary">下载</Button>
                </div>
            </div>
        </div>
    );
};

export default FabricJSCanvas;
