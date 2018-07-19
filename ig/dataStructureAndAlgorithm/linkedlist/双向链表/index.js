function Node (element) {
  this.element = element
  this.pre = null
  this.next = null
}

function LinkedList () {
  this.head = new Node('head')
}

LinkedList.prototype = {
  constructor: LinkedList,

  find (element) {
    var currNode = this.head

    while (currNode.next && currNode.element != element) {
      currNode = currNode.next
    }

    return currNode
  },

  insert (newElement, target) {
    var newNode = new Node(newElement)
    var currNode = this.find(target)

    newNode.next = currNode.next
    currNode.next = newNode
    newNode.pre = currNode
  },

  remove (element) {
    let currNode = this.find(element)

    currNode.pre.next = currNode.next
    currNode.next.pre = currNode.pre
  }
}

var ll1 = new LinkedList()

ll1.insert('a')
ll1.insert('b')
ll1.insert('c')

// ll1.remove('b')

console.log(ll1.find('head'))