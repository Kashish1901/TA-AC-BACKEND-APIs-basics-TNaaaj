var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: { type: String },
    bookId: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    author: String,
    likes: { type: Number, default: 0 },
    author: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
