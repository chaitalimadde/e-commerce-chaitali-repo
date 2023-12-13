import { useEffect, useState } from "react"
// import {getProducts, getCategories, getFilter, getGenders,getSizes} from '../API/Dataservice';
import DataService from '../API/Dataservice';
import '../stylesheets/Product.css';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dataservice from "../API/Dataservice";
import { timeout } from "q";

const Product =()=>{
const [productData, setProductData] =useState();
const [catData, setCatData] =useState();
const [sizeData, setsizeData] =useState();
const [genderData, setgenderData] =useState();
const [selectedCat, setSelectedCat] =useState("");
const [selectedSize, setSelectedSize] =useState("");
const [selectedGender, setSelectedGender] =useState("");
const [error, setError] =useState(false);
const [showSpinner, setshowSpinner] =useState(true);
const [isFilterApplied, setISFilterApplied] = useState(false);
const [filterData, setfilterData] =useState();

const navigate = useNavigate();

    useEffect(()=>{

    const fetchData =async()=>{
    try{
     const [res1,res2,res3,res4 ]= await Promise.all([DataService.getProducts(),DataService.getCategories(),DataService.getSizes(),DataService.getGenders()]);
        setProductData(res1.data.data);
        setCatData(res2.data.data);
        setsizeData(res3.data.data);
        setgenderData(res4.data.data);
        setshowSpinner(false);
    }
    catch(err){
        setError(true);
        navigate("/error");
    }
    }
   
    fetchData(); //all product fetching

    const filterAPICalled =async(payload) =>{
     
      await Dataservice.getFilter(payload).then((res)=>{
        setISFilterApplied(true);
        setfilterData(res.data.data)
        setshowSpinner(false);
      },2000)
      .catch((err)=>{
        setError(true);
        navigate("/error");
      })
   
    }
    if(selectedCat || selectedGender || selectedSize){
        let temp ={
            "size": selectedSize? `${selectedSize}`: "",
            "gender":selectedGender? `${selectedGender}`: "",
            "category":selectedCat? `${selectedCat}`: "",
        }
        filterAPICalled(temp);  //filtered products list
        setshowSpinner(true);
       
    }
    }, [selectedCat,selectedSize,selectedGender])

    const productClicked =(id)=>{
        navigate(`/product/${id}`);
    }

    const filterOptionSelected =(type,name)=>{
        
        if(type === "C"){
            setSelectedCat(name)
           
        }
        if(type === "S"){
            setSelectedSize(name)
           
        }
        if(type === "G"){
            setSelectedGender(name)
          
        }
        
    }

    const clearFilter =()=>{
      setISFilterApplied(false);
      setfilterData(productData);
    }

    return (
      <div>
        
        {!showSpinner ? (
          <>
            <h4>Welcome to Product page</h4>
          </>
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <div className="row mt-5 mb-5">
          <div className="col-sm-2">
            <DropdownButton id="dropdown-basic-button1" title="Select Category" >
              {catData &&
                catData.map((item) => {
                  return (
                    <Dropdown.Item
                    onClick={() =>
                        filterOptionSelected("C", item.attributes.category_name)
                      }
                      key={item.id}
                    >
                      {item.attributes.category_name}
                    </Dropdown.Item>
                  );
                })}
            </DropdownButton>
          </div>
          <div className="col-sm-2">
            <DropdownButton id="dropdown-basic-button2" title="Select Size" >
              {sizeData &&
                sizeData.map((item) => {
                  return (
                    <Dropdown.Item
                    onClick={() =>
                        filterOptionSelected("S", item.attributes.size)
                      }
                      key={item.id}
                    >
                      {item.attributes.size}
                    </Dropdown.Item>
                  );
                })}
            </DropdownButton>
          </div>
          <div className="col-sm-2">
            <DropdownButton id="dropdown-basic-button3" title="Select Gender" >
                {
              genderData && genderData.map((item) =>{
                return <Dropdown.Item onClick={()=>filterOptionSelected("G",item.attributes.title)} key={item.id}>{item.attributes.title}</Dropdown.Item>      
              })  
              }
            </DropdownButton>
          </div>
          <div className="col-sm-2">
          <button type="button" class="btn btn-secondary" onClick={clearFilter}>Clear All Filters</button>
          </div>
        </div>
        { !showSpinner ?
        <div className="row">
          { !isFilterApplied ? productData &&
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
            )) :

            filterData ?
            filterData.map((data) => (
              <div className="col-sm-3 mb-4" key={data.id}>
                <div className="card" onClick={() => productClicked(data.id)}>
                  <img
                    className="card-img-top"
                    src={data.image_url}
                    alt="img tap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Product Name:{data.product_name}
                    </h5>
                    <p className="card-text">
                      Description:{data.description}
                    </p>
                    <p className="card-text">
                      Available Qty: {data.quantity}
                    </p>
                    <p className="card-text">
                      category: {data.category.category_name}
                    </p>
                    <p className="card-text">Sizes: 
                    {
                      data.sizes.map((i)=>{
                        return i.size +" "
                      })
                    }
                    
                     
                    </p>
                    <p className="card-text">
                      gender: {data.gender.title}
                    </p>
                    <p className="card-text">Price: {data.price}</p>
                  </div>
                </div>
              </div>
            ))
            : <div>Sorry Product is not Available</div>

          }
        </div> :<></>
      }
      </div>
    );
}

export default Product
