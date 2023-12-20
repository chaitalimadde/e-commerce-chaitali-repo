
import { useState } from 'react';
import '../stylesheets/Register.css';
import { useNavigate } from 'react-router';
import DataService from '../API/Dataservice';

const Register =()=>{
const [data, setData] = useState();
const navigate = useNavigate();
const[fname, setFname] = useState();
const[lname, setLname] = useState();
const[pass, setPass] = useState();
const[email, setEmail] = useState();
const[user, setUser] = useState();

    const handleSubmit = async (e) => {


        let data = {
            "first_name" : fname,
            "last_name"  : lname,
            "password"   : pass,
            "email"      : email,
            "username"   : user
        }
       await DataService.registerService(data).then((res)=>{
            setData(res.user);
            alert("User is created Successfully");
            navigate("/")
        })
        .catch((err) =>{
            navigate("/error")
        })
      };

    return (
      <div className="container px-4 py-5 mx-auto">
    <div className="card card0">
        <div className="d-flex flex-lg-row flex-column-reverse">
            <div className="card card1">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                        
                        <h3 className="mb-5 text-center heading">LensWear</h3>

                        <h6 className="msg-info">Register to LensWear account</h6>

                        <div className="form-group mb-3">
                            <input type="text" id="first" name="first" placeholder="Enter Firstname" 
                            className="form-control" onChange={(e)=>setFname(e.target.value)}/>
                        </div>

                        <div className="form-group mb-3">
                            <input type="text" id="last" name="last" placeholder="Enter Lastname" 
                            className="form-control" onChange={(e)=>setLname(e.target.value)}/>
                        </div>

                        <div className="form-group mb-3">
                            <input type="password" id="psw" name="psw" placeholder="Password" 
                            className="form-control" onChange={(e)=>setPass(e.target.value)}/>
                        </div>

                        <div className="form-group mb-3">
                            <input type="text" id="email" name="email" placeholder="Enter Email" 
                            className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>

                        <div className="form-group mb-3">
                            <input type="text" id="user" name="user" placeholder="Enter Username" 
                            className="form-control" onChange={(e)=>setUser(e.target.value)}/>
                        </div>
                        <div className="row justify-content-center my-3 px-3">
                            <button className="btn-block btn-color" onClick={handleSubmit}>Register</button>
                        </div>

                        
                        <div className="bottom text-center">
                      <p href="#" className="sm-text mx-auto">Already have an account? &nbsp;<button className="btn btn-white ml-2" onClick={()=>navigate("/")}>Login</button></p>
                </div>
                    </div>
                </div>
               
            </div>
            <div className="card card2">
                <div className="my-auto mx-md-5 px-md-5 right">
                    <h3 className="text-white">We are more than just a company</h3>
                    <small className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                </div>
            </div>
        </div>
    </div>
   
</div>
    );
}

export default Register;