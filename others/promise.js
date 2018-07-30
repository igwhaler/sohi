/* new Promise(function (resolve, reject) {
  let a = 1
  if (a) {
    resolve(1)
  }
}).then(function (value) {
  console.log(value)
}, function (value) {

}) */

function Pr (fn) {
  var state = 'pending'
  var value = null
  var cbList = []

  this.then = function (callBack) {
    if (state === 'pending') {
      cbList.push(callBack)
      return this
    }
    callBack(value)
    return this
  }

  function resolve (options) {
    state = 'fulfilled'
    value = options
    setTimeout(function () {
      cbList.forEach(function (cb) {
        cb(value)
      })
    }, 0)
  }

  fn(resolve)
}

new Pr(function (resolve) {
  resolve(1)
}).then(function (id) {
  id++
  console.log(id)
})
