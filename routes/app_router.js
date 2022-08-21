const express = require("express");
const router = express.Router();
const appController = require("../controllers/app_controller");
const {AuthMiddleware} = require("../utils");

router.get("/doctors", appController.getDoctors);
router.get("/patients", AuthMiddleware, appController.getPatients);
router.get("/book", appController.bookAppoint);
router.post("/book", appController.bookAppointPost);

module.exports= router;

