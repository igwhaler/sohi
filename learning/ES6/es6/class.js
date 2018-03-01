class Person {
  static handleParentSet () {
    console.log(this.name)
  }

  constructor (name, age) {
    this.name = name
    this.age = age

    console.log('1-1', this)
  }

  sayHi () {
    console.log('1-2', this, this.name)
  }
}

class Man extends Person {
  static handleChildSet () {
    // console.log(this)
    super.handleParentSet()
  }

  constructor (name, age, hobby) {
    super(name, age)
    this.hobby = hobby

    super.sayHi()
  }

  showHobby () {
    console.log('2-1', this.hobby)

    super.sayHi()
  }
}

var m1 = new Man('a', 22, 'movie')

m1.showHobby()
Man.handleChildSet()


function A () {}
A.prototype.show = function () {
  console.log(123)
}

function B () {}
B.prototype.show = function () {
  console.log(456)
}

Object.setPrototypeOf(B.prototype, A.prototype)

var b1 = new B()

b1.show()

console.log(B.prototype, A)