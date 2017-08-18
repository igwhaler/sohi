"use strict";

/*function show(...a) {
  console.log( typeof a );
  console.log(a);
  let sum = 0;
  for(let [key, elem] of a.entries()) {
    sum += elem;
  }
  console.log(sum);
}

show(1, 2, 3)*/

/*function show() {
  let a;
  a = Array.prototype.slice.call(arguments).sort();
  console.log(a);
  console.log(a instanceof Array);
}
let arr = [1, 5, 3, 4]
show(...arr);*/

/*function show(...args) {
  console.log(args.shift());
}
show(1, 2, 3, 4);*/

/*var arr1 = [1, 2];
var arr2 = [3, 4];
console.log(arr1.concat(arr2));
console.log([1, 2, ...arr2]);*/

/*let arr1 = [1, 2, 3, 4];
let [a, ...arr] = arr1;
console.log(a);
console.log(typeof arr);*/

//console.log([..."asd"]);

/*const f = function () {};

console.log(f.name);*/

console.log(new Function().name);