const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({
    blockNumber: {
      type: Number
    },
    timeStamp: {
      type: Number
    },
    hash: {
      type: "String"
    },
    nonce: {
      type: Number
    },
    blockHash: {
      type: "String"
    },
    transactionIndex: {
      type: Number
    },
    from: {
      type: "String"
    },
    to: {
      type: "String"
    },
    value: {
      type: Number
    },
    gas: {
      type: Number
    },
    gasPrice: {
      type: Number
    },
    isError: {
      type: Number
    },
    txreceipt_status: {
      type: "Date"
    },
    input: {
      type: "String"
    },
    contractAddress: {
      type: "String"
    },
    cumulativeGasUsed: {
      type: Number
    },
    gasUsed: {
      type: Number
    },
    confirmations: {
      type: Number
    },
    methodId: {
      type: "String"
    },
    functionName: {
      type: "String"
    }
  })

  const Transaction = mongoose.model("transaction", TransactionSchema)

  module.exports = Transaction