import React,{useState, useContext} from "react";
import Lottie from "react-lottie";
import cuteCatAnimation from "./cute-cat-works.json";
import "./Login.css";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
const Login = () => {
    
  

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: cuteCatAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const {loginUser}= useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const  {name, value} = event.target;
    setCredentials({...credentials, [name]: value});
  };   

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!credentials.email || !credentials.password){
      toast.error("please enter all the required fields!");
      return;
    }
    loginUser(credentials);
  };

  return (
    <>
    <ToastContainer autoClose = {2000} />


    <div className="login-container">
      <div className="login-form">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}> 
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email}  onChange={handleInputChange}   placeholder="johndoe@example.com" style={{ width: "400px" }} required />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password}  onChange={handleInputChange} placeholder="Password" style={{ width: "400px" }} required />
          </div>
          <input type="submit" value="Login" className="btn btn-primary btn-outline-warning my-3" />
          
          <div className="alert alert-dismissible alert-secondary" style={{ fontSize: "14px", padding: "20px", maxWidth: "400px" }}>
  <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
  <strong>Well done!</strong> Don't have an Account??? <Link to="/register" className="alert-link">Create One</Link>.
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

export default Login;
