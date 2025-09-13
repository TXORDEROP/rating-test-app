import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Auth endpoints
export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);

// Store endpoints
export const getStores = () => API.get("/stores");
export const rateStore = (data) => API.post("/stores/rate", data);
