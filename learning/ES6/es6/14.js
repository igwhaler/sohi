/* function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

async function show(val, ms) {
    // await timeout(ms)
    await 4
    console.log(val)
    return 3
}

show(1, 2000).then((val) => {
    console.log(val, 2)
})
 */

 async function show () {
     await 1
 }

show().then((val) => {
    console.log(val)
}).catch(err => {
    console.log(err)
})
