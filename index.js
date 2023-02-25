require("dotenv").config()
const express = require("express")

require("./config/db")
const routes = require("./routes")
const prometheus = require("./prometheus")

const app = express()
const PORT = process.env.PORT || 5000


prometheus.startMetricsServer(app)
app.use(prometheus.middleware.handleLatency);
app.use("/api", routes.APIRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})