import axios from "axios";

const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzAyMjg3MDgyLCJleHAiOjE3MDQ4NzkwODJ9.-cIGHGviGo1h88FoV49ffs60UlVTDbIuY9OG2ZgnSGA';

export const getProducts = () =>{
    return axios.get('http://localhost:1337/api/products/?populate=*');
}

export const getSingleProduct = (id) =>{
    return axios.get(`http://localhost:1337/api/products/${id}/?populate=*`);
}

export const getCategories = () =>{
    return axios.get(`http://localhost:1337/api/categories`);
}

export const getSizes = () =>{
    return axios.get(`http://localhost:1337/api/sizes`);
}

export const getGenders = () =>{
    return axios.get(`http://localhost:1337/api/genders`);
}

export const getFilter =(data)=>{
    // return axios.post("http://localhost:1337/api/filterProducts", data)
    return axios.request({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "POST",
        url: `http://localhost:1337/api/filterProducts`,
        data:data
      }).then(response => {
        console.log(response.data);
      });
}