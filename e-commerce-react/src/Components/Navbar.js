import '../stylesheets/Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
         {/* <div className="container-fluid">
        <div className="row"> */}
         
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
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
           
         </div>
        </div>
      </nav>
      </div>
     
    // </div>
    // </div>
  );
};

export default Navbar;
