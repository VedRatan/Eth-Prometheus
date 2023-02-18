const client = require("prom-client")

const handleMetrics = async (req, res) => {
    res.set("Content-Type", client.register.contentType);

    return res.send(await client.register.metrics());
}

module.exports = {
    handleMetrics
}