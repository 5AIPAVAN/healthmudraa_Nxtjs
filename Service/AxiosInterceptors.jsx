import axios from "axios";

const url = "http://localhost:8080";
const frURL = "https://healthmudraa.com/doctor/login";

// Create instance without Authorization header
export const Axiosinstance = axios.create({
  baseURL: `${url}`,
  headers: {
    "Access-Control-Allow-Origin": true,
  },
});

// Request interceptor (optional)
Axiosinstance.interceptors.request.use(
  async (req) => {
    // You can add custom logic here if needed
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (optional)
Axiosinstance.interceptors.response.use(
  async (res) => {
    // You can add custom logic here if needed
    return res;
  },
  async (err) => {
    // Handle response errors here if needed
    if (err.response) {
      if (err.response.status === 401) {
        // Handle 401 unauthorized error (if needed)
      } else if (err.response.status === 403) {
        // Handle 403 forbidden error (if needed)
      }
    }
    return Promise.reject(err);
  }
);
