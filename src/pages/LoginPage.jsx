import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate()

  const userLogin = async (event) => {
    event.preventDefault();
    if(username && password){
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      toast.success(`${username} Logged in Successfully`);
    setTimeout(() => {
      
      navigate("/");
    },);

      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/")
    } catch (err) {
      console.error(err);
    }
  }else{
    toast.error("Please fill the form")
  }
  };
  return (
    <>
      <div className="register-container">
        <form className="formContainer">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className="p-1" style={{fontSize:"15px"}}>New User?<Link to={"/Register"} style={{color:"blue",fontSize:"15px"}}>click here</Link> </p>
          </div>
          <Button onClick={userLogin} type="submit">Login</Button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Same as */}
    </>
  );
};
