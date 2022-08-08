const router = require("express").Router({ mergeParams: true });
const controller = require("./urls.controller");
const methodNotallowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotallowed);

module.exports = router;
