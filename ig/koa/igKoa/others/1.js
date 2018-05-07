function getSyncTime () {
  return new Promise((resolve, reject) => {
    try {
      let _sTime = new Date().getTime()

      setTimeout(() => {
        let _eTime = new Date().getTime()
        let data = _eTime - _sTime

        resolve(data)
      }, 1000);
    } catch (err) {
      reject(err)
    }
  })
}

async function getSyncData (params) {
  return await getSyncTime()
}

module.exports = getSyncData
