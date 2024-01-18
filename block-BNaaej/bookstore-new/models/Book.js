var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema(
  {
    title: String,
    author: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
