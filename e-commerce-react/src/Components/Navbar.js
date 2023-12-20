import '../stylesheets/Navbar.css'
import { NavLink , useLocation, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Navbar = () => {
const location = useLocation();
const restrictedRoutes = ['/','/register','/error'];
const shouldDisplayNavbar = !restrictedRoutes.includes(location.pathname)
const [totalCount,settotalCount] =useState(0);
const itemCount = useSelector((state)=>state.Item)

const navigate = useNavigate();


useEffect(()=>{
  let total = itemCount.reduce((sum,item)=> sum + item.count, 0)
  settotalCount(total);
}, [itemCount])

  return shouldDisplayNavbar ? (
    <div>
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <img src="/assets/logo1.PNG" alt="images" className="logo" />
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
              <NavLink className="nav-link active" aria-current="page" to="/">
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
              <NavLink className="nav-link active" aria-current="page" to="/">
                Brands
              </NavLink>
            </li>
          </ul>
          <div className="navbar-nav ms-auto ms-2 mb-lg-0 ">
          <img src="/assets/cart2.png" alt="cart" className="logo" onClick={()=>navigate("/cart")} />
            <span className="cart-basket">{totalCount}</span>

            <div className="dropdown">
              <img src="/assets/user.jpg" alt="user" className="logo2 " />
              <div className="dropdown-content">
                <a onClick={()=>navigate("/")}>Logout</a>
              </div>
            </div>
            {/* <img src="/assets/user.jpg" alt="user" className='logo2 me-5'/> */}
           
          </div>
        </div>
      </nav>
    </div>
  ) : null;
};

export default Navbar;
