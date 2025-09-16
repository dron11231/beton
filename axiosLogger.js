/* eslint-disable eslint-comments/no-unlimited-disable */
// @ts-nocheck
/* eslint-disable */
import axios from 'axios';

axios.interceptors.request.use((config) => {
  console.log('🚀 AXIOS REQUEST:', config);

  return config;
});

axios.interceptors.response.use(
  (response) => {
    console.log('✅ AXIOS RESPONSE:', {
      status: response.status,
      data: response.data,
      headers: response.headers
    });

    return response;
  },
  (error) => {
    const endTime = Date.now();
    const duration = endTime - (error.config?.metadata?.startTime || endTime);

    const logData = {
      url: error.config?.url,
      method: error.config?.method?.toUpperCase(),
      status: error.response?.status,
      statusText: error.response?.statusText,
      error: error.message,
      duration: `${duration}ms`,
      responseData: error.response?.data,
      timestamp: new Date().toISOString()
    };

    console.error('❌ AXIOS RESPONSE ERROR:', logData);

    return Promise.reject(error);
  }
);
