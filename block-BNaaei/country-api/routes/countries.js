var express = require("express");
var router = express.Router();
var Country = require("../models/Country");

router.get("/", async (req, res) => {
  try {
    var countries = await Country.find({});
    res.json({ countires });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    var country = await Country.create(req.body);
    res.json({ country });
  } catch (err) {
    return res.status(301).json(err);
  }
});
router.post("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var country = await Country.findById(id);
    res.json({ country });
  } catch (err) {
    return res.status(301).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var updatedCountry = await Country.findByIdAndUpdate(id, req.body);
    res.json({ updatedCountry });
  } catch (err) {
    return res.status(301).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var country = await Country.findByIdAndDelete(id);
    res.json({ country });
  } catch (err) {
    return res.status(301).json(err);
  }
});

module.exports = router;
