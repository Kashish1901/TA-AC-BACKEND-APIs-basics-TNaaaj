var express = require("express");
var router = express.Router();
var Book = require("../models/Book");

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
    res.json({ book });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    var Book = await Book.create(req.body);
    res.json({ book });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var updatedBook = await Book.findByIdAndUpdate(id, req.body);
    res.json({ updatedBook });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var book = await Book.findByIdAndDelete(id);
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
