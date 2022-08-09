const router = require("express").Router({ mergeParams: true });
const controller = require("./urls.controller");
const methodNotallowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotallowed);

router.route("/:urlId").get(controller.read);

module.exports = router;
