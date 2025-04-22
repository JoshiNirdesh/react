const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());
const port = process.env.PORT;
console.log("Ports is ", port);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/blogs", (req, res) => {
  res.send("Welcome to my new blog");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
