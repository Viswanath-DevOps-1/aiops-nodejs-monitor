const axios = require("axios");
const config = require("../config/config");

async function sendSlack(service,errorCount,lastError,issue,summary){

  let summaryText = "";

  for(const key in summary){
    summaryText += `${key} → ${summary[key]}\n`;
  }

  const payload = {
    text: `🚨 AIOps Alert

Zone: ${config.zone}
Service: ${service}

Issue: ${issue}

Errors detected: ${errorCount}

Error Summary:
${summaryText}

Last Error:
${lastError}`
  };

  try{

    await axios.post(config.slackWebhook,payload);

    console.log("Slack alert sent");

  }catch(err){

    console.log("Slack error:",err.message);

  }

}

module.exports = sendSlack;