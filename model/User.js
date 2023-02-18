const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    address: {
        type: "String",
        required: true
    },
    transactions: [{
        type: mongoose.Types.ObjectId,
        ref: "transactions"
    }]
  })

  const User = mongoose.model("User", UserSchema)

  module.exports = User