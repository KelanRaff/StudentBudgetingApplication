const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

//category Schema
const catagories_Model = new Schema({
    type: {type : String, default:"Investment"},
    color: {type: String, default:'#FCBE44'}
})

//Transaction Schema
const transaction_model = new Schema({
    name: {type : String, default:"Anonymous"},
    type: {type: String, default:"Investment"},
    amount: {type : Number},
    date: {type: Date, default : Date.now}
})

const Categories = mongoose.model('categories',catagories_Model);
const Transaction = mongoose.model('transaction',transaction_model);

exports.default = Transaction;
module.exports = {
    Categories,
    Transaction
}