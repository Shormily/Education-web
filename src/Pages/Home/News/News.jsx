import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./News.css";
// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
const News = () => {
  const cards = [
    {
      title: "Students take crash course in Japanese sword fighting",
      img: "https://i.ibb.co/hmmxkFM/graduation-12-10-22-15.jpg",
      text: "The upcoming budget for the Chicago Public Schools will rely on $500 million in yet-to-be-enacted pension savings",
    },
    {
      title:
        "Faculty of Social Sciences and Humanities celebrates students success",
      img: "https://i.ibb.co/cwR1pCL/img13-2.jpg",
      text: "Thousands of teenagers across the US will have school lessons in mindfulness in an experiment designed to see",
    },
    {
      title: "Actor Jeff Soberg will be Smart’s 2016 speaker",
      img: "https://i.ibb.co/ZNY3ynC/img11-1.jpg",
      text: "Christopher Kane is the 23rd president of Smart University, and the Chris Argyris",
    },
    {
      title: "Faculty of Humanities celebrates students",
      img: "https://i.ibb.co/55v4dzd/img12-1.jpg",
      text: "Christopher Kane is the 23rd president of Smart University, and the Chris Argyris",
    },
    {
      title: "Students take crash course in Japanese sword fighting",
      img: "https://i.ibb.co/jr51Bxg/pexels-pixabay-256417.jpg",
      text: "Christopher Kane is the 23rd president of Smart University, and the Chris Argyris",
    },
    {
      title: "Smart launches new Architecture and Design BSc Honours",
      img: "https://i.ibb.co/Ss8M5Gh/pexels-mikhail-nilov-8923566.jpg",
      text: "Christopher Kane is the 23rd president of Smart University, and the Chris Argyris",
    },
    {
      title: "Graduation Admissions",
      img: "https://i.ibb.co/ZNY3ynC/img11-1.jpg",
      text: "Christopher Kane is the 23rd president of Smart University, and the Chris Argyris",
    },
    {
      title: "Continuing Education",
      img: "https://i.ibb.co/55v4dzd/img12-1.jpg",
      text: "Christopher Kane is the 23rd president of Smart University, and the Chris Argyris",
    },
  ];
  return (
    <>
      <div className="max-w-[1540px] m-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swipers"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/ckSQkzD/campus-3-lawn-sitting-students-landscape.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/1LmSx8n/unilecturelike.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/5BmxYCx/wide-fullhd-american-uni.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/Vxs9wmn/czech-University-Students.jpg"
            />
          </SwiperSlide>

          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/71bPs9J/students-in-library.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/HCnBDKs/GRID-across-loch-003.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/Dw04D3k/bffb4ff8b5c5f26fba87d4953382e15ae7ed6883.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/jZmZskD/2018-03-12-UCR-day1-post-79.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/zSpWGZX/QT-Indian-students.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex pt-8 z-10 max-w-[1300px] px-4 m-auto">
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
      <div>
        
      </div>
      <div className="  max-w-[1400px] justify-center  p-4 study-num  m-auto">
        <div className="">
          {cards?.map((card) => (
            <>
              <div className="max-w-sm lg:mb-1 z-20 md:mb-48   m-auto  w-full h-80 lg:max-w-full lg:flex pb-8 md:item-center pt-5">
                <div
                  className=" flex-none  shadow-2xl shadow-lg-x bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  title="Woman holding a mug"
                >
                  <img
                    className="shadow-2xl lg:h-full  w-96 md:h-48  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    src={card?.img}
                    alt=""
                  />
                </div>
                <div className="border-r shadow-lg border-b border-l border-gray-100 lg:border-l-0 lg:border-t lg:border-gray-100 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal ">
                  <div className="mb-8">
                    <p className="text-sm text-red-700 flex items-center">
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      ATHLETICS
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {card?.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://i.ibb.co/cwR1pCL/img13-2.jpg"
                      alt="Avatar of Jonathan Reinink"
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        Jonathan Reinink
                      </p>
                      <p className="text-gray-600">Aug 18</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-8 pb-8  max-w-[1300px] m-auto">
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

export default News;
