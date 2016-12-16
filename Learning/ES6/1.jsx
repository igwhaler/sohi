var Hello = React.createClass({
    getInitiailState: function () {

    }
});

var Hi = React.createClass({
    getInitiailState: function () {
        return {
            name: "fs"
        };
    },

    componentDidMount: function () {

    },

    render: function () {
        return (
            <div>{this.state.name}</div>
        )
    }

});

var a = 1;
function  fn() {
    $("div").on("click", function () {
        console.log(a);
    });

    document.getElementById("div1").addEventListener("click", function () {
        console.log(1);
    }, false);
}
