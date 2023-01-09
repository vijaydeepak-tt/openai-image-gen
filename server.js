const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5001;

const app = express();

// Enable Body parser
app.use(express.json());
app.use(express.urlencoded());

app.use("/openai", require("./routes/openai"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
