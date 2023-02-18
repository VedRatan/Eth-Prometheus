const TransactionRoutes = require("./Transactions")
const router = require("express").Router()
const middleware = require("../../middleware")

router.use("/transactions", middleware.counter.updateCounter, TransactionRoutes)


module.exports = router