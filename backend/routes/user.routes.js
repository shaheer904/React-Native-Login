const express = require("express");
const { login,register } = require("../controllers/user.controller");
const router = express.Router();
const { check } = require("express-validator");

//For user registration
router.post(
    "/register",
    [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Please include a valid Email").isEmail(),
      check(
        "password",
        "Please Enter the password which has at least 6 characters"
      ).isLength({ min: 6 }),
     
    ],
    register
  );


  // For user Login
router.post(
    "/login",
    [
      check("email", "Please include a valid Email").isEmail(),
      check("password", "Password is required").exists(),
    ],
    login
  );


module.exports = router;
