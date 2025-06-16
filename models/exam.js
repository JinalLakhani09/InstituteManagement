const mongoose = require("mongoose");
const examschema = new mongoose.Schema({
  name: { type: String, default:""},
  id:{type:Number,default:1}
},
{
    timestamps: true
});
const Exam = mongoose.model("exam", examschema);
module.exports = Exam;