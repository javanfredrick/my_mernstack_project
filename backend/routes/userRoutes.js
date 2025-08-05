const express = require('express');
const { protect } = require('../middleware/auth');
const { getProfile, updateProfile, getUsers } = require('../controllers/userController');

const router = express.Router();

// All routes are protected
router.use(protect);

// User profile routes
router.get('/me', getProfile);
router.put('/me', updateProfile);

// Admin route
router.get('/', getUsers);

module.exports = router;