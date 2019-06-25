import {Component} from 'react';
import ReactDOM from 'react-dom';

class IgModal extends Component {
    rootModal = document.getElementById('rootModal');

    constructor(props) {
        super(props);

        this.el = document.createElement('div');

        console.log(this);
    }

    componentDidMount() {
        this.rootModal.appendChild(this.el)
    }

    componentWillUnmount() {
        this.rootModal.removeChild(this.el)
    }


    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}

export default IgModal;
