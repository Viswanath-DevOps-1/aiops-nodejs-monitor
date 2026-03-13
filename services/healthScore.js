const sendSlackAlert = require("./slackNotifier");

const health = {};

function updateHealth(service){

  if(!health[service]){
    health[service] = 100;
  }

  health[service] -= 2;

  if(health[service] < 50){

    sendSlackAlert(
      service,
      `Service health critical: ${health[service]}`
    );

  }

}

module.exports = updateHealth;