import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Product from "./Components/Product";
import SingleProduct from "./Components/SingleProduct";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ErrorUI from "./Components/ErrorUI";
import Cart from "./Components/Cart";

const Routing = ()=>{

    return(
       
     <Routes>
        <Route  exact path="/" Component={Login}></Route>
        <Route  path="/register" Component={Register}></Route>
        <Route  path="/home" Component={Home}></Route>
        <Route  path="/product" Component={Product}></Route>
        <Route  path="/product/:id" Component={SingleProduct}></Route>
        <Route  path="/cart" Component={Cart}></Route>
        <Route  path="/error" Component={ErrorUI}></Route>

        </Routes>
       
    )
}

export default Routing;