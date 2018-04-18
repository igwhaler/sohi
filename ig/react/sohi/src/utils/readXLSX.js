import XLSX from 'xlsx';

export default function readXLSX(file, cb) {
  let oReader = new FileReader()

  oReader.readAsBinaryString(file)
  oReader.onload = function (event) {
      let _res = event.target.result
      let _data = XLSX.read(_res, {type: 'binary'})
      let {SheetNames, Sheets} = _data
      let _json = XLSX.utils.sheet_to_json(Sheets[SheetNames[0]])

      cb && cb(_json)
  }
}