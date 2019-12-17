import React, { Component } from 'react';
import styles from './index.module.scss';

const SelfModal = ({visible}) => {
    return (
        visible
        ? (
            <div className={styles['error-modal']}>
                <div className={styles['cover']}>
                    <div className={styles['body']}>
                        <div className={styles['content']}></div>
                    </div>
                </div>
            </div>
        )
        : null
    );
}

class ErrorModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    componentDidMount() { }

    handleShow = () => {
        this.setState({
            visible: true
        });
    }

    render() {
        let { visible } = this.state;

        return (
            <>
                <button onClick={this.handleShow}>展示</button>
                {/* {
                    visible
                    ? (
                        <div className={styles['error-modal']}>
                            <div className={styles['cover']}>
                                <div className={styles['body']}>
                                    <div className={styles['content']}></div>
                                </div>
                            </div>
                        </div>
                    )
                    : null
                } */}
                <SelfModal visible={visible} />
            </>
        );
    }
}

export default ErrorModal;
