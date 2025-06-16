const mongoose = require("mongoose");
const degreeschema = new mongoose.Schema({
  name: { type: String, default:""},
  id:{type:Number,default:1}
},
{
    timestamps: true
});
const Degree = mongoose.model("degree", degreeschema);
module.exports = Degree;