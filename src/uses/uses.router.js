const router = require("express").Router({ mergeParams: true });
const controller = require("./uses.controller");
const methodeNotallowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodeNotallowed);

router.route("/:useId").get(controller.read).all(methodeNotallowed);

module.exports = router;
