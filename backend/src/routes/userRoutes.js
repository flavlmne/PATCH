const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/populate', userController.populate);
router.get('/users', userController.getAllUsers);
router.post('/user', userController.searchUser);

module.exports = router;
