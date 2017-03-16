import React from "react";
import ReactDOM from "react-dom";


let Cmp1 = React.createClass({
    getInitialState() {

    },
    render() {
        return(
            <div>
                <span>123</span>
            </div>
        )
    }
})

ReactDOM.render(
    <Cmp1 />,
    document.getElementById('div1')
);