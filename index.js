require("dotenv").config()
const express = require("express")

require("./config/db")
const routes = require("./routes")
const prometheus = require("./prometheus")

<<<<<<< HEAD
const app = express()
const PORT = process.env.PORT || 5000
=======
const app = Express()
const PORT = process.env.PORT || 3000
>>>>>>> eacac75cdc4ba54127b0d20784696ff590c3c3f0


prometheus.startMetricsServer(app)
app.use(prometheus.middleware.handleLatency);
app.use("/api", routes.APIRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
