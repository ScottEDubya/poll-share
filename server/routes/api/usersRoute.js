const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/") // Matches with "/api/users"
  .get(usersController.findAll)
  .post(usersController.create);

router // Matches with "/api/users/:id"
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;