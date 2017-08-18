function doA (callback) {
  console.log(1)
  callback()
}

doA(function () {
  console.log(2)
})

console.log(3)
