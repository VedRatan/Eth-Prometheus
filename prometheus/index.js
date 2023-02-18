const client = require("prom-client")
const middleware = require("./middleware")
const controller = require("./controller")
const config = require("./config")
const Constants = require("../Constants")

const startMetricsServer = (app) => {
    app.get("/metrics", async (req, res) => {
      res.set("Content-Type", client.register.contentType);
  
      return res.send(await client.register.metrics());
    });
  
    app.listen(Constants.PROMETHEUS_PORT || 9100, () => {
      console.log(`Metrics server started at ${Constants.PROMETHEUS_PORT || 9100}`);
    });
  }

module.exports = {
    startMetricsServer,
    middleware,
    controller,
    config
}