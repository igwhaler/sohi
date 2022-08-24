import {Button, Select} from 'antd';
import {fabric} from 'fabric';
import {addText, setBgColor} from '../../utils/text';
import {setGroupAlign, AlignConfigs, alignType} from '../../utils/group-align';

const {Option} = Select;

const ToolBars = ({rootCollections}: {
    rootCollections: {
        canvas: fabric.Canvas;
        img: fabric.Image;
    }
}) => {

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

    // 添加图片
    const handleClipImg = () => {
        const {canvas, img} = rootCollections;
        // 添加蒙层
        const maskRect = new fabric.Rect({
            top: img.top,
            left: (img.left || 0) - 1,

            width: img.width,
            height: img.height,
            scaleX: img.scaleX,
            scaleY: img.scaleY,
            // fill: 'green',
            fill: 'rgba(51, 51, 51, 0.5)',
            evented: false,
            hasControls: false,
            selectable: false,
            // globalCompositeOperation: 'destination-out'
            // globalCompositeOperation: 'destination-over'
        });

        canvas.add(maskRect);
        canvas.renderAll();

        // 添加裁剪框
        const selfBoeder = 10 / (img.scaleX || 1);
        const cropRect = new fabric.Rect({
            top: img.top,
            left: img.left,
            width: (img.width || 0) / 2,
            height: ((img.height || 0) - selfBoeder) / 2,
            scaleX: img.scaleX,
            scaleY: img.scaleY,
            stroke: 'green',
            strokeWidth: 2,
            padding: 0,
            hasBorders: true,
            cornerColor: 'green',
            cornerSize: 20,
            transparentCorners: false,
            cornerStrokeColor: 'transparent',
            minScaleLimit: 0.2 * (img.scaleX || 1),
            // lockScalingFlip: true,
            globalCompositeOperation: 'destination-out'
        });

        cropRect.setControlsVisibility({
            ml: false,
            mb: false,
            mr: false,
            mt: false,
            mtr: false
        });

        console.log(maskRect, cropRect);

        canvas.add(cropRect);
        // canvas.selection = false;

        // canvas

        canvas.renderAll();
    };

    return (
        <div>
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

            <Button onClick={handleClipImg}>裁剪</Button>
        </div>
    );
};

export default ToolBars;
