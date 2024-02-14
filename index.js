const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors())
const bookOfTheDead = require("./characters.js");

app.get("/api/bookOfDead", (req, res) => {
  console.log("Request received for bookOfDead");
  res.status(200).send({ data: bookOfTheDead });
  console.log("Data sent for bookOfDead");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
