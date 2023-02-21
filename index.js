require("dotenv").config()
const Express = require("express")

require("./config/db")
const routes = require("./routes")
const prometheus = require("./prometheus")

const app = Express()
const PORT = process.env.PORT || 3000


prometheus.startMetricsServer(app)
app.use(prometheus.middleware.handleLatency);
app.use("/api", routes.APIRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
