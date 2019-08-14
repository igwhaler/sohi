import React, {Component} from 'react';

// 修饰类组件
export default (title = '大鱼你个锅锅') => WorkComponent => {
    return class extends Component {
        componentDidMount () {
            document.title = title;
        }

        render() {
            return <WorkComponent />;
        }
    }
}

// 修饰类的属性
export const funcDocumentTitle = (title = '大鱼你个锅锅') => (target, name, descriptor) => {
    let oldValue = descriptor.value;

    descriptor.value = () => {
        document.title = title;

        return oldValue();
    }

    return descriptor;
};
