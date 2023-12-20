import { useNavigate } from "react-router";

const ErrorUI =()=>{
const navigate = useNavigate()

    return(
        <div>
        <p class="text">Oops...! Something went wrong</p>
        <button onClick={()=>navigate("/")}>Go to Login Page</button>
        </div>
    )
}

export default ErrorUI;