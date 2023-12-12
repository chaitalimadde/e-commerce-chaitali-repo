import axios from "axios";
import { useSelector } from "react-redux";


const Authservice =(data)=>{
  
  const token = useSelector((state)=>{
    console.log(state)
  })
    // return axios.post("http://localhost:1337/api/filterProducts", data, { headers: AuthHeader() })
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

export default Authservice;