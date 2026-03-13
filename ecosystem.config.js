module.exports = {

  apps:[

    {
      name:"aiops-monitor",
      script:"monitor.js",
      instances:1,
      autorestart:true
    }

  ]

}