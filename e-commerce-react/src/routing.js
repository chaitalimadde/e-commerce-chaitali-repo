import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Product from "./Components/Product";
import SingleProduct from "./Components/SingleProduct";

const Routing = ()=>{

    return(
        <div>
     <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route  path="/product" Component={Product}></Route>
        <Route  path="/product/:id" Component={SingleProduct}></Route>
        </Routes>
        </div>
    )
}

export default Routing;