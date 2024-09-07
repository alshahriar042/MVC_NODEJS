const express = require("express");
const { getUsers, saveUSer } = require("../controllers/users.controller");
const router = express.Router();

router.get("/users",getUsers );

router.post("/users", saveUSer);

module.exports = router;