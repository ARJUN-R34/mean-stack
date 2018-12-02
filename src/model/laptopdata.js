const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ShopSmartDB");
const Schema = mongoose.Schema;

var NewLaptopSchema = new Schema({
    name  : String,
    model : String,
    price   : Number
});

var laptopdata = mongoose.model("laptop-data",NewLaptopSchema);

module.exports = laptopdata;
