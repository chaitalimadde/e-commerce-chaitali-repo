import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '../stylesheets/Cart.css';
import Dataservice from '../API/Dataservice';
import { useNavigate } from "react-router";

const Cart =()=>{
  const navigate = useNavigate();
  const [showSpinner, setshowSpinner] =useState(false);
    const itemList = useSelector((state)=>state.Item)
    const [totalPrice,setTotalPrice] = useState();
    const [error, setError] =useState(false);

   console.log(itemList)

   useEffect(()=>{
    let total = itemList.reduce((sum,item)=> sum + item.count * item.price, 0)
    console.log(total);
    setTotalPrice(total)
  }, [itemList])

  const placeOrder =()=>{
    let prodArr =[];
    let temp;
    if(itemList.length > 0){
    itemList.forEach(ele => {
      prodArr.push({
        "id": ele.id,
        "quantity": ele.count
      })
    })

    temp={
      "userEmail": "test.1231@gmail.com",
      "products": prodArr
      }

    }
    
   setTimeout(()=>{
    setshowSpinner(true);
    Dataservice.placeOrder(temp).then((res)=>{
      console.log(res.data.paymentGatewayUrl)
      window.location.href=res.data.paymentGatewayUrl;
      setshowSpinner(false);
    })
    .catch((err)=>{
      setError(true);
      navigate("/error");
    })
   }, 3000)
   
  }

    return (
        <div>
            <h6>Your order is for below Items:</h6>
            {
                itemList.map((i,index)=>{
                    return (
                    <div className="card mt-5 mb-4 card1 cardNew">
                      <div className="row" key={i.id}>
                          <div className="col-4">
                           Item Name : {i.name}
                          </div>
                          <div className="col-sm-4">
                            Price: {i.price}
                          </div>
                          <div className="col">
                            Quantity : {i.count}
                          </div>
                        </div>
                        </div>
                    );
                    
                })
            }
            {
                totalPrice?
                <div>
                <h4 className="mt-4">Total Price is: &nbsp; {totalPrice}</h4>
                <button type="button" className="btn btn-primary mt-4" onClick={placeOrder}>Place order</button>
                </div>
                : <></>
            }
            {
              showSpinner ?
              <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            :<></>
            }
        </div>
    )
}

export default Cart;