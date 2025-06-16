const mongoose = require("mongoose");
const boardschema = new mongoose.Schema({
  name: { type: String, default:""},
  id:{type:Number,default:1}
},
{
    timestamps: true
});
const Board = mongoose.model("board", boardschema);
module.exports = Board;
