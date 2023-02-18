require("dotenv").config()
const Express = require("express")

require("./config/db")
const routes = require("./routes")
const prometheus = require("./prometheus")

const app = Express()
const PORT = process.env.PORT || 5000

app.use("/api", routes.APIRoutes)
app.use(prometheus.middleware.handleLatency);

prometheus.startMetricsServer(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})