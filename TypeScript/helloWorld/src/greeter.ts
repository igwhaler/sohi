// demo1
function greeter(name: string) {
    return  `hello world, ${name}`
}

// document.getElementById('greeter').innerHTML = greeter('demo');

// demo2
interface Person {
    name: string;
    age: number;
}

function showPersonInfo({ name, age }: Person) {
    return `${name}, ${age}岁`;
}

// document.getElementById('greeter').innerHTML = showPersonInfo({name: 'A', age: 24});

// demo3
class Studen {
    static b = 'demo';

    name: string;

    constructor(public fistName: string, public middleInitial: string, public lastName: string, public age: number) {

        this.name = `${fistName}-${middleInitial}-${lastName}`
    }

    show = () => {}
}

const user = new Studen('A', 'B', 'C', 30);

console.log(Studen, user);

document.getElementById('greeter').innerHTML = showPersonInfo(user);
