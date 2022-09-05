import {useEffect, useRef, useState} from 'react';
import {fabric} from 'fabric';
import ToolBars from './components/ToolBars';
import EditOpterators from './components/Operators';
import './index.scss';
import imgDemo from './assets/big.jpeg';
import imgRed from './assets/red.jpeg';
import {BoxConfigs} from './const';
import {RootCollectionsType} from './types';


const FabricJSCanvas = () => {
    const rootCanvasEl = useRef(null);
    const clipCanvasEl = useRef(null);
    const [rootCollections, setRootCollections] = useState<RootCollectionsType>();

    useEffect(() => {
        // init
        const rootCanvas = new fabric.Canvas(rootCanvasEl.current);

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

    return (
        <div className="pic-editor">
            {rootCollections && (
                <ToolBars
                    rootCollections={rootCollections}
                    clipCanvasEl={clipCanvasEl}
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
                    <canvas ref={rootCanvasEl} />
                </div>

                <div className="clip-canvas">
                    <canvas
                        className="clip-canvas"
                        ref={clipCanvasEl}
                    />
                </div>
            </div>

            {rootCollections && (
                <EditOpterators
                    rootCollections={rootCollections}
                />
            )}
        </div>
    );
};

export default FabricJSCanvas;
