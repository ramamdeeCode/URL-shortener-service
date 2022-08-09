const router = require("express").Router({ mergeParams: true });
const controller = require("./urls.controller");
const methodNotallowed = require("../errors/methodNotAllowed");
const usesRouter = require("../uses/uses.router");
const app = require("../app");

router.use("/:urlId/uses", controller.checkUrlExist, usesRouter);
router.use("/:urlId/uses/:useId", controller.checkUrlExist, usesRouter);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotallowed);

router
  .route("/:urlId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotallowed);

module.exports = router;
