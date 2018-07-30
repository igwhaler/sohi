/* class Point {
    constructor (name, id) {
        this.name = name
        this.id = id
    }
    toString () {
        return '(' + this.name + ':' + this.id + ')'
    }
}

var p = new Point('a', 1)
console.log(p.toString()) */

/* let p = new class {
    constructor (name) {
        this.name = name
    }
    show () {
        console.log(this.name)
    }
}('a')

p.show() */

class Point {
    constructor () {
        this.show = () => {
            this.print()
        }
    }
    print () {
        console.log('a')
    }
}

let p = new Point()

let {show} = p
show()