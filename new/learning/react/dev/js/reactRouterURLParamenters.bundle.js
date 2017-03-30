webpackJsonp([ 4 ], {
    /***/
    123: /***/
    function(e, t, l) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var u = l(18), a = n(u), r = l(32), c = n(r), d = l(50), f = function() {
            return a.default.createElement(d.BrowserRouter, null, a.default.createElement("div", null, a.default.createElement("ul", null, a.default.createElement("li", null, a.default.createElement(d.Link, {
                to: "/a"
            }, "A")), a.default.createElement("li", null, a.default.createElement(d.Link, {
                to: "/b"
            }, "B")), a.default.createElement("li", null, a.default.createElement(d.Link, {
                to: "/c"
            }, "C"))), a.default.createElement("div", null, a.default.createElement(d.Route, {
                path: "/:id",
                component: m
            }))));
        }, m = function(e) {
            var t = e.match;
            return a.default.createElement("div", null, a.default.createElement("h2", null, "ID: ", t.params.id));
        };
        c.default.render(a.default.createElement(f, null), document.body);
    },
    /***/
    321: /***/
    function(e, t, l) {
        e.exports = l(123);
    }
}, [ 321 ]);