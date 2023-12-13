import { useState } from 'react';
import '../stylesheets/Register.css';
import { useNavigate } from "react-router";
import DataService  from "../API/Dataservice"
import { useDispatch } from 'react-redux';
import { addToken } from '../Redux/Actions';



const Login =()=>{
const navigate = useNavigate();
const dispatch = useDispatch();
const [email, setEmail] = useState();
const [password, setPassword] = useState();

const gotoRegister =()=>{
    navigate('/register');
}

const gotoHomePage =()=>{
    let payload={
        "identifier":email,
        "password":password
    }
    DataService.loginService(payload).then((res)=>{
        console.log(res.data.jwt)
        dispatch(addToken(res.data.jwt))
        navigate('/home');
    })
    .catch((err) =>{
        navigate("/error")
    })
   
}
    return(
        <div className="container px-4 py-5 mx-auto">
    <div className="card card0">
        <div className="d-flex flex-lg-row flex-column-reverse">
            <div className="card card1">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                        <div className="row justify-content-center px-3 mb-3">
                            <img id="logo" src="https://i.imgur.com/PSXxjNY.png" />
                        </div>
                        <h3 className="mb-5 text-center heading">LensWear</h3>

                        <h6 className="msg-info">Please login to your account</h6>

                        <div className="form-group">
                            <label className="form-control-label text-muted">Username</label>
                            <input type="text" id="email" name="email" placeholder="Enter Email id" 
                            className="form-control"  onChange={(e)=>setEmail(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label className="form-control-label text-muted">Password</label>
                            <input type="password" id="psw" name="psw" placeholder="Password" 
                            className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>

                        <div className="row justify-content-center my-3 px-3">
                            <button className="btn-block btn-color" onClick={gotoHomePage}>Login to LensWear</button>
                        </div>

                        <div className="row justify-content-center my-2">
                            <a href="#"><small className="text-muted">Forgot Password?</small></a>
                        </div>
                        <div className="bottom text-center mb-5">
                      <p href="#" className="sm-text mx-auto mb-3">Don't have an account? &nbsp;<button className="btn btn-white ml-2" onClick={gotoRegister}>Create new</button></p>
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
    )
}

export default Login
