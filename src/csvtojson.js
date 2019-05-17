function convertcsvtojson (filename) {
    let csvToJson = require('convert-csv-to-json')
    let obj = csvToJson.fieldDelimiter(',').getJsonFromCsv(filename)
    return obj
  }
  module.exports = convertcsvtojson