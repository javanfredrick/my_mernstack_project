const express = require('express');
const { protect } = require('../middleware/auth');
const { getTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

// All routes are protected
router.use(protect);

// Task CRUD routes
router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;