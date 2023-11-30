import { createContext, useState } from "react";
import "./Signup.css";
import { FcLock } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebaseconfig";
import Swal from "sweetalert2";
import 'animate.css';
// import useFirebase from "./useFirebase";
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const SignUP = () => {
 
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [password, setPassword] = useState();
  
  const navigate = useNavigate()
   const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('https://education-server-orpin.vercel.app/register',{name, email, password})
    .then(result => {console.log(result)
      setUser(result.user);

      navigate('/',)
      Swal.fire({
        position: "top-center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 3000}
      )
    })
    .catch(err=> console.log(err))
   }
   
   const signInUsingGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate('/')
      })
      .catch((error) => {
        
        setError(error.message);
      });
  };
  return (
    <div className="pb-24 pt-8 m-auto max-w-[1200px]">
      <h1 className="text-[#002147] text-4xl py-4  banner-text text-center">
        Register Now
      </h1>
      <form onSubmit={handleSubmit} action="">
      <div className="flex-signup pt-3   m-auto justify-center ">
        <div className="m-auto justify-center animate__animated animate__fadeInRight ">
          <div className="group  pt-5">
            <span className="icon">
              <FcReading color="text-gray-950 pb-2" size={25} />
            </span>
            <input
              className="input shadow-lg  "
              type="First Name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="group pt-8 ">
            <span className="icon">
              <FcFeedback color="text-gray-950" size={20} />
            </span>
            <input
            
              className="input shadow-lg required"
              type="Name"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="group pt-8 pb-4 ">
            <span className="icon">
              <FcLock color="text-gray-950" size={20} />
            </span>
            <input
              className="input shadow-lg "
              type="Last Name"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
         
          <NavLink
            as={NavLink}
            to="/login"
            className="mt-4 banner-text text-sm px-2 textsignup"
          >
            Already you have account ? Please Log In
          </NavLink>
          <div className="flex-container gap-5">
            <div className="  pt-4 ">
              <button className="btnsign lg:w-[180px] sm:w-full  text-center  text-grey-950 shadow-lg">
                Register Now
                <span></span>
              </button>
            </div>
            <div className="  pt-4 ">
              <button onClick={signInUsingGoogle}  className="btnsign lg:w-[180px] sm:w-full md:w-full  text-center  text-grey-950 shadow-lg">
                Sign In Google
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-3 animate__animated animate__fadeInDown">
          <img
            className="img-shadow pt-40 mb-5   justify-center m-auto"
            src="https://i.ibb.co/r3vGsxd/books-removebg-preview.png"
            alt="books"
            border="0"
          />
        </div>
      </div>
      </form>
     
    </div>
  );
 
};

export default SignUP;
