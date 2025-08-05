import api from './api';

const taskService = {
  // Get all tasks
  getTasks: async () => {
    const response = await api.get('/tasks');
    return response.data.data;
  },
  // Get single task
  getTask: async (id) => {
    const response = await api.get(`/tasks/${id}`);
    return response.data.data;
  },
  // Create task
  createTask: async (taskData) => {
    const response = await api.post('/tasks', taskData);
    return response.data.data;
  },
  // Update task
  updateTask: async (id, taskData) => {
    const response = await api.put(`/tasks/${id}`, taskData);
    return response.data.data;
  },
  // Delete task
  deleteTask: async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data.data;
  },
};

export default taskService;
