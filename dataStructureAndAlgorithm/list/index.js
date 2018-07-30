function List () {
  this.dataStore = []
  this.listSize = 0
  this.pos = 0
}

List.prototype = {
  constructor: List,

  length () {
    return this.listSize
  },

  append (element) {
    this.dataStore[this.listSize++] = element
  },

  find (element) {
    let {dataStore} = this

    for(let i = 0, len = dataStore.length; i < len; i ++) {
      if (dataStore[i] === element) {
        return i
      }
    }

    return -1
  },

  remove (element) {
    let findAt = this.find(element)

    if (findAt > -1) {
      this.dataStore.splice(findAt, 1)
      this.listSize --

      return true
    }

    return false
  },

  insert (element, after) {
    var findAt = this.find(after)

    if (findAt > -1) {
      this.dataStore.splice(findAt + 1, 0, element)
      this.listSize ++

      return true
    }

    return false
  },

  front () {
    this.pos = 0
  },

  end () {
    this.pos = this.listSize - 1
  },

  curPos () {
    return this.pos
  },

  next () {
    if (this.pos < this.listSize - 1) {
      ++ this.pos
    }
  },

  pre () {
    if (this.pos > 0) {
      -- this.pos
    }
  },

  moveTo (pos) {
    this.pos = pos
  },

  getElement () {
    return this.dataStore[this.pos]
  }
}

var l1 = new List()

l1.append(1)
l1.append(2)
l1.append(3)

console.log(l1.curPos(), l1.length())
/* for (l1.front(); l1.curPos() < l1.length(); l1.next()) {
  // console.log(123)
} */
// console.log(l1.length(), l1.remove(3), l1.dataStore, l1.listSize, l1.find(2), l1.length())