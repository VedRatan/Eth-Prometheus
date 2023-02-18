const axios = require("axios")
const Constants = require("../../Constants")
const Transaction = require("../../model/Transaction")
const User = require("../../model/User")

/**
 * @callback Gets all the transactions for a giaven user and saves the new transactions in database
 * @request -
 *      @method - GET
 *      @param
 *          address - The address whose transactions will be fetched and saved in the database
 *      @query 
 *          page - The page/group of transactions to refer, defaults to 1
 * @response
 *      @success - boolean 
 *      @data - 
 *          previous - Number - number of transactions that existed previously in the database for the given address 
 *          added - Number - new transactions that are added to the database
*/

const getNormalTranactions = async(req, res) => {
    try{
        const address = req.params.address
        const page = req.query.page || 1
        
        if(!address) return res.status(400).json({success: false, message: "Address not provided"})

        const allTxnsResponse = await axios.get(`
                            ${Constants.ETHERSCAN_API_URL}?module=account&action=txlist&address=${address}&startblock=0&page=${Number(page)}&offset=10&sort=asc&apikey=${Constants.ETHERCSAN_API_KEY}
                        `)

        // Get the transactions already saved in database
        const savedTxns = await Transaction.find({address: address})
        const savedTxnHashes = savedTxns.map(txn => txn.hash)
        
        //Filter out the new tranacations from API response
        const newTxns = allTxnsResponse.data.result.filter(txn => !savedTxnHashes.includes(txn.hash))

        //Save the new transactions in database
        const saveTxnResponse = await Transaction.insertMany(newTxns)

        //Get the IDs of new transactions
        const newTxnIDs = saveTxnResponse.map(txn => txn._id)


        //Fetch the user
        const user = await User.findOne({address: address})

        // If "from" address exists, then update the list of transactions
        if(user){
            user.transactions.concat(newTxnIDs)
            await user.save()
        }
        // If "from" address does not exist, then add the address to database
        else{
            const saveUserResponse = await User.insertMany({address: address, transactions: newTxnIDs})
        }
        return res.json({success: true, data: { previous: savedTxns.length, added: newTxnIDs.length}})

    }catch(err){
        console.log("Error in getting normal transactions: ", err.message)
        return res.status(500).json({success: false, message: err.message})
    }
}

module.exports = {
    getNormalTranactions
}