import { useEffect, useState } from "react"
import {getProducts} from '../API/Dataservice';
import '../stylesheets/Product.css'
import { useNavigate } from "react-router-dom";

const Product =()=>{
const [productData, setProductData] =useState();
const navigate = useNavigate();

    useEffect(()=>{
    const getProdData =async () =>{
       await getProducts().then((res)=>{
            setProductData(res.data.data)
        })
    }

     getProdData();
    }, [])

    const productClicked =(id)=>{
        navigate(`/product/${id}`);
    }

    return (
      <div>
       { productData ? <><h4>Welcome to Product page</h4></>:
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        }
        
        <div className="row">
          {productData &&
            productData.map((data) => (
              <div className="col-sm-3 mb-4" key={data.id}>
                <div className="card" onClick={() => productClicked(data.id)}>
                  <img
                    className="card-img-top"
                    src={data.attributes.image_url}
                    alt="img tap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Product Name:{data.attributes.product_name}
                    </h5>
                    <p className="card-text">
                      Description:{data.attributes.description}
                    </p>
                    <p className="card-text">
                      Available Qty: {data.attributes.quantity}
                    </p>
                    <p className="card-text">Price: {data.attributes.price}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
}

export default Product
