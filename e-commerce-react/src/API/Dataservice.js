import axios from "axios";
import TokenAuth from "../Components/TokenAuth";

const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzAyMjg3MDgyLCJleHAiOjE3MDQ4NzkwODJ9.-cIGHGviGo1h88FoV49ffs60UlVTDbIuY9OG2ZgnSGA';
class DataService {

getProducts = () =>{
    return axios.get('http://localhost:1337/api/products/?populate=*');
}


getSingleProduct = (id) =>{
    return axios.get(`http://localhost:1337/api/products/${id}/?populate=*`);
}

getCategories = () =>{
    return axios.get(`http://localhost:1337/api/categories`);
}

 getSizes = () =>{
    return axios.get(`http://localhost:1337/api/sizes`);
}

getGenders = () =>{
    return axios.get(`http://localhost:1337/api/genders`);
}

registerService =(data) => {
    return axios.post("http://localhost:1337/api/auth/local/register", data);
  }

loginService =(data) => {
    return axios.post("http://localhost:1337/api/auth/local", data);
  }

getFilter =(data)=>{
  // const tokenVal = TokenAuth().token;
  const tokenVal = localStorage.getItem('token')
    return axios.request({
        headers: {
          Authorization: `Bearer ${tokenVal}`
        },
        method: "POST",
        url: `http://localhost:1337/api/filterProducts`,
        data:data
      })
}

placeOrder =(data)=>{
  // const tokenVal = TokenAuth().token;
  const tokenVal = localStorage.getItem('token')

      return axios.request({
        headers: {
          Authorization: `Bearer ${tokenVal}`
        },
        method: "POST",
        url: `http://localhost:1337/api/orders`,
        data:data
      })
    
}

}
export default new DataService();