import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Product from "./Components/Product";
import SingleProduct from "./Components/SingleProduct";
import Login from "./Components/Login";
import Register from "./Components/Register";

const Routing = ()=>{

    return(
        <div>
     <Routes>
        <Route  exact path="/" Component={Login}></Route>
        <Route  path="/register" Component={Register}></Route>
        <Route  path="/home" Component={Home}></Route>
        <Route  path="/product" Component={Product}></Route>
        <Route  path="/product/:id" Component={SingleProduct}></Route>
        </Routes>
        </div>
    )
}

export default Routing;