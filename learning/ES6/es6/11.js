/*let obj = new Proxy({}, {
  get() {
    return 10;
  }
});

console.log(obj.a);

let arr = new Proxy([], {
  from() {
    console.log(123);
  }
})

arr.from([123])*/

/*let handler = {
  get(target, name) {
    if(name === "name") {
      return  "fs";
    }
    return "haha";
  },
  apply(target, thisBinding, args) {
    return args[0];
  },
  construct(target, args) {
    return {value: args[1]};
  }
};

let fproxy = new Proxy(function (x, y) {
  return x + y;
}, handler);

console.log(fproxy(1, 2));
console.log(fproxy.name);
console.log(fproxy.title);
console.log(new fproxy(4, 5));*/

/*let proxy1 = new Proxy({}, {
  set(target, key, value) {
    if(key === "name") {
      return console.log(123);
    }
    console.log(456);
  }
});
proxy1.name = 1;
console.log(proxy1.name);*/

const queObsevers = new Set();

const obseve = fn => queObsevers.add(fn);
const obseverable = obj => new Proxy(obj, handle);

const handle = {
  apply(target, thisArg, args) {
    const result = Reflect.apply(target, thisArg, args);
    queObsevers.forEach(value => value());
    return result;
  }
};


obseve(function () {
  console.log(1);
});
obseve(function () {
  console.log(2);
});
let fo = obseverable(function() {});

fo();