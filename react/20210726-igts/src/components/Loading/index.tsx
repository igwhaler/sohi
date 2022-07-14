import React from 'react';
import { Spin } from 'antd';
import './index.scss';

const Loading = ({
    isLoading,
    render,
    children
}: {
    isLoading: boolean
    render?: () => React.ReactElement
    children?: React.ReactElement
}) => {

    return isLoading ? (
        <div className="loading">
            <Spin className="self-spin" />
        </div>
    ) : (
        <>
            {children || (render && render()) || null}
        </>
    );
};

export default Loading;
