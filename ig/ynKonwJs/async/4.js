/* let p1 = Promise.resolve(12)
let p2 = p1.then(val => {
    console.log(val)
    return val*3
})
p2.then(val => {
    console.log(val)
})  */

/* function delay (time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

delay(2000).then(() => {
    console.log(1)
    return delay(3000)
}).then(() => {
    console.log(2)
}) */

/* new Promise((resolve, reject) => {
    b
    resolve(1)
}).then((val) => {
    console.log(val)
}, (err) => {
    console.log(err)
    return 2
}).then((val) => {
    console.log(val)
}) */

/* new Promise((resolve, reject) => {
    resolve(Promise.reject(21))
}).then((val) => {
    console.log(val)
}, (val) => {
    console.log(val*2)
}) */

/* function foo (callback) {
    try {
        var x = a
        callback(null, x)
    } catch (error) {
        callback(error)
    }
}

foo(function (state, val) {
    if (state) {
        console.log(typeof state)
    }else {
        console.log(val*2)
    }
}) */

/* Promise.all([new Promise((resolve, reject) => {
    a
    resolve(1)
}), new Promise((resolve, reject) => {})]).then(() => {
    console.log(1)
}, (err) => {
    console.log(err)
}) */

/* Promise.map = function (vals, callback) {
    return Promise.all(
        vals.map(val => {
            return new Promise(resolve => {
                callback(val, resolve)
            })
        })
    )
}

var p1 = Promise.resolve(1)
var p2 = Promise.resolve(2)
var p3 = Promise.reject(3)

Promise.map([p1, p2, p3], function (val, resolve) {
    Promise.resolve(val).then((v) => {
        resolve(v*10)
    }, resolve)
}).then((arr) => {
    console.log(arr)
}, (err) => {
    console.log(err)
}) */
/* let p1 = new Promise((resolve, reject) => {
    resolve(1)
}).then((val) => {})

new Promise((resolve, reject) => {
    resolve(p1)
}).then((a) => {
    console.log(a)
}) */

var fulfilledTh = {
    then: function (cb) {
        cb(41)
    }
}

Promise.resolve(fulfilledTh).then((val) => {
    console.log(val)
})
