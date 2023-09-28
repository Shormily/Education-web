import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper";
import "./Love1.css";


const Love1 = () => {
 
  return (
    <>
    <div >
<div className="w-full pt-8  text-white h-100%  bg-[#e0f2fe] ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 4,
            loop: true,
            slideShadows: true,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swipers "
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/j9Y1bBy/slide1-635x450.jpg"
              alt=""
            />
          </SwiperSlide>
          {/* <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/j9Y1bBy/slide1-635x450.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/j9Y1bBy/slide1-635x450.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/j9Y1bBy/slide1-635x450.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/j9Y1bBy/slide1-635x450.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/j9Y1bBy/slide1-635x450.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/j9Y1bBy/slide1-635x450.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/j9Y1bBy/slide1-635x450.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src="https://i.ibb.co/j9Y1bBy/slide1-635x450.jpg"
              alt=""
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
      
    </>
  );
};

export default Love1;
