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

let obj = {a: 1};
function show() {
  console.log(this.a);
}
//obj::show();