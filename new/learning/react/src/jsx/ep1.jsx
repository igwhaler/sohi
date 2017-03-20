import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const oImg = require("../images/yes.png");
const oBg = require("../images/bg.jpg");

let ComponentItem = React.createClass({
    getInitialState() {
        return {
            like: true
        }
    },

    componentWillMount() {
        console.log("WillMount");
    },

    componentDidMount() {
        console.log("DidMount");
        /*this.setState({
            like: false
        })*/
    },

    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps, nextState, 1);
    },

    componentDidUpdate(preProps, preState) {
        console.log(preProps, preState, 2);
    },

    render() {
        let [props, state] = [this.props, this.state];
        return <div className="box1" onClick={this.handleClick}>你好,{props.question} <span>我{state.like ? "是": "不是"}{props.name}!</span> </div>
    },

    handleClick() {
        let [props, state] = [this.props, this.state];
        this.setState({
            like: !state.like
        });
        props.handles(props.name);
    }
});

let arr1 = ["asd", "fgh", "jkl"];
let num1 = 123;
let ComponentArr = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            age: 24
        }
    },

    getInitialState() {
        return {
            data: null,
            loading: true
        }
    },

    componentDidMount() {
        var _this = this;
        $.ajax({
            url: '//licaishi.sina.com.cn/admin2/api/leftMenu',
            type: 'get',
            dataType: 'jsonp',
            data: {}
        })
        .done(function(json) {
            console.log(json);
            if(json && json.code === 0) {
                _this.setState({
                    data: json,
                    loading: false
                });
            }else {
                _this.setState({
                    data: json,
                    loading: false
                });
            }
        })
        .fail(function() {
            _this.setState({
                data: null,
                loading: false
            });
        })
    },

    render() {
        let [props, state] = [this.props, this.state];

        return <div onClick={this.handleClick}>
                    {
                        arr1.map(value => {
                            return <ComponentItem question={props.question} name={value} handles={this.inputFocus}/>
                        })
                    }
                    <input type="text" ref="myTextInput"/>
                    <ComponentTest data={state.data} loading={state.loading}/>
                </div>
    },

    inputFocus(value) {
            this.refs.myTextInput.value = value;
            this.refs.myTextInput.focus();
    }
})

let ComponentTest = React.createClass({
    render() {
        let props = this.props;
        let data = props.data
        return <div className="wrap-loading">
            {
                props.loading
                ?<h2><Loadinng /></h2>
                :<h2>{data && data.code === 0 ? <LoadSuccess data={data}/> : <LoadFail />}</h2>
            }
        </div>
    }
})

let Loadinng = React.createClass({
    render() {
        return <div>
            loading
        </div>
    }
})

let LoadSuccess = React.createClass({
    render() {
        let props = this.props;
        let data = props.data;
        return <div>
            {
                data.msg
            }
        </div>
    }
})

let LoadFail = React.createClass({
    render() {
        return <div>
            加载失败
        </div>
    }
})

ReactDOM.render(
    <div className="container">
        <img src={oBg} style={{display: "block", width: "100%"}}/>
        <i className="icon icon-logo"></i>
        <i className="icon icon-delete"></i>
        <img src={oImg}/>
        <ComponentArr question="我是谁？" title={num1}/>
    </div>,
    document.body
);