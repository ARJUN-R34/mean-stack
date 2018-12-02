const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ShopSmartDB");
const Schema = mongoose.Schema;

var NewWomenSchema = new Schema({
    category  : String,
    brand : String,
    price   : Number
});

var WomensData = mongoose.model("womens-data",NewWomenSchema);

module.exports = WomensData;
