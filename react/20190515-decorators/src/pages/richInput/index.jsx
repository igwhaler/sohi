import React, {Component} from 'react';
import './index.scss';

// class

export default class RichInput extends Component {
    state = {
        html: '<span>123</span>456'
    }

    handleChange = (e) => {
        console.log(e.target.innerHTML)
    }

    handleFocus = (e) => {
        // console.log(e.target, window.getSelection())
    }

    render() {
        return (
            <div
                id="richInput"
                className="rich-input"
                contentEditable="true"
                onInput={this.handleChange}
                onFocus={this.handleFocus}
                dangerouslySetInnerHTML={{__html: this.state.html}}
            >
            </div>
        );
    }
}
