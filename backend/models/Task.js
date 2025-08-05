const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a task title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a task description'],
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  dueDate: {
    type: Date,
    required: [true, 'Please provide a due date']
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please assign the task to a user']
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    enum: ['work', 'personal', 'shopping', 'health', 'education', 'other'],
    default: 'other'
  },
  tags: [{
    type: String,
    trim: true
  }],
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  completedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Indexes for better query performance
taskSchema.index({ assignedTo: 1, status: 1 });
taskSchema.index({ createdBy: 1, createdAt: -1 });
taskSchema.index({ dueDate: 1 });

// Virtual for checking if task is overdue
taskSchema.virtual('isOverdue').get(function() {
  return this.dueDate < new Date() && this.status !== 'completed';
});

// Method to mark task as completed
taskSchema.methods.markCompleted = function() {
  this.status = 'completed';
  this.progress = 100;
  this.completedAt = new Date();
  return this.save();
};

// Method to update progress
taskSchema.methods.updateProgress = function(progress) {
  this.progress = Math.min(100, Math.max(0, progress));
  if (this.progress === 100) {
    this.status = 'completed';
    this.completedAt = new Date();
  } else if (this.progress > 0) {
    this.status = 'in-progress';
  }
  return this.save();
};

// Ensure virtual fields are serialized
taskSchema.set('toJSON', { virtuals: true });
taskSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Task', taskSchema);











