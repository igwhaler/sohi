'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* class Point {
    constructor (name, id) {
        this.name = name
        this.id = id
    }
    toString () {
        return '(' + this.name + ':' + this.id + ')'
    }
}

var p = new Point('a', 1)
console.log(p.toString()) */

/* let p = new class {
    constructor (name) {
        this.name = name
    }
    show () {
        console.log(this.name)
    }
}('a')

p.show() */

var Point = function () {
    function Point() {
        var _this = this;

        _classCallCheck(this, Point);

        this.show = function () {
            _this.print();
        };
    }

    _createClass(Point, [{
        key: 'print',
        value: function print() {
            console.log('a');
        }
    }]);

    return Point;
}();

var p = new Point();

var show = p.show;

show();