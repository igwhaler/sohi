webpackJsonp([ 5 ], {
    /***/
    122: /***/
    function(e, t, l) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var u = l(18), a = n(u), r = l(32), c = n(r), o = l(50), d = function() {
            return a.default.createElement(o.BrowserRouter, null, a.default.createElement("div", null, a.default.createElement("ul", null, a.default.createElement("li", null, a.default.createElement(o.Link, {
                to: "/"
            }, "exact")), a.default.createElement("li", null, a.default.createElement(o.Link, {
                to: "/home"
            }, "Home")), a.default.createElement("li", null, a.default.createElement(o.Link, {
                to: "/about"
            }, "About")), a.default.createElement("li", null, a.default.createElement(o.Link, {
                to: "/topic"
            }, "Topic"))), a.default.createElement("div", null, a.default.createElement(o.Route, {
                path: "/",
                component: m
            }), a.default.createElement(o.Route, {
                path: "/home",
                component: f
            }), a.default.createElement(o.Route, {
                path: "/about",
                component: i
            }), a.default.createElement(o.Route, {
                path: "/topic",
                component: E
            }))));
        }, m = function() {
            return a.default.createElement("div", null, a.default.createElement("h2", null, "Exact"));
        }, f = function() {
            return a.default.createElement("div", null, a.default.createElement("h2", null, "Home"));
        }, i = function() {
            return a.default.createElement("div", null, a.default.createElement("h2", null, "About"));
        }, E = function(e) {
            var t = e.match, l = [ "rendering", "components", "props-v-state" ], n = t.url;
            return a.default.createElement("div", null, a.default.createElement("h2", null, "Topic"), a.default.createElement("ul", null, l.map(function(e) {
                return a.default.createElement("li", null, a.default.createElement(o.Link, {
                    to: n + "/" + e.toUpperCase()
                }, e));
            })), a.default.createElement(o.Route, {
                path: n + "/:topicId",
                component: p
            }), a.default.createElement(o.Route, {
                exact: !0,
                path: n,
                render: function() {
                    return a.default.createElement("h3", null, "Please select a topic.");
                }
            }));
        }, p = function(e) {
            var t = e.match;
            return a.default.createElement("div", null, a.default.createElement("h3", null, t.params.topicId));
        };
        c.default.render(a.default.createElement(d, null), document.body);
    },
    /***/
    320: /***/
    function(e, t, l) {
        e.exports = l(122);
    }
}, [ 320 ]);