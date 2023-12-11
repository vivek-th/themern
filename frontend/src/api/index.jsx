import axios from "axios";

const api = axios.create({
  baseURL: "https://deploy-themern-api.vercel.app/" || "/api",
});

export default api;
