import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://api.launow.com',
  timeout: 10000,
});

// Add token to headers if available
api.interceptors.request.use(async (config) => {
  // TODO: Get token from secure storage or Redux
  const token = '';
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: Add global error logging
    return Promise.reject(error);
  }
);

export default api; 