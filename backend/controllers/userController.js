const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get current user profile
// @route   GET /api/users/me
// @access  Private
exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

// @desc    Update current user profile
// @route   PUT /api/users/me
// @access  Private
exports.updateProfile = async (req, res, next) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true, runValidators: true }).select('-password');
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all users (admin only)
// @route   GET /api/users
// @access  Private/Admin
exports.getUsers = async (req, res, next) => {
  try {
    // Only allow admin
    if (req.user.role !== 'admin') {
      return next(new ErrorResponse('Not authorized as admin', 403));
    }
    const users = await User.find().select('-password');
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};
