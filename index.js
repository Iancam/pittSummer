const express = require("express");

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// setting up the url routes
app.get("/", (req, res) => {
  res.send("hello " + (req.query.name || "world") + "!");
});

app.listen(3000, () => console.log("listening on port ", 3000));
