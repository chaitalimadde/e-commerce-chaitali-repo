import axios from "axios";

export const registerService =(data) => {
    return axios.post("http://localhost:1337/api/auth/local/register", data);
  }

export const loginService =(data) => {
    return axios.post("http://localhost:1337/api/auth/local", data);
  }