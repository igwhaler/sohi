/*let s = Symbol();
console.log(typeof s);*/

/*let shapeType = {
  triangle: Symbol("triangle")
};

function getArea(type, options) {
  let area = 0;
  switch(type) {
    case shapeType.triangle:
        area = 0.5*options.width*options.height;
    break;
  }

  return area;
}

console.log(getArea(shapeType.triangle, {width: 30, height: 20}));*/

/*let s1 = Symbol("s1");
console.log(Symbol.keyFor(s1));
let s2 = Symbol.for("s200");
console.log(Symbol.keyFor(s2));*/

let arr = [0, 1, 10, 8, 20];
let rel = arr.find(function (value, index, array) {
  return value > 30;
});
console.log(rel);

let ind = arr.findIndex(function (value, index, array) {
  return index > 30;
})
console.log(ind);