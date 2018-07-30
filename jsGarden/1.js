function Foo(count) {
  this.count = count

  return {a: 1}
}

Foo.prototype = {
  constructor: Foo,

  increment () {
    this.count++

    return this
  },

  say () {
    console.log(this.count)
  }
}

var fn1 = new Foo(1)

console.log(Object.keys(fn1))
