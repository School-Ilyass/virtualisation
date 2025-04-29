// server.ts

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let taskQueue = [2, 4, 6, 8];
let results= [];

app.get("/task", (req, res) => {
  if (taskQueue.length === 0) return res.json({ task: null });
  const task = taskQueue.shift();
  res.json({ task });
});

app.post("/result", (req, res) => {
  const { result } = req.body;
  results.push(result);
  console.log("Received result:", result);
  res.sendStatus(200);
});

app.get("/results", (req, res) => {
  res.json({ results });
});

app.listen(3000, () => console.log("Task server running on port 3000"));
