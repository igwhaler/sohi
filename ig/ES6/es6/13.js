/*let oB = true;

let oPromise1 = new Promise(function (resolve, reject) {
    if(oB) {
        resolve();
    }else{
        reject();
    }
});

oPromise1.then(function() {
    console.log(1);
}, function() {
    console.log(2);
});
*/

/*var p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("fail")), 3000);
});

var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(p1)}, 1000);
});

p2.then(result => console.log(result)).catch(error => console.log(error));*/

new Promise(function(resolve, reject) {
    resolve(a);
    reject("a");
}).then(function(rl) {
    console.log(rl);
    return 2;
}, function(rj) {
    console.log(rj);
    return "b";

}).then(function(rl) {
    console.log(rl);
}, function(rj) {
    console.log(rj);
});
