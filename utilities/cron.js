let cron = require("node-cron")

let scheduleEmail = (cronExpression, callback) => {
    cron.schedule(cronExpression, callback)
}

module.exports = scheduleEmail



