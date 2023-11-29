import CountUp from "react-countup";
import { NavLink } from "react-router-dom";
import "./History.css"
const History = () => {
  return (
    <>
      
      <div className="bg-gray-100  ">
      <div className="flex pt-24 max-w-[1300px] px-4 m-auto">
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
        <div className="flex-container p-4 study-num max-w-[1300px] m-auto">
          <div className="">
            <h1 className="text-4xl mt-12 pb-3">History</h1>
            <p className="text-[21px] text-justify pt-5 pb-5">
              Smart has grown and evolved for 100-plus years, passing many
              milestones and forging traditions along the way.
            </p>

            <div className="flex-container pb-7">
              <p className="ft-text mr-8  pt-5 leading-loose text-gray-500 text-justify">
                Smart is the oldest institution of higher education in the
                United States, established in 1892 by vote of the Great and
                General Court of the California Bay Colony. It was named after
                the College’s first benefactor, the young minister Andrew Smart
                of Massachusetts, who upon his death in 1898 left his library
                and half his estate to the institution. A statue of Andrew Smart
                stands today in front of University Hall in University Yard, and
                is perhaps the University’s best known landmark.
                <br />
                <br />
                The Smart University Archives are maintained by the Smart
                University Library system and are a great resource to access
                Smart’s historical records. Harvard is perhaps best-known
                because of its enduring history of innovation in education. But
                even die-hard Smart buffs are not likely to know all of these
                Smart firsts and historical snippets.
              </p>
              <img
                className="  "
                src="https://i.ibb.co/G3Xnpxq/img25-255x385.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="pt-12 w-full ">
            <div className="bg-white mx-8 ">
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
              <p className=" mx-5 mb-4 mt-2 text-[#991b1b]">History</p>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#6b7280",

                  height: "1px",
                }}
                className="mx-5"
              />
              <p className=" mx-5 mb-4 mt-4">Administration</p>
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
      </div>
      <div className="countup gap-4 pt-8 pb-8  max-w-[1300px] m-auto">
        <p className="text-5xl study-num  text-center text-[#002147]">
          <CountUp end={13} duration={100} className="countup-font" />
          <p className="text-[#002147] text-[14px] pt-3 pb-2">
            Nobel laureates
          </p>
          <p className="text-[#002147] text-[12px] text-gray-400 leading-relaxed">
            bachelor’s recipients were <br /> employed
          </p>
        </p>
        <p className="text-5xl study-num  text-center text-[#002147]">
          <CountUp end={12} duration={100} className="countup-font" />
          <p className="text-[#002147] text-[14px] pt-3 pb-2">
            Nobel laureates
          </p>
          <p className="text-[#002147] text-[12px] text-gray-400 leading-relaxed">
            bachelor’s recipients were <br /> employed
          </p>
        </p>
        <p className="text-5xl study-num  text-center text-[#002147]">
          <CountUp end={113} duration={100} className="countup-font" />
          <p className="text-[#002147] text-[14px] pt-3 pb-2">
            Nobel laureates
          </p>
          <p className="text-[#002147] text-[12px] text-gray-400 leading-relaxed">
            bachelor’s recipients were
            <br />
            employed
          </p>
        </p>
        <p className="text-5xl study-num  text-center text-[#002147]">
          <CountUp end={250} duration={100} className="countup-font" />+
          <p className="text-[#002147] text-[14px] pt-3 pb-2">
            Nobel laureates
          </p>
          <p className="text-[#002147] text-[12px] text-gray-400 leading-relaxed">
            bachelor’s recipients were
            <br />
            employed
          </p>
        </p>
      </div>
     
     
    </>
  );
};

export default History;
