/* function add (xPromise, yPromise) {
  return Promise.all([xPromise, yPromise]).then(function (val) {
    return val[0] + val[1]
  })
}

function fetch (val) {
  return new Promise(function (resolve) {
    resolve(val)
  }).then(function (val) {
    return val
  })
}

add(fetch(1), fetch(2)).then(function (val) {
  console.log(val)
}) */

/* var p = new Promise(resolve => {
  resolve('hehe')
})

var p1 = new Promise(resolve => {
  resolve(p)
})

var p2 = new Promise(resolve => {
  resolve(2)
})

p1.then((x) => {
  console.log(x)
})

p2.then((x) => {
  console.log(x)
}) */

/* var p = new Promise((resolve, reject) => {
  console.log(a)
  resolve()
})

p.then(() => {
  console.log(1)
}).catch(err => {
  console.log(typeof err)
}) */

/* var p1 = Promise.resolve(1)

var p2 = Promise.resolve(p1)

console.log(p1 === p2) */

new Promise(resolve => {
  resolve()
}).then(() => {
  console.log(1)
}).then(x => {
  console.log(x)
})
