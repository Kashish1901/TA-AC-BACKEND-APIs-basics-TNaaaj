var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var booksSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", booksSchema);
