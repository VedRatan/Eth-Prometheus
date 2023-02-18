require("dotenv").config()

console.log(process.env.ETHERSCAN_API_KEY)
const Constants = {
    ETHERSCAN_API_URL: "https://api.etherscan.io/api",
    ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
    PROMETHEUS_PORT: process.env.PROMETHEUS_PORT
}

module.exports = Constants