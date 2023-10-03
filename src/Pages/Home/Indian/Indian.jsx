import { BiSolidChevronRight } from "react-icons/bi";
import "./Indian.css";
import Swip from "../Swip/Swip";
const Indian = () => {
  return (
    <>
      <div className=" banner-text     bg-[#002147] ">
        <div className="flex-container ">
          <div className="pt-32 mt-8 w-full lg:w-[40%]">
            <h1 className="text-styles px-12 text-white  text-5xl ">
              Our AI Training Specialists
            </h1>
            <p className="block text-white text-[13px] mt-5 cont-pra font-semibold mb-2 px-12 leading-loose">
              <span className="text-red-700">Domain /Experts </span>
              <span className="text-gray-700"> | </span> Curated Crowd
              <span className="text-gray-700"> | </span> Global Crowd
            </p>
            <p className="block text-white text-[13px]  mt-5 cont-pra font-semibold mb-2 px-12 leading-loose">
              Having access to domain experts can provide invaluable insights
              and knowledge specific to the industry or niche, which can greatly
              enhance the effectiveness of a large language model. We support
              domains such as math, science, humanities, finance, law, coding,
              counseling, healthcare, creative writing and more!{" "}
            </p>

            <p className="button-container ml-12 mt-5 mb-24">
              <button className="hover-button px-5 pl-5 py-4 flex">
                <span className="font-bold">LEARN MORE</span>{" "}
                <BiSolidChevronRight
                  className="mx-2 text-red-700 hover:text-white"
                  size={25}
                />
              </button>
            </p>
          </div>
          <div className="max-w-[60%] hidden lg:block ">
            <Swip />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Indian;
