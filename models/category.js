const mongoose = require("mongoose");
const categoryschema = new mongoose.Schema({
    name:{type:String,default:""},
     id:{type:Number, default:1}
},{
    timestamps: true
});
const Category = mongoose.model("category", categoryschema);
module.exports = Category;