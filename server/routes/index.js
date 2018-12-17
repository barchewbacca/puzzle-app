const express = require('express');
const router = express.Router();
const puzzleController = require('./../controllers/puzzle-controller');

router.get('/', puzzleController.homePage);

module.exports = router;
