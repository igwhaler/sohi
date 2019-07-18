import React, { Component } from 'react';
import './App.css';
import IgDemo from './components/IgDemo';
import IgModal from './components/IgModal';
import IgRef from './components/IgRef';
import IgContext from './components/IgContext';
import IgMemo from './components/IgMemo';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
            visiable: false
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);

        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    handleChangeModal = () => {
        let {visiable} = this.state;

        this.setState({
            visiable: !visiable
        });

        console.log(123);
    }

    render() {
        return (
            this.state.errorInfo
            ? <div>
                <strong>{this.state.error.toString()}</strong>
                <br />
                <strong>{this.state.errorInfo.componentStack}</strong>
            </div>
            : <div className="App">
                <IgDemo></IgDemo>

                <br />

                <p>
                    <a href="javascropt:;" onClick={this.handleChangeModal}>显示/隐藏</a>
                </p>
                {
                    this.state.visiable
                    ? <IgModal>
                        <span>啊哈哈哈</span>
                    </IgModal>
                    : null
                }

                <br />

                <IgRef></IgRef>

                <br />

                <IgContext></IgContext>

                <br />

                <IgMemo></IgMemo>
            </div>
        );
    }
}

export default App;
