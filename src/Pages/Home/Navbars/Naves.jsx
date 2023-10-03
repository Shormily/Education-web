import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./Naves.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Naves = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="w-full px-2 p-2  naves banner-text  justify-center sticky  top-0 bg-[#002147]    flex  shadow-lg   items-center  absolute z-20 text-slate-950 font-semibold  bg-[#002147]">
        <NavLink
          as={NavLink}
          className="hover:opacity-50  cursor-default "
          to="/"
        >
          <img
            className="   imgse"
            src="https://i.ibb.co/C14qgPs/logo-3.png"
            alt=""
          />
        </NavLink>

        <React.Fragment>
          <ul className="hidden  lg:pl-32 md:pl-4 sm:pl-2 sm:flex p-4  ">
            <li className="pr-4 relative group   text-white">
              <NavLink
                as={NavLink}
                className="hover:opacity-50 nav-link  cursor-default "
                to="/about"
              >
                AboutUS
              </NavLink>
              <div className="absolute  top-0 -left-68 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px]  transform ">
                <div className="relative top-6    bg-white rounded-sm w-full">
                  <div className="max-w-[1200px]  m-auto pb-4 ">
                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#991b1b",
                        height: "4px",
                      }}
                    />
                  </div>
                  <div className="w-10 mx-5 bg-white "></div>

                  <div className="relative  mx-4">
                    <div className="grid lg:grid-cols-1 mx-3 ">
                      <div>
                        <ul className=" text-[15px] ">
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block pb-3 text-gray-950 hover:text-[#991b1b]"
                              to="/history"
                            >
                              History
                            </NavLink>
                          </li>
                          <div className="max-w-[1200px]  m-auto pb-4 ">
                            <div
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#d4d4d8",
                                height: "1px",
                              }}
                            />
                          </div>
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block pb-3 text-gray-950 hover:text-[#991b1b]"
                              to="/administrator"
                            >
                              Administrator
                            </NavLink>
                          </li>
                          <div className="max-w-[1200px]  m-auto pb-4 ">
                            <div
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#d4d4d8",
                                height: "1px",
                              }}
                            />
                          </div>
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block pb-3 text-gray-950 hover:text-[#991b1b]"
                              to="/cafetria"
                            >
                              Cafeteria
                            </NavLink>
                          </li>
                          <div className="max-w-[1200px]  m-auto pb-4 ">
                            <div
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#d4d4d8",
                                height: "1px",
                              }}
                            />
                          </div>

                          <li>
                            <NavLink
                              as={NavLink}
                              className="block pb-3 text-gray-950 hover:text-[#991b1b]"
                              to="/campus"
                            >
                              Our Campus
                            </NavLink>
                            <div className="max-w-[1200px]  m-auto pb-4 ">
                              <div
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center",
                                  backgroundColor: "#d4d4d8",
                                  height: "1px",
                                }}
                              />
                            </div>
                          </li>
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block pb-5 text-gray-950 hover:text-[#991b1b]"
                              to="/ourTeacher"
                            >
                              Our Teachers
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="pr-4 relative group text-white ">
              <NavLink
                as={NavLink}
                className="hover:opacity-50 nav-link cursor-default "
                to="/about"
              >
                Academics
              </NavLink>
              <div className="absolute  top-0 -left-68 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px]  transform ">
                <div className="relative top-6    bg-white rounded-sm w-full">
                  <div className="max-w-[1200px]  m-auto pb-4 ">
                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#991b1b",
                        height: "4px",
                      }}
                    />
                  </div>
                  <div className="w-10 mx-5 bg-white "></div>

                  <div className="relative  mx-4">
                    <div className="grid lg:grid-cols-1 mx-3 ">
                      <div>
                        <ul className=" text-[15px] ">
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block pb-3 text-gray-950 hover:text-[#991b1b]"
                              to="/cource"
                            >
                              Courses
                            </NavLink>
                          </li>
                          <div className="max-w-[1200px]  m-auto pb-4 ">
                            <div
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#d4d4d8",
                                height: "1px",
                              }}
                            />
                          </div>                      
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block pb-3 text-gray-950 hover:text-[#991b1b]"
                              to="/calendar"
                            >
                             Calendar
                            </NavLink>
                            <div className="max-w-[1200px]  m-auto pb-4 ">
                              <div
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center",
                                  backgroundColor: "#d4d4d8",
                                  height: "1px",
                                }}
                              />
                            </div>
                          </li>
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block pb-5 text-gray-950 hover:text-[#991b1b]"
                              to="/ourTeacher"
                            >
                             Departments
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="pr-4 relative group  text-white">
              <NavLink
                as={NavLink}
                className="hover:opacity-50 nav-link cursor-default "
                to="/admission"
              >
                Addmission
              </NavLink>
           
            </li>

            <li className="pr-4 text-white">
              <NavLink as={NavLink} className="nav-link" to="/news">
                News
              </NavLink>
            </li>
            <li className="pr-4  text-white">
              <NavLink as={NavLink} className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>

            <li className="pr-4  text-white">
              <NavLink as={NavLink} className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </React.Fragment>

        <div onClick={handleNav} className="sm:hidden z-10">
          <FaBars size={30} className="ml-8 cursor-pointer text-white" />
        </div>
        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/100 px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-24">
            <li className="text-2xl py-4">
              <NavLink as={NavLink} to="/">
                Home
              </NavLink>
            </li>
            <li className="text-2xl py-4">
              <NavLink as={NavLink} to="/about">
                AboutUS
              </NavLink>
            </li>
            <li className="text-2xl py-4">
              <NavLink as={NavLink} to="/service">
                Service
              </NavLink>
            </li>
            <li className="text-2xl py-4">
              <NavLink as={NavLink} to="/dashboard">
                Dashboard
              </NavLink>
            </li>

            <li className="text-2xl py-3">
              <NavLink as={NavLink} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* max-w-[1500px] m-auto pt-3 pb-3  flex items-center justify-between mx-auto */}
    </>
  );
};

export default Naves;
