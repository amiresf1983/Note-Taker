const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Application server now on port ${PORT}!`);
});
