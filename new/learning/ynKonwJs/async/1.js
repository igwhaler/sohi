/* function now () {
  return 21
}

function later () {
  answer = answer * 2
  console.log(answer)
}

var answer = now()

setTimeout(later, 1000) */

/* var a = {
  n: 1
}
console.log(a)

a.n++ */

/* var a = 20

function foo () {
  var a = 10
  a = a +1
  console.log(a)
}

function bar () {
  a = a + 2
  console.log(a)
}

foo()
bar() */

console.log(1)

new Promise(resolve => {
  resolve()
}).then(() => {
  console.log(2)
})

console.log(3)

setTimeout(() => {
  console.log(4)
}, 0)

setTimeout(() => {
  console.log(5)
}, 0)
