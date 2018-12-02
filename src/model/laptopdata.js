const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ShopSmartDB");
const Schema = mongoose.Schema;

var NewLaptopSchema = new Schema({
    brand  : String,
    model : String,
    price   : Number
});

var LaptopData = mongoose.model("laptop-data",NewLaptopSchema);

module.exports = LaptopData;
