const client = require("prom-client")

const responseTimeHistogram = new client.Histogram({
    name: 'express_response_time_seconds',
    help: 'Response time in seconds for each route',
    labelNames: ['method', 'route'],
    buckets: [0.1, 0.5, 1, 5],
  });
  

 const counter = new client.Counter({
    name: "server_request_operations_total",
    help: "total number of requests send to the server",
   });

module.exports = {
    responseTimeHistogram,
    counter
}