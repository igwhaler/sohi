webpackJsonp([ 0 ], [ /* 0 */
, /* 1 */
, /* 2 */
, /* 3 */
, /* 4 */
, /* 5 */
/***/
function(e, t, n) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    n(2), n(11), (0, a(n(3)).default)("body").css({
        backgroundColor: "tan"
    });
}, /* 6 */
/***/
function(e, t, n) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var l = n(0), i = a(l), o = n(1), u = a(o), s = n(3), d = a(s), r = n(13), c = n(12), f = i.default.createClass({
        displayName: "ComponentItem",
        getInitialState: function() {
            return {
                like: !0
            };
        },
        componentWillMount: function() {
            console.log("WillMount");
        },
        componentDidMount: function() {
            console.log("DidMount");
        },
        componentWillUpdate: function(e, t) {
            console.log(e, t, 1);
        },
        componentDidUpdate: function(e, t) {
            console.log(e, t, 2);
        },
        render: function() {
            var e = [ this.props, this.state ], t = e[0], n = e[1];
            return i.default.createElement("div", {
                className: "box1",
                onClick: this.handleClick
            }, "你好,", t.question, " ", i.default.createElement("span", null, "我", n.like ? "是" : "不是", t.name, "!"), " ");
        },
        handleClick: function() {
            var e = [ this.props, this.state ], t = e[0], n = e[1];
            this.setState({
                like: !n.like
            }), t.handles(t.name);
        }
    }), m = [ "asd", "fgh", "jkl" ], p = i.default.createClass({
        displayName: "ComponentArr",
        propTypes: {
            title: i.default.PropTypes.string.isRequired
        },
        getDefaultProps: function() {
            return {
                age: 24
            };
        },
        getInitialState: function() {
            return {
                data: null,
                loading: !0
            };
        },
        componentDidMount: function() {
            var e = this;
            d.default.ajax({
                url: "//licaishi.sina.com.cn/admin2/api/leftMenu",
                type: "get",
                dataType: "jsonp",
                data: {}
            }).done(function(t) {
                console.log(t), t && t.code, e.setState({
                    data: t,
                    loading: !1
                });
            }).fail(function() {
                e.setState({
                    data: null,
                    loading: !1
                });
            });
        },
        render: function() {
            var e = this, t = [ this.props, this.state ], n = t[0], a = t[1];
            return i.default.createElement("div", {
                onClick: this.handleClick
            }, m.map(function(t) {
                return i.default.createElement(f, {
                    question: n.question,
                    name: t,
                    handles: e.inputFocus
                });
            }), i.default.createElement("input", {
                type: "text",
                ref: "myTextInput"
            }), i.default.createElement(g, {
                data: a.data,
                loading: a.loading
            }));
        },
        inputFocus: function(e) {
            this.refs.myTextInput.value = e, this.refs.myTextInput.focus();
        }
    }), g = i.default.createClass({
        displayName: "ComponentTest",
        render: function() {
            var e = this.props, t = e.data;
            return i.default.createElement("div", {
                className: "wrap-loading"
            }, e.loading ? i.default.createElement("h2", null, i.default.createElement(h, null)) : i.default.createElement("h2", null, t && 0 === t.code ? i.default.createElement(E, {
                data: t
            }) : i.default.createElement(y, null)));
        }
    }), h = i.default.createClass({
        displayName: "Loadinng",
        render: function() {
            return i.default.createElement("div", null, "loading");
        }
    }), E = i.default.createClass({
        displayName: "LoadSuccess",
        render: function() {
            var e = this.props, t = e.data;
            return i.default.createElement("div", null, t.msg);
        }
    }), y = i.default.createClass({
        displayName: "LoadFail",
        render: function() {
            return i.default.createElement("div", null, "加载失败");
        }
    });
    u.default.render(i.default.createElement("div", {
        className: "container"
    }, i.default.createElement("img", {
        src: c,
        style: {
            display: "block",
            width: "100%"
        }
    }), i.default.createElement("i", {
        className: "icon icon-logo"
    }), i.default.createElement("i", {
        className: "icon icon-delete"
    }), i.default.createElement("img", {
        src: r
    }), i.default.createElement(p, {
        question: "我是谁？",
        title: 123
    })), document.body);
}, /* 7 */
, /* 8 */
, /* 9 */
, /* 10 */
, /* 11 */
/***/
function(e, t) {}, /* 12 */
/***/
function(e, t) {
    e.exports = "../images/bg.jpg";
}, /* 13 */
/***/
function(e, t) {
    e.exports = "../images/yes.png";
}, /* 14 */
, /* 15 */
, /* 16 */
/***/
function(e, t, n) {
    n(5), e.exports = n(6);
} ], [ 16 ]);