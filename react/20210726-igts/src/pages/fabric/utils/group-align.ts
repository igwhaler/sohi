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
        type: 'x-center',
        value: '水平居中'
    },
    {
        type: 'y-center',
        value: '垂直居中'
    },
];

// 框选后，基于框中心点未坐标原点
export const setGroupAlign = (instance: fabric.Canvas, align: string) => {
    const activeGroup = instance._activeObject;
    const selectList = _.get(activeGroup, '_objects', []);

    if (selectList.length <= 1) {
        console.warn('setGroupAlign: 未选中元素');
        return;
    }

    const {
        width: wrapWidth = 0,
        height: wrapHeight = 0
    } = activeGroup;

    selectList.forEach((kclass: any) => {
        const {
            width = 0,
            height = 0
        } = kclass;

        switch (align) {
            case 'left':
                kclass.set({
                    left: - wrapWidth / 2,
                });
                break;
            case 'top':
                kclass.set({
                    top: - wrapHeight / 2,
                });
                break;
            case 'right':
                kclass.set({
                    left: wrapWidth / 2 - width,
                });
                break;
            case 'bottom':
                kclass.set({
                    top: wrapHeight / 2 - height,
                });
                break;
            case 'x-center':
                kclass.set({
                    left: - width / 2
                });
                break;

            case 'y-center':
                kclass.set({
                    top: - height / 2,
                });
                break;
        }
    });

    instance.renderAll();
};
