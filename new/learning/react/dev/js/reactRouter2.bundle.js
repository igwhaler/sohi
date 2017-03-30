webpackJsonp([ 2 ], {
    /***/
    126: /***/
    function(e, t, l) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var u = l(18), a = n(u), r = l(32), c = n(r), o = l(50), d = function() {
            return a.default.createElement("div", null, a.default.createElement("h1", null, "Home"));
        }, m = function() {
            return a.default.createElement("div", null, a.default.createElement("h1", null, "one"));
        }, f = function(e) {
            var t = e.match;
            return a.default.createElement("div", null, a.default.createElement("h1", null, "Two"), a.default.createElement("ul", null, a.default.createElement("li", null, a.default.createElement(o.Link, {
                to: t.url + "/two_1"
            }, "哈哈")), a.default.createElement("li", null, a.default.createElement(o.Link, {
                to: t.url + "/two_2"
            }, "呵呵"))), a.default.createElement("div", null, a.default.createElement(o.Route, {
                path: t.url + "/:twoItem",
                component: E
            }), a.default.createElement(o.Route, {
                exact: !0,
                path: t.url,
                render: function() {
                    return a.default.createElement("h3", null, "123123");
                }
            })));
        }, E = function(e) {
            var t = e.match;
            return a.default.createElement("div", null, a.default.createElement("h2", null, t.params.twoItem));
        }, i = function() {
            return a.default.createElement(o.BrowserRouter, null, a.default.createElement("div", null, a.default.createElement("ul", null, a.default.createElement("li", null, a.default.createElement(o.Link, {
                to: "/"
            }, "Home")), a.default.createElement("li", null, a.default.createElement(o.Link, {
                to: "/one"
            }, "One")), a.default.createElement("li", null, a.default.createElement(o.Link, {
                to: "/two"
            }, "Two"))), a.default.createElement("div", null, a.default.createElement(o.Route, {
                exact: !0,
                path: "/",
                component: d
            }), a.default.createElement(o.Route, {
                path: "/one",
                component: m
            }), a.default.createElement(o.Route, {
                path: "/two",
                component: f
            }))));
        };
        c.default.render(a.default.createElement(i, null), document.body);
    },
    /***/
    323: /***/
    function(e, t, l) {
        e.exports = l(126);
    }
}, [ 323 ]);