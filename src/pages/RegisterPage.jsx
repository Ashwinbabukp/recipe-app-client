import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterPage = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const userRegister = async (event) => {
    event.preventDefault();
    if(username && password){
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      toast.success("Registration Succesfully");
    setTimeout(() => {
      
      navigate("/Login");
    },);
    } catch (err) {
      console.log(err);
    }
  }else{
    toast.error("Please fill the form")
  }
  };
  return (
    <>
      <div className="register-container">
        <form className="formContainer">
          <h2>Register</h2>
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
            <p className="p-1" style={{ fontSize: "15px" }}>
              Already have Account?
              <Link to={"/Login"} style={{ color: "blue", fontSize: "15px" }}>
                click here
              </Link>{" "}
            </p>
          </div>
          <Button onClick={userRegister} type="submit">
            Register
          </Button>
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
    </>
  );
};
