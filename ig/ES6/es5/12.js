"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*let promise1 = new Promise(function(resolve, reject) {
  console.log("1");
  resolve("2");
});
promise1.then(function (value) {
  console.log(value);
});
console.log(3);*/

/*function loadImgAsync(url) {
  return new Promise(function (resolve, reject) {
    let img = new Image();
    img.onload = () => resolve(url);
    img.src = url;
  });
}

let aImg = document.getElementById('wImg').getElementsByTagName('img');
[...aImg].forEach(dom => {
  let realUrl = dom.getAttribute("data-imgUrl");
  loadImgAsync(realUrl).then(value => {
    dom.src = value;
  })
});*/

/*document.getElementById('wImg').onclick = (event) => {
  let _self = event.target;
  //console.log(_self.id);
  console.log(this);
  //console.log(this.id);
}*/
/*let n = 1;
let p1 = new Promise(function(resolve, reject) {
  n++;
  resolve(n);
});

p1.then(value => {
  console.log(n);
  return n++;
}).then(value => {
  console.log(n);
  return n++;
});*/

/*class Show {
  constructor(x, y = 456) {
    this.x = x;
    this.y = y;
  }

  doSomething() {
    console.log(this.x, this.y);
  }
}

let s1 = new Show(1);
s1.doSomething()*/

/*class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }
}

let p1 = new Point(1, 2);
let c1 = new ColorPoint(3, 4, "red");
//console.log(c1.constructor);
//console.log(c1.color);

//console.log(c1.x);

console.log(Point.prototype);*/

/*class A {
  constructor() {
    this.show()
  }
  show() {
    console.log(1);
  }
};
class B extends A {
  constructor() {
    super();
  }
  show() {
    console.log(2);
  }
};

new A();
new B();*/

/*class A {
  constructor(x) {
    this.x = x;
  }
  add() {
    this.x = "a";
    console.log(this.x);
  }
}

class B extends A {
  constructor(x = 0, y = 0) {
    super(x);
    this.y = y;
  }
  show() {
    this.x++;
    this.y++;
    super.add();
    console.log(this.x, this.y);
  }
}

let a = new A(0);
a.add();

let b = new B(2);
b.show();*/

/*function show(x) {
  console.log(this, x);
}

let obj = {};
obj.show = show;

let o = {
    hide() {
      obj.show.call(this, this.a);
    },
    a: 1
};

o.hide();*/

var A = function () {
  function A(x) {
    _classCallCheck(this, A);

    this.x = x;
  }

  _createClass(A, [{
    key: "doA",
    value: function doA() {
      console.log(this);
    }
  }]);

  return A;
}();

var B = function (_A) {
  _inherits(B, _A);

  function B(x, b) {
    _classCallCheck(this, B);

    var _this = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, x));

    _this.b = b;
    return _this;
  }

  _createClass(B, [{
    key: "doB",
    value: function doB() {
      console.log(this);
    }
  }]);

  return B;
}(A);

var a = new A();
a.doA();