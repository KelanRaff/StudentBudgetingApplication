const { default: mongoose } = require("mongoose");
const Schema = require(mongoose);

//category Schema
const catagories_Model = new Schema({
    type: {type : String, default:"Investment"},
    color: {type: String, default:'#FCBE44'}
})

//Transaction Schema
const transaction_model = new Schema({
    name: {type : String, default:"Anonymous"},
    type: {type: String, default:"Investment"},
    amount: {type : Number },
    date: {type: Date, default : Date.now}
})

const Categories = mongoose.model('categories',catagories_Model);
const Transactions = mongoose.model('transaction',transaction_model);

exports.default = Transaction;
module.exports = {
    Categories,
    Transactions
}