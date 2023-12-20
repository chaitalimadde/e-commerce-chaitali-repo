import { useNavigate } from "react-router";
import '../stylesheets/ErrorUI.css';

const ErrorUI =()=>{
const navigate = useNavigate()

    return(
        <div className="demo">
        <p className="text">Oops...! Something went wrong</p>
        {/* <button onClick={()=>navigate("/")}>Go to Login Page</button> */}
        <button type="button" className="btn btn-secondary" onClick={()=>navigate("/")}>Go to Login Page</button>
        </div>
    )
}

export default ErrorUI;