import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Product from "./Components/Product";

const Routing = ()=>{

    return(
        <div>
     <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route  path="/product" Component={Product}></Route>
        </Routes>
        </div>
    )
}

export default Routing;