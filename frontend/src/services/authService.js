import api from './api';

export const authService = {
  // Login user
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response;
  },

  // Register user
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response;
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response;
  },

  // Update user profile
  updateProfile: async (userData) => {
    const response = await api.put('/auth/profile', userData);
    return response;
  },

  // Change password
  changePassword: async (passwordData) => {
    const response = await api.put('/auth/password', passwordData);
    return response;
  },

  // Forgot password
  forgotPassword: async (email) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response;
  },

  // Reset password
  resetPassword: async (token, password) => {
    const response = await api.post('/auth/reset-password', { token, password });
    return response;
  },

  // Verify email
  verifyEmail: async (token) => {
    const response = await api.post('/auth/verify-email', { token });
    return response;
  },

  // Resend verification email
  resendVerification: async () => {
    const response = await api.post('/auth/resend-verification');
    return response;
  },
}; 