import {fabric} from 'fabric';

export const addText = (instance: fabric.Canvas, text: string, options = {}) => {
    const oText = new fabric.Textbox(text, {
        name: 'text',
        top: 12,
        left: 10,
        fontSize: 24,
        // moveCursor: 'true',
        // evented: true,
        // textBackgroundColor: 'red',
        // backgroundColor: 'red',
        // originX: 'center',
        // originY: 'center',
        // left: (instance?.width || 0) / 2,
        // top: (instance?.height || 0) / 2,
        ...options
    });

    const boxWidth = (oText.width || 0) + 20;
    const boxHeight = (oText.height || 0) + 20;

    const textContainer = new fabric.Rect({
        name: 'container',
        top: 0,
        left: 0,
        width: boxWidth,
        height: boxHeight,
        rx: 10,
        ry: 10,
        fill: '#D81B60',
    });

    const textBox = new fabric.Group([textContainer, oText], {
        name: 'textBox',
        originX: 'center',
        originY: 'center',
        left: (instance.width || 0) / 2,
        top: (instance.height || 0) / 2,
        width: boxWidth,
        height: boxHeight,
        padding: 10,
    });

    instance.add(textBox);
    instance.renderAll();

    textBox.on('mousedblclick', event => {
        console.log(event);

        instance.setActiveObject(oText);
        oText.enterEditing();
        oText.selectAll();
        instance.renderAll();
        // oText.set({
        //     text: '123123'
        // });
    });

    instance.on('text:changed', event => {
        // console.log(event);
    });


    // console.log(oText);
    // console.log(instance._objects);
    // instance.add(oText);
};

export const setBgColor = (instance: fabric.Canvas, color: string) => {
    const activeText = instance._activeObject;

    if (activeText && activeText.isType('i-text')) {
        activeText.setOptions({
            textBackgroundColor: color
        });

        instance.renderAll();
    }
};
