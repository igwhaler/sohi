/**
 * 合成
 */
function compose() {
  var fns = arguments

  return function () {
    var len = fns.length
    var result = fns[-- len].apply(this, arguments)

    while (len > 0) {
      result = fns[-- len](result)
    }

    return result
  }
}

// example-1 计算
function subtract(x) {
  return x - 10
}

function add4(x) {
  return x + 4
}

function multiply4(x) {
  return x * 4
}

var cp1 = compose(subtract, multiply4, add4)
console.log(cp1(1)) // 10
console.log(cp1(2)) // 14


// example-2 元转分
function toStr(numer) {
  return numer.toString().trim()
}

function splitStr(step) {
  return function (str) {
    return str.split(step)
  }
}

function toYuan(arr) {
  var integer = arr[0]
  var decimal = arr[1]

  if (!decimal) {
    return integer * 100
  }

  if (decimal.length === 1) {
    return +(integer + decimal + '0')
  }

  if (decimal.length === 2) {
    return +(integer + decimal)
  }
}

var fToY = compose(toYuan, splitStr('.'), toStr)
console.log(fToY(1.2))
console.log(fToY(1.90))
console.log(fToY(1))