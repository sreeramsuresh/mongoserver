const express = require("express");
const router = express.Router();
const Table = require("../models/table");

router.get("/", async (req, res) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const table = await Table.findById(req.params.id);
    res.json(table);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const table = new Table({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try {
    const a1 = await table.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const table = await Table.findById(req.params.id);
    table.sub = req.body.sub;
    const a1 = await table.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
