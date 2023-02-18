const prometheus = require("../prometheus")

const updateCounter = (req, res, next) => {
    prometheus.config.counter.inc()
    next()
}

module.exports = {
    updateCounter
}