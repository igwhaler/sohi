"use strict";

/*let oSet1 = new Set();
let arr1 = [1, 2, 2, 8, 8, 6, 6 ,3, 4, 10, 10];

arr1.forEach(x => oSet1.add(x));
console.log(oSet1);
console.log(oSet1 instanceof Set);

arr1.forEach(function(value, index, arr) {
  console.log(index);
});*/

/*let m = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
  ]);
console.log(m);

let obj = {};
for(let key of m.keys()) {
  obj[key] = m.get(key);
}
console.log(obj);*/

/*let obj = {
  a: 1,
  b: 2,
  c: [1, 2, 3]
};
let m = new Map();
for(let key of Object.keys(obj)) {
  m.set(key, obj[key]);
}
console.log(m);*/

/*function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let m = new Map();
m.set("a", 1).set("b", 2);*/

/*function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}
let m = new Map();
m.set("a", 1).set({x: "fs"}, 2);
console.log(typeof mapToArrayJson(m));
console.log(m);*/

/*function objJsonToMap(json) {
  let obj = JSON.parse(json);
  let m = new Map();
  for(let key of Object.keys(obj)) {
      m.set(key, obj[key]);
  }

  return m;
}

let json = '{"a":1,"b":2}';
console.log(objJsonToMap(json));*/

/*let json = '[["a",1],[{"x":"fs"},2]]';
function arrayJsonToMap(json) {
  let arr = JSON.parse(json);
  return new Map(arr)
}
console.log(arrayJsonToMap(json));*/

/*let m = new Map([
    ["a", 1],
    [{"name": "fs"}, 2]
]);

//console.log(m);
for(let key of m.keys()) {
  console.log(key);
}
for(let value of m.values()) {
  console.log(value);
}
for(let [key, value] of m.entries()) {
  console.log(value);
}*/

/*let arr = ["a", "b", "c"];
let obj = {
  a: 1,
  b: 2,
  c: 3
};
let set = new Set([1, 2, "a", "b"]);*/
/*arr.map(function(value, key) {
  console.log(value, key);
})*/

/*for(let item of arr.entries()) {
  console.log(item);
}*/

/*for(let item of Object.entries(obj)) {
  console.log(item);
}*/

/*console.log(set);
for(let [key, value] of set.entries()) {
  console.log(key, value);
}
for(let item of set.entries()) {
  console.log(item);
}*/

var a = 1;
var obj = {
  a: a,
  b: 2,
  show: function show() {
    console.log(this.a);
  },
  hide: function hide() {
    console.log(this.b);
  }
};

console.log(obj);
obj.show();
obj.hide();