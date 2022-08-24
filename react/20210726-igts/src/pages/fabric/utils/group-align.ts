import {fabric,} from 'fabric';
import _ from 'lodash';

export type alignType = 'top' | 'right' | 'bottom' | 'left' | 'v-center' | 'h-center' | string;

export const AlignConfigs = [
    {
        type: 'top',
        value: '顶对齐'
    },
    {
        type: 'right',
        value: '右对齐'
    },
    {
        type: 'bottom',
        value: '底对齐'
    },
    {
        type: 'left',
        value: '左对齐'
    },
    {
        type: 'v-center',
        value: '水平居中'
    },
    {
        type: 'h-center',
        value: '垂直居中'
    },
];

const computers: [number, alignType[]][] = [
    [
        -1,
        ['top', 'left']
    ],
    [
        1,
        ['bottom', 'right'],
    ],
    [
        0,
        ['v-center', 'h-center']
    ]
];

const getPosition = (
    align: alignType,
    {
        wrapWidth = 0,
        wrapHeight = 0,
        selfWidth = 0,
        selfHeight = 0
    }
) => {
    const activeItem = computers.find(item => item[1].includes(align)) || [];
    const factor = activeItem[0] || 0;

    switch (align) {
        case 'top':
        case 'bottom':
        case 'v-center':
            return {
                top: factor * (wrapHeight - selfHeight) / 2
            };

        case 'right':
        case 'left':
        case 'h-center':
            return {
                left: factor * (wrapWidth - selfWidth) / 2
            };
    }
};

export const setGroupAlign = (instance: fabric.Canvas, align: string) => {
    const activeGroup = instance._activeObject;
    const selectList = _.get(activeGroup, '_objects', []);

    // console.log(activeGroup, selectList);

    if (selectList.length <= 1) {
        console.warn('setGroupAlign: 未选中元素');
        return;
    }

    selectList.forEach((item: any) => {
        item.set(getPosition(align, {
            wrapWidth: activeGroup.width,
            wrapHeight: activeGroup.height,
            selfWidth: item.width,
            selfHeight: item.height
        }));
    });

    instance.renderAll();
};
