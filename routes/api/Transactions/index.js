const router = require("express").Router()
const {accountController} = require("../../../controller")

router.get("/:address", accountController.getNormalTranactions)
module.exports = router