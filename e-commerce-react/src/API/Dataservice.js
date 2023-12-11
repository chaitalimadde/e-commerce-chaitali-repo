import axios from "axios";

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