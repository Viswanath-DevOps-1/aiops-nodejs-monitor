const detectAnomaly = require("./anomalyDetector");
const sendSlack = require("./slackNotifier");

function checkSpike(service,errorCount,lastError,summary){

  const anomaly = detectAnomaly(errorCount);

  if(anomaly){

    console.log("🚨 AI anomaly detected");

    sendSlack(service,errorCount,lastError,"AI anomaly detected",summary);

  }

  if(errorCount > 10){

    sendSlack(service,errorCount,lastError,"Error spike detected",summary);

  }

}

module.exports = checkSpike;