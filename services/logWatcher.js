const chokidar = require("chokidar");
const config = require("../config/config");

const parseLog = require("./logParser");

function startWatcher(){

  console.log("Watching logs in:", config.logPath);

  const watcher = chokidar.watch(`${config.logPath}*error.log`,{
    persistent:true,
    ignoreInitial:false
  });

  watcher.on("add",(path)=>{
    console.log("📁 Log file detected:",path);
  });

  watcher.on("change",(path)=>{

    console.log("📝 Log updated:",path);

    parseLog(path);

  });

}

module.exports = startWatcher;