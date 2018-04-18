"use strict";

/*let show = a => a;
console.log(show(1));

let hide = () => 123;
console.log(hide());

let add = (x, y) => x+y;
console.log(add(1, 2));

let doSomething = (x, y) => {
  console.log(x, y);
};
doSomething(1, 2)

let fight = ({x, y = 1}) => {
  console.log(x + y);
}
fight({x: 10});*/

/*function Timer () {
  this.s1 = 0;
  this.s2 = 0;

  setInterval(() => { this.s1++ }, 1000);
  setInterval(function () { this.s2++ }, 1000);
};

var timer = new Timer();

setTimeout(() => {console.log(timer.s1)}, 3100);
setTimeout(() => {console.log(timer.s2)}, 3100);*/

/*let obj = {a: 1};
function show() {
  console.log(this.a);
}*/
//obj::show();

/*function factorial(n) {
  if(n === 1) return 1;
  return n*factorial(n-1)
};
console.log(factorial(5));*/

/*function factorial(n, tatal = 1, x = 1) {
  if(n === x) return tatal;
  return factorial(n-1, n*tatal, x);
}
console.log(factorial(5));*/

/*function Fibonacci(n) {
  if(n <= 1) return 1;
  return Fibonacci(n-1) + Fibonacci(n-2);
}
console.log(Fibonacci(10));*/

/*function Fibonacci(n, ac0 = 0, ac1 = 1) {
  if(n <= 0) {return ac0;}
  return Fibonacci(n-1, ac1, ac0 + ac1);
}

console.log( Fibonacci(1000) );*/

/*function currying(fn, n) {
  return function (m) {
    return fn.call(this, m, n);
  };
}

function tailFactorial(n, total) {
  if(n === 1) return total;
  return tailFactorial(n-1, n*total)
}
var factorial = currying(tailFactorial, 1);
console.log(factorial(5));*/

/*let o = {
  show: function (x, y) {
    console.log(o.show.arguments);
    console.log(o.show.caller);
  }
};


o.show(1, 2);*/

function trampoline(f) {
  while (f && f instanceof Function) {
    f = f();
  }
  return f;
}
function sum(x, n) {
  if (n > 0) {
    return sum.bind(null, x + 1, n - 1);
  } else {
    return x;
  }
}
console.log(trampoline(sum(1, 10)));