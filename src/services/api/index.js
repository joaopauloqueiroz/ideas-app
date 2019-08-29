
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:3500/'
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@ideas:user')
  if (token) {
      config.headers.authorization = `Bearer ${token}`;
      config.headers.Accept = "application/json"
  }
  return config;
})

export default api;