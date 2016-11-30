var Title = React.createClass({
    render: function() {
        return React.createElement(
        "h1", {className: "g-title"}, "123"
    );
    },
});

React.render(
    <Title />,
    document.getElementById("container")
);