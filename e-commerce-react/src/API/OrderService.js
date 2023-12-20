import axios from "axios";
import { useSelector } from "react-redux";

const OrderService =(data)=>{
    const token = useSelector((state)=>{
        console.log(state)
      })

        return axios.request({
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: "POST",
          url: `http://localhost:1337/api/orders`,
          data:data
        }).then(response => {
            console.log(response.data);
          });
      
}

export default OrderService;