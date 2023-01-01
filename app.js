const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/kalludata";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected...");
});

app.use(express.json());

const tableRouter = require("../mongoserver/routers/tables");
app.use("/tables", tableRouter);

app.listen(9000, () => {
  console.log("Serer Started");
});
