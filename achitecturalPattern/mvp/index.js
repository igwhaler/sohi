var myApp = {
  Modal: function () {
    let val = 0

    this.add = function () {
      val ++
    }

    this.sub = function () {
      val --
    }

    this.getVal = function () {
      return val
    }
  },

  View: function () {
    let num = document.getElementById('number')
    let incBtn = document.getElementById('btnIncrease')
    let decBtn = document.getElementById('btnDecrease')

    this.render = function (modal) {
      num.innerHTML = modal.getVal()
    }

    this.init = function () {
      let presenter = new myApp.Presenter(this)

      incBtn.onclick = presenter.increase
      decBtn.onclick = presenter.decrease
    }
  },

  Presenter: function (view) {
    var modal = new myApp.Modal()
    view.render(modal)

    this.increase = function () {
      modal.add()
      view.render(modal)
    }

    this.decrease = function () {
      modal.sub()
      view.render(modal)
    }
  }
}

let v1 = new myApp.View()

v1.init()