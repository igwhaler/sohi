import {fabric} from 'fabric';

export const addText = (instance: fabric.Canvas, text: string, options = {}) => {
    const oText = new fabric.Textbox(text, {
        name: 'text',
        // top: 12,
        // left: 10,
        fontSize: 24,
        textBackgroundColor: 'red',
        backgroundColor: 'red',
        originX: 'left',
        originY: 'top',
        ...options
    });

    // 添加文本居中
    oText.set({
        left: (instance.width! - oText.width!) / 2,
        top: (instance.height! - oText.height!) / 2,
    });

    // instance.renderAll();

    oText.on('mousedblclick', event => {
        console.log(event);
    });

    instance.add(oText);

    // const boxWidth = oText.width! + 20;
    // const boxHeight = oText.height! + 20;

    // const textContainer = new fabric.Rect({
    //     name: 'container',
    //     left: 0,
    //     top: 0,
    //     width: boxWidth,
    //     height: boxHeight,
    //     rx: 10,
    //     ry: 10,
    //     fill: '#D81B60',
    // });

    // const textBox = new fabric.Group([textContainer, oText], {
    //     name: 'textBox',
    //     originX: 'center',
    //     originY: 'center',
    //     left: instance.width! / 2,
    //     top: instance.height! / 2,
    //     width: boxWidth,
    //     height: boxHeight,
    //     padding: 10,
    // });

    // // instance.add(textBox);
    // // instance.renderAll();

    // textBox.on('mousedblclick', event => {
    //     console.log(event);

    //     instance.setActiveObject(oText);
    //     oText.enterEditing();
    //     oText.selectAll();
    //     instance.renderAll();
    //     // oText.set({
    //     //     text: '123123'
    //     // });
    // });

    // instance.on('text:changed', event => {
    //     // console.log(event);
    // });


    // console.log(oText);
    // console.log(instance._objects);

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
