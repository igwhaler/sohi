let fs = require('fs')

/* fs.readFile('./assets/1.text', function (err, buffer) {
  if (err) {
    throw err
  }
  console.log(buffer)
  process(buffer)
}) */

fs.writeFile('./assets/1.text', 'asdasd', function (err) {
  if (err) throw err
})
