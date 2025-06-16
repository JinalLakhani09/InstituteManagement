const mongoose = require("mongoose");
const mediumschema = new mongoose.Schema({
  name: { type: String, default:""},
  id:{type:Number,default:1}
},
{
    timestamps: true
});
const Medium = mongoose.model("medium", mediumschema);
module.exports = Medium;