import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import CountUp from "react-countup";
const Calendar = () => {
  const menus = [
    {
      name: "December",
      pra: "21, First Day of Winter Break",
    },
    {
      name: "February",
      prag: "12, Lincoln Day Holiday",
      pras: <FaRegCalendarAlt className="mx-4 text-red-900" size={20} />,
      pra: "15, Washington Day Holiday",
    },
    {
      name: "April",
      pra: "April",
    },
    {
      name: "July",
      pras: <FaRegCalendarAlt className="mx-4 text-red-900" size={20} />,
      prag: "21, Last Day of School",
      pra: "21, Last Day of School",
    },
    {
      name: "January",
      pra: "19, School Resumes",
    },
    {
      name: "March",
      pra: "28, Spring Break Begins",
    },
    {
      name: "May",
      pras: <FaRegCalendarAlt className="mx-4 text-red-900" size={20} />,
      prag: "27, Non-Instructional Day",
      pra: "30, Memorial Day Holiday",
    },
  ];
  const items = [
    {
      name: "August",
      pra: "29, First Day of School for students",
    },
    {
      name: "December",
      pra: "21, First Day of Winter Break",
    },
    {
      name: "March",
      pra: "28, Spring Break Begins",
    },
    {
      name: "July",
      prag: "4, Independence Day Holiday",
      pras: <FaRegCalendarAlt className="mx-4 text-red-900" size={20} />,
      pra: "21, Last Day of School",
    },
    {
      name: "September",
      pra: "5, Labor Day Holiday",
    },
    {
      name: "January",
      pra: "19, School Resumes",
    },
    {
      name: "April",
      pra: "19, School Resumes",
    },
    {
      name: "November",
      pras: <FaRegCalendarAlt className="mx-4 text-red-900" size={20} />,
      prag: "11, Veterans Day Holiday",
      pra: "21—25, Thanksgiving Break",
    },
    {
      name: "February",
      pras: <FaRegCalendarAlt className="mx-4 text-red-900 " size={20} />,
      prag: "12, Lincoln Day Holiday",
      pra: "15, Washington Day Holiday",
    },
    {
      name: "February",
      pras: <FaRegCalendarAlt className="mx-4 text-red-900" size={20} />,
      prag: "12, Lincoln Day Holiday",
      pra: "15, Washington Day Holiday",
    },
   
    {
      name: "May",
      pras: <FaRegCalendarAlt className="mx-4 text-red-900" size={20} />,
      prag: "27, Non-Instructional Day",
      pra: "30, Memorial Day Holiday",
    },
  ];
  return (
    <>
    <div className="bg-zinc-100">
    <div className="flex pt-8 max-w-[1200px] m-auto ">
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
      <div className="banner-text  max-w-[1400px] m-auto">
        <p className="text-4xl text-[#002147] py-7 px-24 ">Academic Calendar</p>
        <p className="text-3xl text-[#002147] px-24 ">2018—2019</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-2 pb-16">
          {menus?.map((menu) => (
            <>
              <div>
                <p className="pl-5 text-[20px] pb-3 pt-8 ">{menu?.name}</p>
                <p className="flex">
                  {" "}
                  <FaRegCalendarAlt className="mx-4 text-red-900 text-[15px]" size={20} />
                  {menu?.pra}
                </p>
               
                <p className="flex pt-3 text-[15px]">{menu?.pras}{menu?.prag}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-[#e2e8f0]">
    <div className="banner-text  max-w-[1400px] m-auto">
        <p className="text-3xl text-[#002147] px-24 pt-12 ">2018—2019</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-2  pb-16">
          {items?.map((item) => (
            <>
              <div className="py-0">
                <p className="pl-5 text-[20px] pb-3 pt-8 ">{item?.name}</p>
                <p className="flex text-[15px] mb-1">
                  {" "}
                  <FaRegCalendarAlt className="mx-4 text-red-900" size={20} />
                  {item?.pra}
                </p>
               
                <p className="flex  text-[15px] ">{item?.pras}{item?.prag}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
    <div className="grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-4 pt-8 pb-8  max-w-[1400px] m-auto">
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

export default Calendar;
