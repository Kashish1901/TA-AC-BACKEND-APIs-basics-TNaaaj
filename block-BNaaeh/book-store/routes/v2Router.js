var express = require("express");
var router = express.Router();
var Book = require("../models/Book");
var Comment = require("../models/Comment");

router.get("/", async (req, res) => {
  try {
    var books = await Book.find({});
    res.json({ books });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var book = await Book.findById(id);
    var comments = await Comment.find({ bookId: id });
    res.json({ book, comments });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    var book = Book.create(req.body);
    res.json({ book });
  } catch (err) {
    return res.status(300).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var updatedBook = await Book.findByIdAndUpdate(id, req.body);
    res.json({ updatedBook });
  } catch (err) {
    return res.status(300).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var book = await Book.findByIdAndDelete(id);
    res.json({ book });
  } catch (err) {
    return res.status(300).json(err);
  }
});

router.post("/:id/comments", async (req, res) => {
  try {
    var id = req.params.id;
    req.body.bookId = id;
    var comment = await Comment.create(req.body);
    res.json({ comment });
  } catch (err) {
    return res.status(300).json(err);
  }
});
router.put("/:id/comments", async (req, res) => {
  try {
    var id = req.params.id;
    var updatedComment = await Comment.findByIdAndUpdate(id, req.body);
    res.json({ updatedComment });
  } catch (err) {
    return res.status(300).json(err);
  }
});

router.delete("/:id/comments", async (req, res) => {
  try {
    var id = req.params.id;
    var comment = await Comment.findByIdAndDelete(id);
    res.json({ comment });
  } catch (err) {
    return res.status(300).json(err);
  }
});

module.exports = router;
