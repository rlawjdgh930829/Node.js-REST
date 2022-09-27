const express = require('express');
const { body } = require('express-validator');
const { findOne } = require('../models/post');

const User = require('../models/user');
const authContoroller = require('../controllers/auth');

const router = express.Router();

router.put(
  '/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject('Email address already exists');
          }
        });
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 5 }),
    body('name').trim().not().isEmpty(),
  ],
  authContoroller.signup
);

router.post('/login', authContoroller.login);

module.exports = router;
