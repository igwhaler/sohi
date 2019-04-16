import React, { Suspense } from 'react';

/**
 * 按需加载组件
 * @props {Component} component
 * @props {Component} fallback 可以是纯函数组件
 * @return {Component}
 */
const LazyComponent = (props) => {
    let { component: SelfComponent, fallback = null } = props

    return (
        <Suspense fallback={fallback}>
            <SelfComponent></SelfComponent>
        </Suspense>
    )
}

export default LazyComponent
