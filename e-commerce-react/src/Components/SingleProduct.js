import '../stylesheets/Product.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { getSingleProduct} from '../API/Dataservice'
import Dataservice from '../API/Dataservice';
import { addItems } from '../Redux/Actions';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';

const SingleProduct =()=>{
const {id} = useParams();
const [prod, setProd] = useState();
const [count, setCount] = useState(0);
const navigate = useNavigate();
const dispatch = useDispatch();


const getSingleAPI =(async)=>{
  Dataservice.getSingleProduct(id).then((res)=>{
    setProd(res.data.data.attributes)
})
.catch((err) =>{
  navigate("/error")
})

if(prod){
dispatch(addItems(prod,count))
}
}

useEffect(()=>{
  getSingleAPI();

}, [count])

const addCount =()=>{
  setCount(count + 1);
  
}

    return (
      
        <div className='single'>
         
          { prod ? <></>:
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
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
                count > 0 ?
                <div className='mb-4'><button type="button" className="btn btn-danger" onClick={()=>setCount(count - 1)}> - </button>&nbsp;{count}&nbsp;
                <button type="button" className="btn btn-secondary" onClick={addCount}>+</button></div>
                :<></>
               }
               <button type="button" className="btn btn-primary me-4" onClick={addCount}>Add to Cart</button>
               <button type="button" class="btn btn-dark" onClick={()=>navigate("/product")}>Back</button>
               
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