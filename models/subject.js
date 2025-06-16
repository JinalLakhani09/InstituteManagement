const mongoose = require("mongoose");
const subjectschema = new mongoose.Schema({
  name: { type: String, default:""},
  id:{type:Number,default:1}
},
{
    timestamps: true
});
const Subject = mongoose.model("subject", subjectschema);
module.exports = Subject;