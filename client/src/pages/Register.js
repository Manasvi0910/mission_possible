import {useState, useContext} from "react";
import Lottie from "react-lottie";
import cuteCatAnimation from "./cute-cat-works.json";
import "./Login.css";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
const Register= () => {
    

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: cuteCatAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const {toast} = useContext(ToastContext);
  const {registerUser} = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:""
  });

  const handleInputChange = (event) => {
    const  {name, value} = event.target;
    setCredentials({...credentials, [name]: value});
  };   

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!credentials.email || !credentials.password || !credentials.confirmPassword ){
      toast.error("please enter all the required fields!");
      return;
    }
  
    if( credentials.password !== credentials.confirmPassword ){
      toast.error("passwords do not match!");
      return;
    }
    const userData = {...credentials, confirmPassword: undefined};
    registerUser(userData);
  };

  

  return (
<>
    <ToastContainer autoClose = {2000}/>
    <div className="login-container">
      <div className="login-form">
      <h1>REGISTER</h1>
        <p class="text-success">Create Your Account</p>
        <form onSubmit={handleSubmit}> 
        <div className="form-group">
            <label htmlFor="nameInput" className="form-label mt-4">Your Name</label>
            <input type="text" className="form-control" id="nameInput"  name="name" value={credentials.name}  onChange={handleInputChange}   placeholder="john doe" style={{ width: "400px" }} required />
            
            
          </div>
          
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email}  onChange={handleInputChange}   placeholder="johndoe@example.com" style={{ width: "400px" }} required />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password}  onChange={handleInputChange} placeholder="Password" style={{ width: "400px" }} required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="confirmPassword" value={credentials.confirmPassword}  onChange={handleInputChange} placeholder="confirmPassword" style={{ width: "400px" }} required />
          </div>
          <input type="submit" value="Register" className="btn btn-primary btn-outline-warning my-3" />
        
          <div className="alert alert-dismissible alert-secondary" style={{ fontSize: "14px", padding: "20px", maxWidth: "400px" }}>
            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            <strong>Well done!</strong> Already have an Account??? <a href="/Login" className="alert-link">Login</a>.
          </div>
        </form>
      </div>
      <div className="animation-container">
        <Lottie
          options={lottieOptions}
          height={400}
          width={400}
        />
     
      </div>
    </div>
    </>
  );
};

export default Register;
