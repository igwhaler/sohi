import {Button, Select, Tabs} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import {fabric} from 'fabric';
import {addText, setBgColor} from '../../utils/text';
import {setGroupAlign, AlignConfigs, alignType} from '../../utils/group-align';
import ClipTools from './ClipTools';
import {RootCollectionsType} from '../../types';
import {initClip} from '../../utils/clip';

const {Option} = Select;
const {TabPane} = Tabs;

const ToolBars = ({
    rootCollections,
    clipCanvasEl
}: {
    rootCollections: RootCollectionsType,
    clipCanvasEl: React.MutableRefObject<null>
}) => {
    const [clipCanvas, setCropCanvas] = useState<fabric.Canvas>();
    const [activeKey, setActiveKey] = useState('3');
    const defaultCilpRatio = {
        w: rootCollections.rootCanvas.width || 1,
        h: rootCollections.rootCanvas.height || 1
    };
    const clipRatioData = useRef(defaultCilpRatio);

    // 添加文本
    const handleAddText = () => {
        addText(rootCollections.rootCanvas, '请输入文字');
    };

    // 设置对齐
    const handleAlignChange = (type: alignType) => {
        setGroupAlign(rootCollections.rootCanvas, type);
    };

    // 设置文本背景色
    const handleBgColorChange = (color: string) => {
        setBgColor(rootCollections.rootCanvas, color);
    };

    useEffect(() => {
        handleAddText();
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
                initClip(
                    {
                        rootCollections,
                        clipCanvasEl,
                        clipRatioData
                    },
                    setCropCanvas
                );
                break;
            case '3':
                break;
        }

        setActiveKey(key);
    };

    return (
        <div className="edit-toolbars">
            <Tabs activeKey={activeKey} onChange={handleChangTab}>
                <TabPane tab="模板" key="1">模板列表</TabPane>

                <TabPane tab="裁剪" key="2">
                    {clipCanvas && (
                        <ClipTools
                            rootCollections={rootCollections}
                            clipCanvas={clipCanvas}
                            clipRatioData={clipRatioData}
                            defaultCilpRatio={defaultCilpRatio}
                        />
                    )}
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
