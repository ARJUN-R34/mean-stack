const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ShopSmartDB");
const Schema = mongoose.Schema;

var NewMobileSchema = new Schema({
    brand  : String,
    model : String,
    price   : Number
});

var MobileData = mongoose.model("mobile-data",NewMobileSchema);

module.exports = MobileData;
