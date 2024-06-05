import axios from 'axios';

const API = axios.create({ baseURL: 'https://resqhub.onrender.com/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);
export const getAgenciesInRange = (lat, lng, radius) => API.get(`/agencies/inrange?lat=${lat}&lng=${lng}&radius=${radius}`);
export const getChats = (userId) => API.get(`/chat/${userId}`);
export const sendMessage = (chatId, message) => API.post(`/chat/${chatId}`, message);
export const getAllAgencies = () => API.get('/agencies/allagencies');
