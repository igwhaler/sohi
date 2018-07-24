function add(x, y, z) {
  return x + y + z
}

//console.log(add(1, 2))

/* function simpleCurry(fn) {
  return function (x) {
    return function (y) {
      return x + y
    }
  }
}

var addCurry = simpleCurry(add)
console.log(addCurry(1)(2)) */



function curry(fn) {
  var args = []
  var result = null

  return function _repeat() {
    args.push(...arguments)

    if (args.length === fn.length) {
      result = fn.apply(this, args)
      args = []

      return result
    }

    return _repeat
  }
}

var c1 = curry(add)

console.log(c1(1)(2)(6))
console.log(c1(1)(2, 3))