Function.prototype.after = function (fn) {
  var _self = this

  return function () {
    var ret = _self.apply(this, arguments)
    fn.apply(this, arguments)

    return ret
  }
}

function show() {
  console.log(1)
}

function log() {
  console.log(456)
}

var fn = show.after(log)

console.log()