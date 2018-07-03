let myApp = {
  Modal: function () {
    let val = 0

    this.add = function () {
      val++
    }

    this.sub = function () {
      val--
    }

    this.getVal = function () {
      return val
    }

    // 观察者模式
    let views = []

    this.register = function (view) {
      views.push(view)
    }

    this.notify = function () {
      views.forEach(view => view.render(this))
    }
  },

  View: function (controller) {
    let num = document.getElementById('number')
    let incBtn = document.getElementById('btnIncrease')
    let decBtn = document.getElementById('btnDecrease')

    incBtn.onclick = controller.increase
    decBtn.onclick = controller.decrease

    this.render = function (modal) {
      num.innerHTML = modal.getVal()
    }
  },

  Controller: function () {
    let modal = null
    let view = null

    this.init = function () {
      modal = new myApp.Modal()
      view = new myApp.View(this)

      modal.register(view)
      modal.notify()
    }

    this.increase = function () {
      modal.add()
      modal.notify()
    }

    this.decrease = function () {
      modal.sub()
      modal.notify()
    }
  }
}

let c1 = new myApp.Controller()

c1.init()