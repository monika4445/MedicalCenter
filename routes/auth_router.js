const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controller")

router.get("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/login", authController.loginPost);
router.get("/register", authController.register);
router.post("/register", authController.registerPost);

module.exports= router;

