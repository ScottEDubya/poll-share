const router = require("express").Router();
const usersRoute = require("./usersRoute");

router.use("/usersRoute", usersRoute);

module.exports = router;