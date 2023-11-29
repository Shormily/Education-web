import { NavLink, useNavigate } from "react-router-dom";
import { FcFeedback } from "react-icons/fc";
import { FcUnlock } from "react-icons/fc";
import axios from "axios";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {  email, password })
      .then((result) => {
        console.log(result);
        if(result.data === "Success"){
          navigate("/");
        }
      
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="pb-24 pt-8 m-auto max-w-[1200px]">
        <h1 className="text-[#002147] text-4xl py-5   banner-text text-center">
          Please Log In
        </h1>
        <form onSubmit={handleSubmit} action="">
          <div className="flex-signup pt-3  m-auto justify-center ">
            <div className="m-auto justify-center ">
              <div className="group pt-8 ">
                <div className="group pt-8 ">
                  <span className="icon">
                    <FcFeedback color="text-gray-950" size={20} />
                  </span>
                  <input
                    className="input shadow-lg w-full"
                    type="Name"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="group  mb-4">
                <div className="group pt-8  ">
                  <span className="icon">
                    <FcUnlock color="text-gray-950" size={20} />
                  </span>
                  <input
                    className="input shadow-lg"
                    type="Last Name"
                    placeholder="Re-type Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <NavLink
                as={NavLink}
                to="/signup"
                className="mt-4 banner-text text-sm px-2 textsignup"
              >
                Already you have account ? Register now
              </NavLink>
              <div className="flex-container gap-5">
                <div className="  pt-4 ">
                  <div>
                    <button className="btnsign lg:w-[180px] sm:w-full  text-center  text-grey-950 shadow-lg">
                      Log In
                      <span></span>
                    </button>
                  </div>
                </div>
                <div className="  pt-4 ">
                  <div>
                    <button className="btnsign lg:w-[180px] sm:w-full md:w-full  text-center  text-grey-950 shadow-lg">
                      Sign In Google
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 img-shadows">
              <img
                className=" pt-12 mb-5 px-12 imges  justify-center m-auto"
                src="https://i.ibb.co/gd7xgpt/kholabook-removebg-preview.png"
                alt="books"
                border="0"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
