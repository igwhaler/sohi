let myApp = {}

myApp.Modal = function () {
  let val = 0

  this.increase = function () {
    val ++
  }

  this.decrease = function () {
    val --
  }

  this.getVal = function () {
    return val
  }
}

myApp.View = function () {
  let num = document.getElementById('number')
  let incBtn = document.getElementById('btnIncrease')
  let decBtn = document.getElementById('btnDecrease')

  this.render = function (modal) {
    num.innerHTML = modal.getVal()
  }
}