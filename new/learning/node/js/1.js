/*
var num = 1

function increment () {
  console.log(num)
  return num++
}

console.log(num) //  1
console.log(increment()) // 1 // 1
console.log(num) // 2
console.log(increment()) // 2 // 2
*/

var Hello = require('./modules/hello.js')
var num = 1
let {increment} = Hello

console.log(increment())
console.log(num)
