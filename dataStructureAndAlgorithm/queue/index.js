function Queue() {
  this.dataStore = []
}

Queue.prototype = {
  construtor: Queue,

  enqueue (element) {
    this.dataStore.push(element)
  },

  dequeue (element) {
    this.dataStore.shift(element)
  },

  front () {
    return this.dataStore[0]
  },

  end () {
    return this.dataStore[this.dataStore.length]
  }
}