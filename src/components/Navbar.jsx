import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button } from "react-bootstrap";
import logo from '../assets/logo resi.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    
    toast.success("Logged out Succesfully");
    setTimeout(() => {
      
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo" style={{height:"100px"}}>
          <Link to={"/"} >
            <img
            
            src={logo}
              alt="logopng"
              style={{height:"100%",width:"auto"}}
            />
          </Link>
        </div>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/CreateRecipe"}>CreateRecipe</Link>
          {!cookies.access_token ? (
            <>
              <Link to={"/Login"}>Login</Link>
              <Link to={"/Register"}>Register</Link>
            </>
          ) : (
            <>
              <Link to={"/SavedRecipe"}>SavedRecipe</Link>
              <Button  style={{backgroundColor:"red"}} onClick={logout}>Logout</Button>
            </>
          )}
        </div>
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
