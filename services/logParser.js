const fs = require("fs")
const path = require("path")

const config = require("../config/config")
const checkSpike = require("./spikeDetector")

function parseLog(file){

  const service = path.basename(file).replace("-error.log","")

  const data = fs.readFileSync(file,"utf8")

  const lines = data.split("\n").slice(-50)

  let errorCount = 0
  let lastError = ""

  lines.forEach(line=>{

    config.errorPatterns.forEach(pattern=>{

      if(line.includes(pattern)){
        errorCount++
        lastError = line
      }

    })

  })

  console.log("Service:",service)
  console.log("Errors:",errorCount)

  checkSpike(service,errorCount,lastError)

}

module.exports = parseLog