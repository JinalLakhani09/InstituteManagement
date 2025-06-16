const mongoose = require("mongoose");
const universityschema = new mongoose.Schema({
  name: { type: String, default:""},
  id:{type:Number,default:1}
},
{
    timestamps: true
});
const University = mongoose.model("university", universityschema);
module.exports = University