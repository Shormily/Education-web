import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./Naves.css";
import styles from "../Styles/styles.module.css";
import chevronDown from "../Styles/chevron-down.svg";
import { NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import { IoLogInSharp } from "react-icons/io5";
import app from "../Authintication/firebaseconfig";

const auth = getAuth(app);
const Naves = ({ header, ...rest }) => {
  const [nav, setNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const handleNav = () => {
    setNav(!nav);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  
  return (
    <>
      <div className="w-full px-2 p-2  naves banner-text  justify-center sticky  top-0 bg-[#002147]    flex  shadow-lg   items-center  z-20 text-slate-950 font-semibold ">
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
          <ul className="hidden  lg:pl-32 md:pl-4 sm:pl-2 sm:flex p-4">
            <li className="pr-4 relative group   text-white">
              <NavLink
                as={NavLink}
                className="hover:opacity-50 nav-link  cursor-default "
                to="/about"
              >
                AboutUS
              </NavLink>
              <div className="absolute  top-0 -left-68 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px]  transform ">
                <div className="relative top-6 bg-white rounded-sm w-full">
                  <div className=" m-auto pb-4 ">
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
                    <div className="  ">
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
                          <div className="w-full  m-auto pb-4 ">
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
                    <div className=" mx-3 ">
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

            <li className="pr-4  relative group text-white">
              <NavLink
                to="/news"
                as={NavLink}
                className="nav-link hover:opacity-50"
              >
                News
              </NavLink>
              <div className="absolute  top-0 -left-68 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50  min-w-[200px]  transform ">
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
                    <div className=" mx-3 ">
                      <div>
                        <ul className=" text-[15px]  ">
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block pb-3 text-gray-950 hover:text-[#991b1b]"
                              to="/news"
                            >
                              News
                            </NavLink>
                          </li>

                          <div className=" pb-4 ">
                            <div
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#d4d4d8",
                                height: "1px",
                              }}
                            />
                          </div>
                          <li className="m-auto">
                            <NavLink
                              as={NavLink}
                              className="block pb-3 text-gray-950 hover:text-[#991b1b]"
                              to="/newsCard"
                            >
                              News Grid
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="pr-4 pt-1  text-white">
              <NavLink
                as={NavLink}
                className="nav-link hover:opacity-50"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>

            <li className=" pr-4 pt-1  text-white">
              <NavLink
                as={NavLink}
                className="nav-link hover:opacity-50"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>

            <li className="pr-4 pt-1 text-white">
              {!user?.email && (
                <NavLink
                  as={NavLink}
                  className=" text-light flex justify-between hover:opacity-50 "
                  to="/signup   "
                  onClick={handleLogOut}
                >
                  SignIn
                  <IoLogInSharp className="mx-2 mt-1" size="20" />
                </NavLink>
              )}
              {user?.email && (
                <NavLink
                  onClick={logOut}
                  className="flex justify-between hover:opacity-50 mt-3"
                  to="/login  "
                  as={NavLink}
                >
                  SignOut
                  <IoLogInSharp className="mx-2 mt-1" size="20" />
                  <span>
                    {user?.photoURL ? (
                      <img
                        className=" w-9 h-9 rounded-full  "
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <small className="text-light ">{user?.displayName}</small>
                    )}
                  </span>
                </NavLink>
              )}
            </li>
          </ul>
          
        </React.Fragment>
        <div className="sm:hidden z-10">
          <label className="hamburger">
            <input className="hidden" type="checkbox" />
            <svg onClick={handleNav} viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>
        </div>
        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute  text-gray-950 left-0 top-0 w-full h-screen bg-[#002147]  px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center  pt-24">
            <li className="text-2xl py-4 text-white">
              <NavLink  className="hover:opacity-50 nav-link cursor-default" as={NavLink} to="/">
                Home
              </NavLink>
             
            </li>
            <li className="pr-4 relative  text-2xl py-4 group justify-center  text-white">
              <NavLink
                as={NavLink}
                className=" hover:opacity-50  nav-link cursor-default"
                to="/about"
              >
             AboutUS 
              </NavLink>
              <div className="absolute pt-5  top-0 -left-68 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px]  transform ">
                <div className="relative top-6 bg-white rounded-sm w-full">
                  <div className=" m-auto pb-4 ">
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
                    <div className="  ">
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
                          <div className="w-full  m-auto pb-4 ">
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
            <li className="pr-4 relative text-2xl py-4 group justify-center  text-white">
              <NavLink
                as={NavLink}
                className="hover:opacity-50 nav-link cursor-default "
                to="/admission"
              >
                Addmission
              </NavLink>
            </li>
            <li className="pr-4   relative text-2xl py-4 justify-center group text-white">
              <NavLink
                to="/news"
                as={NavLink}
                className="nav-link hover:opacity-50"
              >
                News
              </NavLink>
              <div className="absolute pt-5  top-0 -left-68 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50  min-w-[200px]  transform ">
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
                    <div className=" mx-3 ">
                      <div>
                        <ul className=" text-[15px]  ">
                          <li>
                            <NavLink
                              as={NavLink}
                              className="block pb-3 text-gray-950 hover:text-[#991b1b]"
                              to="/news"
                            >
                              News
                            </NavLink>
                          </li>

                          <div className=" pb-4 ">
                            <div
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#d4d4d8",
                                height: "1px",
                              }}
                            />
                          </div>
                          <li className="m-auto">
                            <NavLink
                              as={NavLink}
                              className="block pb-3 text-gray-950 hover:text-[#991b1b]"
                              to="/newsCard"
                            >
                              News Grid
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="pr-4 pt-1 text-2xl py-4 justify-center text-white">
              <NavLink
                as={NavLink}
                className="nav-link hover:opacity-50"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>

            <li className=" pt-1 text-2xl py-4 justify-center text-white">
              <NavLink
                as={NavLink}
                className="nav-link hover:opacity-50"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="pr-4 pt-1  text-2xl py-4 justify-center text-white">
              {!user?.email && (
                <NavLink
                  as={NavLink}
                  className=" text-light flex  justify-center hover:opacity-50 "
                  to="/signup   "
                  onClick={handleLogOut}
                >
                  SignIn
                  <IoLogInSharp className="mx-2 " size="30" />
                </NavLink>
              )}
              {user?.email && (
                <NavLink
                  onClick={logOut}
                  className="flex justify-center hover:opacity-50 mt-3"
                  to="/login  "
                  as={NavLink}
                >
                  SignOut
                  <IoLogInSharp className="mx-2 " size="30" />
                  <span>
                    {user?.photoURL ? (
                      <img
                        className=" w-9 h-9 rounded-full  "
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <small className="text-light ">{user?.displayName}</small>
                    )}
                  </span>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Naves;
