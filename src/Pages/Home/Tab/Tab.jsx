import { useState } from "react";
import 'animate.css';
import "./Tab.css";
const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    {
      label: "All",
      content: (
        <div className="flex  gap-8 tab-header pb-24 pt-8">
          <div className="max-w-lg rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full"
              src="https://i.ibb.co/jr51Bxg/pexels-pixabay-256417.jpg"
              alt="Card"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-red-500 hover:text-red-700 text-[13px] mb-2">Athletics</div>
              <p className="text-gray-700 text-xl text-base">
              Students take crash course in Japanese sword fighting
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag2
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Tag3
              </span>
            </div>
            <div className="font-bold px-6 text-gray-400 hover:text-gray-600 text-[13px] ">August 31, 2016</div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 ">
            <div className="">
              <div className=" flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className=" pt-3 ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/HHzc95Y/news4-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Campus Life",
      content: (
        <div className="flex gap-8 tab-header pb-24 pt-8">
          <div className="max-w-lg rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://i.ibb.co/Ss8M5Gh/pexels-mikhail-nilov-8923566.jpg"
              alt="Card"
            />
             <div className="px-6 py-4">
              <div className="font-bold text-red-500 hover:text-red-700 text-[13px] mb-2">Athletics</div>
              <p className="text-gray-700 text-xl text-base">
              Students take crash course in Japanese sword fighting
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag2
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Tag3
              </span>
            </div>
            <div className="font-bold px-6 text-gray-400 hover:text-gray-600 text-[13px] pb-12">August 31, 2016</div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 ">
            <div className="">
              <div className=" flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className=" pt-3 ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/HHzc95Y/news4-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Athletics",
      content: (
        <div className="flex tab-header gap-8  pb-24 pt-8">
          <div className="max-w-lg rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://i.ibb.co/SPwBVws/pexels-pixabay-301926.jpg"
              alt="Card"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-red-500 hover:text-red-700 text-[13px] mb-2">Athletics</div>
              <p className="text-gray-700 text-xl text-base">
              Students take crash course in Japanese sword fighting
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag2
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Tag3
              </span>
            </div>
            <div className="font-bold px-6 text-gray-400 hover:text-gray-600 text-[13px] pb-12">August 31, 2016</div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 ">
            <div className="">
              <div className=" flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className=" pt-3 ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/HHzc95Y/news4-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Academics",
      content: (
        <div className="flex gap-8 tab-header  pb-24 pt-8">
          <div className="max-w-lg rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://i.ibb.co/bmwpPpQ/pexels-olia-danilevich-5088180.jpg "
              alt="Card"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-red-500 hover:text-red-700 text-[13px] mb-2">Athletics</div>
              <p className="text-gray-700 text-xl text-base">
              Students take crash course in Japanese sword fighting
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag2
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Tag3
              </span>
            </div>
            <div className="font-bold px-6 text-gray-400 hover:text-gray-600 text-[13px] pb-12">August 31, 2016</div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 ">
            <div className="">
              <div className=" flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className=" pt-3 ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/HHzc95Y/news4-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Schools",
      content: (
        <div className="flex gap-8 tab-header pb-24 pt-8">
          <div className="max-w-lg  rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://i.ibb.co/gJyf8Sy/news2-435x280.jpg"
              alt="Card"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-red-500 hover:text-red-700 text-[13px] mb-2">Athletics</div>
              <p className="text-gray-700 text-xl text-base">
              Students take crash course in Japanese sword fighting
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag2
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Tag3
              </span>
            </div>
            <div className="font-bold px-6 text-gray-400 hover:text-gray-600 text-[13px] pb-12">August 31, 2016</div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 ">
            <div className="">
              <div className=" flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className=" pt-3 ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/HHzc95Y/news4-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  <p className="text-[19px]">
                    {" "}
                    Faculty of Social <br /> Sciences and <br />
                    Humanities celebrates <br /> students success{" "}
                  </p>
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <>
      {" "}
      <div className=" flex-container max-w-[1640px] gap-12 justify-center m-auto">
        <div className=" lg:w-[60%]  pt-24  tablet ">
          <div>
            <div className="tab-header ">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`tab ${
                    activeTab === index ? "active" : "color:white"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <button className="btn btn text-[16px] ">{tab.label}</button>
                </div>
              ))}
            </div>
            <div className="tab-content ">{tabs[activeTab].content}</div>
          </div>
          
        </div>
        <div className=" pt-24   max-w-[40%] hidden lg:block">
          <div className="bg-[#002147] pb-24 pt-12 rounded-lg  p-2">
            <div className="  m-auto pb-4 ">
              <img
                className=" p-3  imgse px-24"
                src="https://i.ibb.co/vmvYDr0/mailchimp-envelope.png"
                alt=""
              />
            </div>
            <p className="text-white naves text-center">
              Subscribe
              <p>to our newsletter</p>{" "}
            </p>

            <button className="relative mx-16 mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Enter your email
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="story-section banner-text text-white mt-4 ">
        <div className="text-center  max-w-[1440px] m-auto">
          <div className="row margin">
            <h1 className="text-light text-5xl   p-5 ">
              University Libarary{" "}
            </h1>
            <p className=" text-[18px]  pt-4">
              The doctors and staff of our hospital have been running this
              hospital for many years and we are giving good<br/> treatment to
              everyone . Come to our hospital and get good treatment.This is our
              goal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
