// demo1
function greeter(name) {
    return "hello world, " + name;
}
function showPersonInfo(_a) {
    var name = _a.name, age = _a.age;
    return name + ", " + age + "\u5C81";
}
// document.getElementById('greeter').innerHTML = showPersonInfo({name: 'A', age: 24});
// demo3
var Studen = /** @class */ (function () {
    function Studen(fistName, middleInitial, lastName, age) {
        this.fistName = fistName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.age = age;
        this.show = function () { };
        this.name = fistName + "-" + middleInitial + "-" + lastName;
    }
    Studen.b = 'demo';
    return Studen;
}());
var user = new Studen('A', 'B', 'C', 30);
console.log(Studen, user);
document.getElementById('greeter').innerHTML = showPersonInfo(user);
