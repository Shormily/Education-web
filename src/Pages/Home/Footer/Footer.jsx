import { NavLink } from "react-router-dom";
import "./Footer.css";
import {
  MdOutlineCircle,
  MdPhoneIphone,
  MdOutlineMailOutline,
} from "react-icons/md";
import { BiWorld, BiSolidChevronRight } from "react-icons/bi";
import { BsPhoneFlip, BsStopwatch } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      {/* <div className="bg-[#3277ae]  pt-12 pb-8">
        <div className="max-w-[1120px] m-auto pt-3 pb-3  flex items-center justify-between mx-auto ">
          <div>
            <p className=" ft-t text-white  text-3xl">
              Apply for Admission or some other Call to Action
            </p>
          </div>
          <div>
            {" "}
            <button
              type="button"
              className="text-white ft-text  flex hover:text-[#002147] border-2 border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-[#002147] dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              {" "}
              CALL TO ACTION <BiSolidChevronRight
                className="mx-2"
                size={20}
              />{" "}
            </button>
          </div>
        </div>
      </div> */}

      <div className="          bg-[#002147] text-white cursor-pointer pt-2  pb-3 ">
        <div
          className=" grid lg:grid-cols-3   max-w-[1200px] pt-12 m-auto gap-8  md:grid-cols-2 sm:grid-cols-1 m-auto flex flex-wrap items-center lg:justify-between mx-auto p-8 footer-link
        "
        >
          <div className="  mb-2 pt-12 text-[14px]">
            <p className="ft-text text-gray-400 text-[13px]">
              INFORMATION ABOUT
            </p>
            <NavLink
              as={NavLink}
              className="flex pt-6 pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                History
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400  text-[13px] font-medium ">
                Administration
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Our Campus
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Cafeteria
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Our Teachers
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Courses
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Academic Calendar
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Department
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Undergraduate Program
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t  text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Contact Us
              </p>
            </NavLink>
          </div>
          <div className="  mb-2 pt-12 text-[14px]">
            <p className="ft-text text-gray-400  text-[13px]">
              INFORMATION FOR
            </p>
            <NavLink
              as={NavLink}
              className="flex pt-6 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Admission
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400  text-[13px] font-medium ">
                School
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Event
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                News
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Applications FAQ
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Donations
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Teachers
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Media
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Alumni
              </p>
            </NavLink>
            <NavLink
              as={NavLink}
              className="flex pb-2 ft-t  text-[#d1d5db]"
              to="/"
            >
              <span className="pt-1 ">
                <MdOutlineCircle />
              </span>
              <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                Athletics
              </p>
            </NavLink>
          </div>
          
          <div className=" pt-12  ">
            <div className="items-center ">
              <img
                src="https://i.ibb.co/C14qgPs/logo-3.png"
                alt=""
                className="pb-2"
              />
              <div>
                <p className="flex  pt-8  pb-2  ">
                  <span className="pt-1 ">
                    <BiWorld />
                  </span>
                  <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                    16-2, Best Avenue Street, CA 23653, USA
                  </p>
                </p>
                <p className="flex  pt-2 pb-2  ">
                  <span className="pt-1 ">
                    <MdPhoneIphone />
                  </span>
                  <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                    +1 998 71 150 30 20
                  </p>
                </p>
                <p className="flex  pt-2  pb-2 ">
                  <span className="pt-1 ">
                    <BsPhoneFlip />
                  </span>
                  <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                    +1 998 71 150 30 30
                  </p>
                </p>
                <p className="flex  pt-2  pb-2 ">
                  <span className="pt-1 ">
                    <MdOutlineMailOutline />
                  </span>
                  <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                    info@stylemixthemes.com
                  </p>
                </p>
                <p className="flex  pt-2  pb-2 ">
                  <span className="pt-1 ">
                    <BsStopwatch />
                  </span>
                  <p className="hover:text-white mx-2 pb-2 text-gray-400 text-[13px] font-medium ">
                    Mon — Sat: 9AM — 6PM
                  </p>
                </p>
              </div>
            </div>
            <div
              className=" w-full  md:w-auto"
              // id="navbar-default"
            >
              <ul className="font-medium flex-container   ">
                <li className="mt-3">
                  <a
                    href=" https://www.linkedin.com/company/cratmateai-technology/?viewAsMember=true "
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook icn"></i>
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=" https://www.linkedin.com/company/cratmateai-technology/?viewAsMember=true "
                    target="_blank"
                  >
                    <i className="fa-brands fa-google-plus-g icn"></i>
                  </a>
                </li>
                <li className="mt-3">
                  <p>
                    <i className="fa-brands fa-twitter icn  "></i>
                  </p>
                </li>
                <li className="mt-3">
                  <p>
                    <i className="fa-brands fa-youtube icn "></i>
                  </p>
                </li>
                <li className="mt-3">
                  <a
                    href="mailto:umesh@cratmate.com"
                    className="font-normal text-[13px]"
                  >
                    <i className="fa-brands fa-instagram icn"></i>
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="mailto:umesh@cratmate.com"
                    className="font-normal text-[13px]"
                  >
                    <i className="fa-brands fa-skyatlas icn"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px]  m-auto pb-4 ">
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#9ca3af",
              height: "1px",
              marginBottom: "30px",
            }}
          />

          <p className="text-white  text-center">
            Copyright © Secondary School. All rights reserved by shormily Raisa
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
