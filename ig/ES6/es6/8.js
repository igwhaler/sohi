/*let a = 123, b =456;
let obj1 = {a, b};
//console.log(obj1.a, obj1.b);

let obj2 = {
  show() {
    console.log(123);
  },
  hide() {
    console.log(456);
  }
};
obj2.show();*/

/*let obj = {
  ["a" + "b"]: 123,
  ["s" + "b"]() {
    console.log(123);
  }
};

obj["j" + "b"] = 456;
console.log(obj);*/

/*let o1 = {
  a: 1,
  haha: {
    x: 123
  }
};

let o2 = {
  b: 2
};

Object.assign(o2, o1);
o1.haha.x = 456;
console.log(o2);

let obj = {a: 123};
Object.getOwnPropertyDescriptor(obj, "a");*/

/*let obj = {
  a: 1,
  show() {
    console.log(1);
  }
};

for(let key in obj) {
  console.log(key);
}

console.log(Object.getOwnPropertyNames(obj));*/

/*let obj = {
  a: 1,
  b: 2
};

for(let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}*/