import axios from "axios";
const baseURL = process.env.baseURL;

const api = axios.create({
  baseURL: `${baseURL}/api`,
});
export default api;
