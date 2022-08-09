const express = require("express");
const urlsRouter = require("./urls/urls.router");
const usesrouter = require("./uses/uses.router");

const app = express();
app.use(express.json());

app.use("/urls", urlsRouter);
app.use("/uses", usesrouter);

// TODO: Add code to meet the requirements and make the tests pass.

//Not found errors
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

//error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).json({ error: message });
});

module.exports = app;
