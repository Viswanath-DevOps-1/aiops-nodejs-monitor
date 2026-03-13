const ss = require("simple-statistics");

let history = [];

function detectAnomaly(value){

  history.push(value);

  if(history.length > 50)
    history.shift();

  if(history.length < 10)
    return false;

  const mean = ss.mean(history);
  const std = ss.standardDeviation(history);

  if(std === 0)
    return false;

  const z = (value - mean) / std;

  return Math.abs(z) > 3;

}

module.exports = detectAnomaly;