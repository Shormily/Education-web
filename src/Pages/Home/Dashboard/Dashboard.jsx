import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Authintication/firebaseconfig";
import { IoLogInSharp } from "react-icons/io5";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((err) => console.log(err));
  };
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Home", link: "/", icon: AiOutlineUser },
    { name: "Messages", icon: FiMessageSquare },
    { name: "Analytics", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", icon: FiFolder },
    { name: "Cart", icon: FiShoppingCart },
    { name: "Saved", icon: AiOutlineHeart, margin: true },
    { name: "Setting", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <>

      <div className="dash-design banner-text overflow-x-auto">

        <div className="flex  gap-6   h-full ">

          <div
            className={`dashcolor  min-h-screen ${open ? "w-72" : "w-16"
              } duration-500 text-gray-100 px-5`}
          >

            <div className="py-3 flex justify-end ">

              <HiMenuAlt3
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
           
            <div className="mt-4 flex  flex-col gap-4 relative ">
            <div className="">
              {user?.photoURL ? (
                <img
                  className=" justify-center items-center m-auto flex  w-32 h-32 rounded-full mb-4 "
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <p className="text-light py-8  ">{user?.displayName}</p>
              )}
              {user?.displayName ? (
                  <p
                    className="text-center  text-2xl"
                  >{user?.displayName}</p>
              ) : (
                <p className="text-light hidden lg:block text-center text-base m-auto">{user?.displayName}</p>
              )}
            </div>
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${menu?.margin && "mt-5"
                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#00214791] rounded-md`}
                >
                  
                  <div>{React.createElement(menu?.icon, { size: "25" })} </div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre text-[17px] duration-500 ${!open && "opacity-0 translate-x-28  overflow-hidden"
                      }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
              <div className="px-3 flex sm:hidden lg:block flex-col gap-4 relative">
                {!user?.email && (
                  <Link
                    to={"/login"}
                    onClick={handleLogOut}
                    className="flex text-white"
                  >
                    <h2
                      className={`${open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      SignIn
                    </h2>
                    <IoLogInSharp className="mx-2 mt-1" size="20" />
                  </Link>
                )}
                {user?.email && (
                  <Link
                    onClick={logOut}

                    to={"/signup"}
                    className="flex"

                  >
                    <h2
                      className="hidden lg:block"
                    >

                    </h2>
                    SignOut
                    <IoLogInSharp className="mx-2 mt-1 mb-3" size="20" />
                    <span>
                      {user?.photoURL ? (
                        <img
                          className="  w-9 h-9 rounded-full mb-4 "
                          src={user.photoURL}
                          alt=""
                        />
                      ) : (
                        <small className="text-light ">{user?.displayName}</small>
                      )}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="m-3 text-xl  text-gray-900 font-semibold  ">

            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
