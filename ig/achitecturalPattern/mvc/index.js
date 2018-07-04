// 观察模式
function Observable () {
  let events = []

  this.listen = function (fn) {
    events.push(fn)
  }

  this.notify = function (params) {
    events.forEach(fn => fn(params))
  }
}

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
    let _obs = new Observable()
    let modal = new myApp.Modal()

    this.init = function () {
      let view = new myApp.View(this)

      _obs.listen(view.render)
      _obs.notify(modal)
    }

    this.increase = function () {
      modal.add()

      _obs.notify(modal)
    }

    this.decrease = function () {
      modal.sub()

      _obs.notify(modal)
    }
  }
}

let app = new myApp.Controller()

app.init()