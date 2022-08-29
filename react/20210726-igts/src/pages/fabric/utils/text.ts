import {fabric} from 'fabric';

export const addText = (instance: fabric.Canvas, text: string, options = {}) => {
    const oText = new fabric.IText(text, {
        fontSize: 24,
        textBackgroundColor: 'red',
        moveCursor: 'true',
        originX: 'center',
        originY: 'center',
        left: (instance?.width || 0) / 2,
        top: (instance?.height || 0) / 2,
        padding: 10,
        ...options
    });

    instance.add(oText);
};

export const setBgColor = (instance: fabric.Canvas, color: string) => {
    console.log(instance._activeObject);

    const activeText = instance._activeObject;

    if (activeText && activeText.isType('i-text')) {
        activeText.setOptions({
            textBackgroundColor: color
        });

        instance.renderAll();
    }
};
