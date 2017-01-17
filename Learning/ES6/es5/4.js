"use strict";

/*let obj = {
    a: "asd",
    b: "123"
};

let arr = [
    {
        name: "Fs",
        age: 24
    },
    {
        name: "naruto",
        age: 23
    },
    {
        name: "Sakura",
        age: 22
    }
];

let tpl =
    `<ul>
        ${arr.map(function (val, index) {
            return `<li>
                        <h2>${val.name}</h2>
                        <h3>${val.age}</h3>
                    </li>`
        }).join("")}
    </ul>`;
console.log(tpl);

document.getElementById('div1').innerHTML = tpl;*/

/*var str1 = "abc";
//str1.at(0);
str1.includes("ab");*/

//let arr = ["a", "b", "c"];
/*for( let [key, value] of arr.entries() ) {
    console.log(key, value);
}

for( let key of arr.keys() ) {
    console.log(key);
}

//for ( let value of arr.values() ) {
    //console.log(value);
//}
arr.includes(2);
*/

function doSomething(x, y) {
    y = y || "naruto";
    console.log(x, y);
}

doSomething(1);
doSomething(1, false);