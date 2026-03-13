require("dotenv").config();

module.exports = {

  logPath: "/home/admin/.pm2/logs/",

  slackWebhook: process.env.SLACK_WEBHOOK,

  zone: "zone2",

  errorPatterns: [
    "ERROR",
    "Error",
    "timeout",
    "ECONNREFUSED",
    "CRITICAL",
    "Unhandled"
  ]

};