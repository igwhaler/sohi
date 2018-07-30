function Node(element) {
  this.element = element
  this.next = null
}

function LinkedList() {
  this.head = new Node('head')
}

LinkedList.prototype = {
  constructor: LinkedList,

  find (item) {
    var currNode = this.head

    while (currNode && currNode.element != item) {
      currNode = currNode.next
    }

    return currNode
  },

  findPre (item) {
    var currNode = this.head

    while (currNode.next && currNode.next.element != item) {
      currNode = currNode.next
    }

    return currNode
  },

  insert (newElement, item) {
    var newNode = new Node(newElement)
    var currNode = this.find(item)

    newNode.next = currNode.next
    currNode.next = newNode
  },

  remove (item) {
    var currNode = this.find(item)
    var preNode = this.findPre(item)

    preNode.next = currNode.next
  }
}

var ll1 = new LinkedList()

ll1.insert('a', 'head')
ll1.insert('b', 'a')

ll1.remove('a')

console.log(ll1.find('head'), ll1.findPre('b'))