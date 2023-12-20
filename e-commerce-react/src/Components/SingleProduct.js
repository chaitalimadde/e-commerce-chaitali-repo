import '../stylesheets/Product.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Dataservice from '../API/Dataservice';
import { addItems } from '../Redux/Actions';
import { useDispatch } from 'react-redux';
import { deleteItems } from '../Redux/Actions';
import { useSelector } from 'react-redux';

const SingleProduct =()=>{
const {id} = useParams();
const [prod, setProd] = useState();
const [prodID, setProdID] = useState();
const [countStore, setCountStore] = useState();
const navigate = useNavigate();
const dispatch = useDispatch();
const itemCount = useSelector((state)=>state.Item)


const getSingleAPI =(async)=>{
  Dataservice.getSingleProduct(id).then((res)=>{
    setProd(res.data.data.attributes);
    setProdID(res.data.data.id);
   
})
.catch((err) =>{
  navigate("/error")
})

}


useEffect(()=>{
  getSingleAPI();
  if(prod){
    let filterData = itemCount.filter((i)=>i.name === prod.product_name)
  if(filterData.length > 0){
    setCountStore(filterData[0].count);
  }
  else{
    setCountStore(0)
  }
   
   console.log(countStore)
  }

},[prod]);

const addCount =()=>{
    dispatch(addItems(prod,prodID))
}

const deleteCount =()=>{
  dispatch(deleteItems(prod,prodID))
}
    return (
      
        <div className='single'>
         
          { prod ? <></>:
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        }
      <div className="container">
        <div className="row">
{
    prod ?
     <div className="col-sm-12" key={id}>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 text-left">
                <img
                  className=""
                  src={prod.image_url}
                  alt="sans"
                  width="200px"
                />
              </div>
              <div className="col-sm-6 textAlign">
                <h5 className="card-title">{prod.product_name}</h5>
                <p className="card-text">{prod.description}</p>
                <p className="card-text">Available Qty:{prod.quantity}</p>
                <p className="card-text">Price: {prod.price}</p>
                {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                 
              {
                countStore ?
                <div className='mb-4'><button type="button" className="btn btn-danger" onClick={deleteCount}> - </button>&nbsp;{countStore}&nbsp;
                <button type="button" className="btn btn-secondary" onClick={addCount}>+</button></div>
                :<></>
              }
                
             
               <button type="button" className="btn btn-primary me-4" onClick={addCount}>Add to Cart</button>
               <button type="button" className="btn btn-dark" onClick={()=>navigate("/product")}>Back</button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      :<></>
    
}
        </div>
      </div></div>
    );
}

export default SingleProduct;