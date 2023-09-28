import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
const Table = () => {
  const menus = [
    {
      name: "Algebra 1",
      sub: "Mathematics",
      fall: "Fall 2016",
    },
    {
      name: "Algebra 2 (Period 4)",
      sub: "Mathematics",
      fall: "Winter Intensive 2016",
    },
    {
      name: "AP Chemistry (Period 3)",
      sub: "Chemistry",
      fall: "Spring 2017",
    },
    {
      name: "AP Computer Science",
      sub: "Computer Science",
      fall: "Spring 2017",
    },
    {
      name: "AP Macroeconomics (Period 5)",
      sub: "Economics",
      fall: "Fall 2016",
    },
    {
      name: "AP Physics",
      sub: "Physics and Astronomy",
      fall: "Winter Intensive 2016",
    },
    {
      name: "AP Statistics (Period 1)",
      sub: "Physics and Astronomy",
      fall: "Fall 2016",
    },
    {
      name: "Biology",
      sub: "Biological Sciences",
      fall: "Spring 2017",
    },
    {
      name: "Calculus BC Period 4 (Period 4)",
      sub: "Mathematics",
      fall: "Autumn 2017",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 px-5 ">
        <div className="flex pt-8 max-w-[1400px] m-auto">
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
        <div className="overflow-x-auto banner-text max-w-[1440px] m-auto ">
          <h1 className="text-[#002147] text-4xl pt-12 pb-6">Courses</h1>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-[#002147] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                  COURSE NAME
                </th>
                <th className="px-6 py-3 bg-[#002147] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                  DEPARTMENT
                </th>
                <th className="px-6 py-3 bg-[#002147] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                  SEMESTER
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {menus?.map((menu) => (
                <>
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">
                        {menu?.name}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">
                        {menu?.sub}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">
                        {menu?.fall}
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
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
      </div>
    
    </>
  );
};

export default Table;
