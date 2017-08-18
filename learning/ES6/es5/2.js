"use strict";

/*let [a, b, c] = [1, 2, 3];

{
    let [a, [b], c] = [1, [2, 3], 4];
    console.log(b);
    console.log(c);
}*/
/*{
    let [a = 1, b] = [, "big"];
    console.log(typeof a);
    console.log(typeof b);
}*/

/*{
    let a;
    let {a, b} = {
        a: 123,
        b:456
    };

    console.log(a);
    console.log(b);
}*/

{
    var obj1 = {
        name: "fs",
        age: 24,
        friends: {
            f1: {
                name: 1
            },
            f2: {
                name: 2
            }
        }
    };

    /*let {name, age, friends: {f1, f2}} = obj1;
    console.log(name);
    console.log(age)
    console.log(friends);*/

    var obj2 = {};
    var name = obj1.name,
        age = obj1.age,
        friends = obj1.friends;

    console.log(friends);
    var a = 123;
}

function fn() {
    var a = 1;
}

//$("div").show();
//document.getElementById("div");