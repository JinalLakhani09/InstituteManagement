const mongoose = require("mongoose");
const standaredschema = new mongoose.Schema({
  name: { type: String, default:""},
  id:{type:Number,default:1}
},
{
    timestamps: true
});
const Standared = mongoose.model("standared", standaredschema);
module.exports = Standared;