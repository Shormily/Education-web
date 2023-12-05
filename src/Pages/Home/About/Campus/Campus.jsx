import { NavLink } from "react-router-dom";
import Tab from "../../Tab/Tab";
// import CountUp from "react-countup";
import Accordions from "./../../Styles/Accordions";

const Campus = () => {
  return (
    <>
      <div className="bg-gray-100 px-4">
        <div className="flex pt-24 max-w-[1300px] m-auto">
          <NavLink
            as={NavLink}
            className="pb-3 font-medium text-[14px] text-gray-500  hover:text-[#991b1b]"
            to="/"
          >
            Home <span className="mx-2"> /</span>
          </NavLink>
          <NavLink
            as={NavLink}
            className="pb-3 font-medium text-[14px] text-gray-500  hover:text-[#991b1b]"
            to="/about"
          >
            About <span className="mx-2"> /</span>
          </NavLink>
          <NavLink
            as={NavLink}
            className="pb-3 font-medium text-[14px] text-gray-500  hover:text-[#991b1b]"
            to="/Administrator"
          >
            Administrator
          </NavLink>
        </div>
        <div className="flex-container study-num max-w-[1300px] gap-24 m-auto">
          <div className="lg:col-span-2 md:col-span-2">
            <h1 className="text-4xl mt-12 pb-3">Our Campus</h1>
            <p className="text-[21px] text-justify pt-5 pb-2">
              The Smart community has been having essential conversations about
              the need to increase and respect diversity and inclusion on
              campus.
            </p>
            <div className=" pb-7">
              <p className="ft-text mr-8 text-[15px]  pt-5 leading-relaxed text-gray-500 text-justify">
                By charter, Smart has two governing boards—the President and
                Fellows of Smart College and the Board of Overseers. The basic
                architecture of the two-board system is defined by the Smart
                University’s charter, which is reflected in a series of
                documents dating to the mid-seventeenth century. Through their
                complementary efforts, the two boards perform the essential
                roles ordinarily associated with a board of trustees, while
                helping to shape the University’s agenda, inquiring into the
                quality and progress of its activities, and assuring that Smart
                remains true to its mission.
              </p>
            </div>
          </div>
          <div className=" md:pt-4 sm:pt-0 lg:pt-12 w-full  ">
            <div className="bg-white ">
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
              <p className=" mx-5 mb-4 mt-2">History</p>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#6b7280",

                  height: "1px",
                }}
                className="mx-5"
              />
              <p className=" mx-5 mb-4 mt-4 text-[#991b1b]">Administration</p>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#6b7280",

                  height: "1px",
                }}
                className="mx-5"
              />
              <p className=" mx-5 mb-4 mt-4">Our Campus</p>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#6b7280",

                  height: "1px",
                }}
                className="mx-5"
              />
              <p className=" mx-5 mb-4 mt-4">Cafeteria</p>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#6b7280",

                  height: "1px",
                }}
                className="mx-5"
              />
              <p className=" mx-5 mb-3 mb-4 mt-4 pb-8">Our Teachers</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1300px] m-auto py-12">
          <Accordions />
        </div>
      </div>
    </>
  );
};

export default Campus;
