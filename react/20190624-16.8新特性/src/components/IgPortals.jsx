import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const SelfDemo = () => {
    return ReactDOM.createPortal(
        (
            <div>123</div>
        ),
        document.getElementById('rootModal')
    );
}

class IgPortals extends PureComponent {
    componentDidMount() {}

    render() {
        return (
            <div>
                <SelfDemo />
            </div>
        )
    }
}

export default IgPortals;
