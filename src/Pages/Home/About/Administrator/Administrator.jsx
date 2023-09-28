import { NavLink } from "react-router-dom";
const Administrator = () => {
    return (
        <>
          <div className="bg-gray-100  ">
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
        <div className="grid lg:grid-cols-3 gap-4 study-num max-w-[1300px] m-auto">
          <div className="lg:col-span-2 md:col-span-2">
            <h1 className="text-4xl mt-12 pb-3">Administration</h1>
            <p className="text-[21px] text-justify pt-5 pb-2">
            Smart’s administration is responsible for the strategic vision for the University.
            </p>
            <div className=" pb-7">
              <p className="ft-text mr-8 text-[15px]  pt-5 leading-relaxed text-gray-500 text-justify">
              By charter, Smart has two governing boards—the President and Fellows of Smart College and the Board of Overseers. The basic architecture of the two-board system is defined by the Smart University’s charter, which is reflected in a series of documents dating to the mid-seventeenth century. Through their complementary efforts, the two boards perform the essential roles ordinarily associated with a board of trustees, while helping to shape the University’s agenda, inquiring into the quality and progress of its activities, and assuring that Smart remains true to its mission.
              </p>    
            </div>
            <div className="flex">
                <div>
                    <img className="w-64 h-48" src="https://i.ibb.co/6BbMrCf/img1.jpg" alt="" />
                </div>
                <div >
                <p className="ft-text mx-3 text-[#991b1b] text-[12px] ">PRESIDENT</p>
                <p className="mx-3 pt-3 pb-5 text-3xl">Christopher Kane</p>
                <p className="mx-3 ft-text text-[14px]">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris Professor of Politology. His presidential term began in July 2013.</p>
                <ul className="font-medium flex mx-4   ">
                <li className="mt-3 ">
                  <a
                    href=" https://www.linkedin.com/company/cratmateai-technology/?viewAsMember=true "
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook bg-[#1e3a8a] text-white icn"></i>
                  </a>
                </li>
               
                <li className="mt-3">
                  <p>
                    <i className="fa-brands fa-twitter icn bg-[#0ea5e9] text-white"></i>
                  </p>
                </li>
                
                <li className="mt-3">
                  <a
                    href="mailto:umesh@cratmate.com"
                    className="font-normal text-[13px]"
                  >
                    <i className="fa-brands fa-instagram icn bg-[#ec4899] text-white"></i>
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="mailto:umesh@cratmate.com"
                    className="font-normal text-[13px]"
                  >
                    <i className="fa-solid fa-envelope icn bg-[#eab308] text-white"></i>
                   
                  </a>
                </li>
              </ul>
               <p className="mx-3 pt-4 pb-2">Read full profile</p>
               <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#991b1b",
                  marginRight:"90%",
                  height: "2px",
                }}
                className="ml-3"
              />
              
                              </div>
               
            </div>
            <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#a8a29e",
                  marginRight:"",
                  height: "1px",
                }}
                className="mt-12"
              />
            <div className="flex pt-12 pb-24">
                <div>
                    <img className="w-64 h-48" src="https://i.ibb.co/NZ7sqLY/administrator-2-160x190.jpg" alt="" />
                </div>
                <div >
                <p className="ft-text mx-3 text-[#991b1b] text-[12px] ">PROVOST</p>
                <p className="mx-3 pt-3 pb-5 text-3xl">Adrian Swensen</p>
                <p className="mx-3 ft-text text-[14px]">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris Professor of Politology. His presidential term began in July 2013.</p>
                <ul className="font-medium flex mx-4   ">
                <li className="mt-3 ">
                  <a
                    href=" https://www.linkedin.com/company/cratmateai-technology/?viewAsMember=true "
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook bg-[#1e3a8a] text-white icn"></i>
                  </a>
                </li>
               
                <li className="mt-3">
                  <p>
                    <i className="fa-brands fa-twitter icn bg-[#0ea5e9] text-white"></i>
                  </p>
                </li>
                
                <li className="mt-3">
                  <a
                    href="mailto:umesh@cratmate.com"
                    className="font-normal text-[13px]"
                  >
                    <i className="fa-brands fa-instagram icn bg-[#ec4899] text-white"></i>
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="mailto:umesh@cratmate.com"
                    className="font-normal text-[13px]"
                  >
                    <i className="fa-solid fa-envelope icn bg-[#eab308] text-white"></i>
                   
                  </a>
                </li>
              </ul>
               <p className="mx-3 pt-4 pb-2">Read full profile</p>
               <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#991b1b",
                  marginRight:"90%",
                  height: "2px",
                }}
                className="ml-3"
              />
              
                              </div>
               
            </div>
            
          </div>
          <div className="   pt-12    a">
            <div className="bg-white mx-24">
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
      </div>
      
        </>
    );
};

export default Administrator;