'use strict';

//let arr = ['a', 'b'];
/*for (let val of arr.values()) {
  console.log(val);
}*/

/*for (let key of arr.keys()) {
  console.log(key);
}

for (let [key, val] of arr.entries()) {
  console.log(key, val);
}*/

/*let obj = {
  "0": "a",
  "1": "b",
  "2": "c",
  length: 3
};



let arr = Array.from(obj);
console.log(arr);
console.log(obj[0])*/

/*let [a, b, c, d] = [1, 2, 3];
console.log(d);*/

/*let [a = 1, b = 2] = [undefined, ];
console.log(a, b);*/
/*function show() {
  console.log(123);
}
let [a = show()] = [];
console.log(a);*/

/*let {a: x} = {a: 123};
//console.log(x);
console.log(x);*/

/*let {a: x} = 123;
console.log(x);*/

/*function show(x, a) {
  console.log(show.length);
}
show();*/

/*let a = 1;
function show(a, b = a) {
  console.log(b);
}

show(2);*/
/*let x = 2;
function show(a, b = x) {
  let x = 1;
  console.log(b);
}
show();
*/

function throwIfMissing() {
  throw new Error('Missing parameter');
}

function show() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : throwIfMissing();

  console.log(1);
  return a;
}

show();