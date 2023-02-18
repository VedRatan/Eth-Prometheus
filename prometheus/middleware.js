const responseTime = require("response-time")
const prometheusConfig = require("./config")

const handleLatency = responseTime((req, res, time) => {
    const labels = { method: req.method, route: req.path };
    prometheusConfig.responseTimeHistogram.labels(labels).observe(time / 1000);
  })

module.exports = {
    handleLatency
}