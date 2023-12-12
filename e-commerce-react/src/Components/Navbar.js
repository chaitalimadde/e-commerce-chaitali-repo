import '../stylesheets/Navbar.css'
import { NavLink , useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Navbar = () => {
const location = useLocation();
const restrictedRoutes = ['/','/register'];
const shouldDisplayNavbar = !restrictedRoutes.includes(location.pathname)
const [count,setCount] =useState(0);
const itemCount = useSelector((state)=>state.Item)
console.log(itemCount)

  return shouldDisplayNavbar?(
    <div>
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <img src="/assets/logo1.PNG" alt="images" className="logo"/>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                Home
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/product"
                      >
                Product
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                Brands
                </NavLink>
            </li>
          </ul>
         <div className='navbar-nav ms-auto ms-2 mb-lg-0 '>
   
            <img src="/assets/user.jpg" alt="user" className='logo2 me-5'/>
            <img src="/assets/cart2.png" alt="cart" className='logo2'/>
           <span className='cart-basket'>{count}</span>
         </div>
        </div>
  
      </nav>
     
      </div>
     
    // </div>
    // </div>
  ) : null;
};

export default Navbar;
