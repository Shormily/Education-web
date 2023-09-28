import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./Navbars.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbars = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="w-full          bg-[#002147] naves  min-h-[60px] mb-24 flex justify-center shadow-lg   items-center  absolute z-20 text-slate-950 font-semibold  ">
        {/* <img className=" p-3" src={logos} alt="" /> */}
        <React.Fragment>
          <ul className="hidden sm:flex px-4 p-4  ">
            <li className="mx-4 nav-link  text-gray-400">
              <NavLink as={NavLink} to="/">
                Home
              </NavLink>
            </li>
            <li className="mr-4 relative group   text-gray-400">
              <NavLink
                as={NavLink}
                className="hover:opacity-50 cursor-default "
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
            <li className="mr-4 relative group text-gray-400 ">
              <NavLink
                as={NavLink}
                className="hover:opacity-50 cursor-default "
                to="/about"
              >
                Service
              </NavLink>
              <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[450px] transform">
                <div className="relative top-6 p-6  bg-[#fdf4ff] rounded-sm w-full">
                  <div className="w-10 h-10  bg-[#fdf4ff] transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm "></div>

                  <div className="relative z-10 ">
                    <div className="grid grid-cols-2 gap-6 ">
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          The Suite
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block  p-2 -mx-2 hover:opacity-50 cursor-default rounded-lg hover:bg-gradient-to-br
                           hover:from-indigo-100
                           hover:from-yellow-100
                           hover:from-blue-100 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              to="/apoinment"
                            >
                              Appoinment
                              <p className="text-gray-500 font-normal">
                                All-in-one
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block p-2 -mx-2 hover:opacity-50 cursor-default rounded-lg hover:bg-gradient-to-br
                           hover:from-indigo-100
                           hover:from-pink-100
                           hover:from-blue-100 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              to="/generalinfo"
                            >
                              General Information
                              <p className="text-gray-500 font-normal">
                                Prebuild
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block p-2 -mx-2 hover:opacity-50 cursor-default rounded-lg hover:bg-gradient-to-br
                           hover:from-indigo-100
                           hover:from-pink-100
                           hover:from-blue-100 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              to="/doctorprofil"
                            >
                              Doctors Information
                              <p className="text-gray-500 font-normal">
                                All-in-one
                              </p>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          The Suite
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block  p-2 -mx-2 hover:opacity-50 cursor-default rounded-lg hover:bg-gradient-to-br
                           hover:from-indigo-400
                           hover:from-white
                           hover:from-blue-400 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              to="/working"
                            >
                              Working Hourse
                              <p className="text-gray-500 font-normal">
                                All-in-one
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block p-2 -mx-2 hover:opacity-50 cursor-default rounded-lg hover:bg-gradient-to-br
                           hover:from-indigo-100
                           hover:from-pink-100
                           hover:from-blue-100 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              to="/faq"
                            >
                              FAQ
                              <p className="text-gray-500 font-normal">
                                Prebuild
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block p-2 -mx-2 hover:opacity-50 cursor-default rounded-lg hover:bg-gradient-to-br
                           hover:from-indigo-100
                           hover:from-pink-100
                           hover:from-blue-100 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              to="/hospitalinfo"
                            >
                              Hospital Information
                              <p className="text-gray-500 font-normal">
                                All-in-one
                              </p>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="mr-4 relative group  text-gray-400">
              <NavLink
                as={NavLink}
                className="hover:opacity-50 cursor-default "
                to="/service"
              >
                Service
              </NavLink>
              <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[300px] transform">
                <div className="relative top-6 p-6  bg-[#fdf4ff] rounded-sm w-full">
                  <div className="w-10 h-10  bg-[#fdf4ff]  transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm "></div>

                  <div className="relative z-10 ">
                    <div className="grid lg:grid-cols-1 mx-3 ">
                      <div>
                        <p className="uppercase  text-gray-500 font-medium text-[13px]">
                          The Suite
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block  p-2 -mx-2 hover:opacity-50 cursor-default rounded-lg hover:bg-gradient-to-br
                           hover:from-indigo-100
                           hover:from-pink-200
                           hover:from-blue-400 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              to="/eyeexam"
                            >
                              Eye Examination
                              <p className="text-gray-500 font-normal">
                                All-in-one
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block p-2 -mx-2 hover:opacity-50 cursor-default rounded-lg hover:bg-gradient-to-br
                           hover:from-indigo-100
                           hover:from-sky-200
                           hover:from-blue-100 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              to="/diagonisis"
                            >
                              Diagnosis and treatment
                              <p className="text-gray-500 font-normal">
                                Prebuild
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block p-2 -mx-2 hover:opacity-50 cursor-default rounded-lg hover:bg-gradient-to-br
                           hover:from-indigo-100
                           hover:from-pink-200
                           hover:from-blue-100 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              to="/layereye"
                            >
                              Laser eye correction
                              <p className="text-gray-500 font-normal">
                                All-in-one
                              </p>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="mr-4 nav-link text-gray-400">
              <NavLink as={NavLink} to="/dashboard">
                Dashboard
              </NavLink>
            </li>

            <li className="mr-4 nav-link text-gray-400">
              <NavLink as={NavLink} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </React.Fragment>

        <div onClick={handleNav} className="sm:hidden z-10">
          <FaBars size={30} className="mr-4 cursor-pointer" />
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
          <ul className="h-full w-full text-center pt-18">
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
    </>
  );
};

export default Navbars;
