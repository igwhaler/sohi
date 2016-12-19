var React = require("react");

var Example1 = React.createClass({
    getInitialState: function() {
        return {
            name: "fs",
            age: 24
        };
    },
    render: function () {
         return (
            <div className="box1">{this.state.name}</div>
        );
    }
});

module.exports = Example1;