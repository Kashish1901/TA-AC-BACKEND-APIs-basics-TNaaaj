var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    title: String,
    likes: { type: Number, default: 0 },
    author: String,
    bookId: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
