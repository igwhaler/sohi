function Stack() {
  this.dataStore = []
  this.top = 0
}

Stack.prototype = {
  constructor: Stack,

  push (element) {
    this.dataStore[this.top++] = element
  },

  pop () {
    return this.dataStore.splice(--this.top, 1)[0]
  },

  peek () {
    return this.dataStore[this.top - 1]
  }
}

var s1 = new Stack()

s1.push('a')
s1.push('b')

s1.pop()

console.log(s1, s1.peek())
