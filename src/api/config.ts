import axios from "axios";

axios.defaults.withCredentials = true;
export const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL,
});

const api = `${process.env.NEXT_PUBLIC_API_URL}`;

export default api;
