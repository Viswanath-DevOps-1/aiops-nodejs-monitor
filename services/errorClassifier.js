function classifyErrors(lines){

  const summary = {};

  lines.forEach(line=>{

    let type = "Unknown";

    if(line.includes("timeout"))
      type = "API Timeout";

    else if(line.includes("ECONNREFUSED"))
      type = "Connection Refused";

    else if(line.includes("database"))
      type = "Database Error";

    else if(line.includes("RabbitMQ"))
      type = "RabbitMQ Failure";

    if(summary[type])
      summary[type]++;
    else
      summary[type] = 1;

  });

  return summary;

}

module.exports = classifyErrors;