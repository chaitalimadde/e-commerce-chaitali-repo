import { useEffect, useState } from "react"
// import {getProducts, getCategories, getFilter, getGenders,getSizes} from '../API/Dataservice';
import DataService from '../API/Dataservice';
import '../stylesheets/Product.css';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar from './Navbar';
import Dataservice from "../API/Dataservice";

const Product =()=>{
const [productData, setProductData] =useState();
const [catData, setCatData] =useState();
const [sizeData, setsizeData] =useState();
const [genderData, setgenderData] =useState();
const [selectedCat, setSelectedCat] =useState("");
const [selectedSize, setSelectedSize] =useState("");
const [selectedGender, setSelectedGender] =useState("");

const navigate = useNavigate();

    useEffect(()=>{

    const fetchData =async()=>{
    try{
     const [res1,res2,res3,res4 ]= await Promise.all([DataService.getProducts(),DataService.getCategories(),DataService.getSizes(),DataService.getGenders()]);
        setProductData(res1.data.data);
        setCatData(res2.data.data);
        setsizeData(res3.data.data);
        setgenderData(res4.data.data);
    }
    catch(err){
        console.log(err)
    }
    }
   
    fetchData();
    if(selectedCat || selectedGender || selectedSize){
        let temp ={
            "size": selectedSize? `${selectedSize}`: "",
            "gender":selectedGender? `${selectedGender}`: "",
            "category":selectedCat? `${selectedCat}`: "",
        }
        Dataservice(temp).then((res)=>{
            console.log(res)
        })
    }
    }, [selectedCat,selectedSize,selectedGender])

    const productClicked =(id)=>{
        navigate(`/product/${id}`);
    }

    const filterOptionSelected =(type,name)=>{
        
        if(type === "C"){
            setSelectedCat(name)
            console.log({selectedCat});
        }
        if(type === "S"){
            setSelectedSize(name)
            console.log({setSelectedSize});
        }
        if(type === "G"){
            setSelectedGender(name)
            console.log({setSelectedGender});
        }
        
    }

    return (
      <div>
        {/* <Navbar /> */}
       { productData ? <><h4>Welcome to Product page</h4></>:
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        }
        <div className="row mt-4 mb-4">
        <div className="col-sm-2">  
            <DropdownButton id="dropdown-basic-button" title="Select Category">
                {
              catData && catData.map((item) =>{
                return <Dropdown.Item  onClick={()=>filterOptionSelected("C",item.attributes.category_name)} key={item.id}>{item.attributes.category_name}</Dropdown.Item>      
              })  
              }
            </DropdownButton>
        </div>
        <div className="col-sm-2">  
            <DropdownButton id="dropdown-basic-button" title="Select Size">
                {
              sizeData && sizeData.map((item) =>{
                return <Dropdown.Item onClick={()=>filterOptionSelected("S",item.attributes.size)} key={item.id}>{item.attributes.size}</Dropdown.Item>      
              })  
              }
            </DropdownButton>
        </div>
        <div className="col-sm-2">  
            <DropdownButton id="dropdown-basic-button" title="Select Gender">
                {
              genderData && genderData.map((item) =>{
                return <Dropdown.Item onClick={()=>filterOptionSelected("G",item.attributes.title)} key={item.id}>{item.attributes.title}</Dropdown.Item>      
              })  
              }
            </DropdownButton>
        </div>
        </div>
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
