const mongoose = require('mongoose');

const TransactionShema = new mongoose.Schema(
    {
        userId: String , 
        cost: String , 
        products:{
            type:[mongoose.Types.ObjectId] , 
            of:Number , 
        } , 
    } , 
    {timestamps:true}
) ; 

const Transaction = mongoose.model("Transaction", TransactionShema) ; 
module.exports = Transaction;