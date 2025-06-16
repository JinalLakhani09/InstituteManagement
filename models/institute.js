const mongoose = require("mongoose");
const instititeschema = new mongoose.Schema({
     name:{type:String,default:""},
     id:{type:Number, default:1}
},{
    timestamps: true
});
const Institute = mongoose.model("institute", instititeschema);
module.exports = Institute;