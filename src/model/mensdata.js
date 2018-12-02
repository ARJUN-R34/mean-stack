const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ShopSmartDB");
const Schema = mongoose.Schema;

var NewMenSchema = new Schema({
    category  : String,
    brand : String,
    size   : String
});

var MensData = mongoose.model("mens-data",NewMenSchema);

module.exports = MensData;
