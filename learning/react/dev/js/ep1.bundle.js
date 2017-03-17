webpackJsonp([ 0 ], [ /* 0 */
, /* 1 */
, /* 2 */
, /* 3 */
/***/
function(e, t, n) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    n(7);
    var l = n(1), u = a(l), o = (0, u.default)("body");
    o.css({
        backgroundColor: "tan"
    });
}, /* 4 */
/***/
function(e, t, n) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var l = n(0), u = a(l), o = n(2), i = a(o), d = n(1), r = a(d), s = u.default.createClass({
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
            return u.default.createElement("div", {
                className: "box1",
                onClick: this.handleClick
            }, "你好,", t.question, " ", u.default.createElement("span", null, "我", n.like ? "是" : "不是", t.name, "!"), " ");
        },
        handleClick: function() {
            var e = [ this.props, this.state ], t = e[0], n = e[1];
            this.setState({
                like: !n.like
            }), t.handles(t.name);
        }
    }), c = [ "asd", "fgh", "jkl" ], f = 123, p = u.default.createClass({
        displayName: "ComponentArr",
        propTypes: {
            title: u.default.PropTypes.string.isRequired
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
            r.default.ajax({
                url: "//licaishi.sina.com.cn/admin2/api/leftMenu",
                type: "get",
                dataType: "jsonp",
                data: {}
            }).done(function(t) {
                console.log(t), t && 0 === t.code ? e.setState({
                    data: t,
                    loading: !1
                }) : e.setState({
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
            return u.default.createElement("div", {
                onClick: this.handleClick
            }, c.map(function(t) {
                return u.default.createElement(s, {
                    question: n.question,
                    name: t,
                    handles: e.inputFocus
                });
            }), u.default.createElement("input", {
                type: "text",
                ref: "myTextInput"
            }), u.default.createElement(m, {
                data: a.data,
                loading: a.loading
            }));
        },
        inputFocus: function(e) {
            this.refs.myTextInput.value = e, this.refs.myTextInput.focus();
        }
    }), m = u.default.createClass({
        displayName: "ComponentTest",
        render: function() {
            var e = this.props, t = e.data;
            return u.default.createElement("div", null, e.loading ? u.default.createElement("h2", null, u.default.createElement(h, null)) : u.default.createElement("h2", null, t && 0 === t.code ? u.default.createElement(g, {
                data: t
            }) : u.default.createElement(E, null)));
        }
    }), h = u.default.createClass({
        displayName: "Loadinng",
        render: function() {
            return u.default.createElement("div", null, "loading");
        }
    }), g = u.default.createClass({
        displayName: "LoadSuccess",
        render: function() {
            var e = this.props, t = e.data;
            return u.default.createElement("div", null, t.msg);
        }
    }), E = u.default.createClass({
        displayName: "LoadFail",
        render: function() {
            return u.default.createElement("div", null, "加载失败");
        }
    });
    i.default.render(u.default.createElement("div", {
        className: "container"
    }, u.default.createElement(p, {
        question: "我是谁？",
        title: f
    })), document.body);
}, /* 5 */
, /* 6 */
, /* 7 */
/***/
function(e, t) {}, /* 8 */
, /* 9 */
, /* 10 */
/***/
function(e, t, n) {
    n(3), e.exports = n(4);
} ], [ 10 ]);