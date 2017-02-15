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

class A {
  constructor(x) {
    this.x = x;
  }
  doA() {
    console.log(this);
  }
}
class B extends A {
  constructor(x, b) {
    super(x);
    this.b = b;
  }
  doB() {
    console.log(this);
  }
}

let a = new A();
a.doA();