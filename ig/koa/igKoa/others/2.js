let count = 0

module.exports = function * oMyGenerator () {
  yield count++
  yield count++
}
