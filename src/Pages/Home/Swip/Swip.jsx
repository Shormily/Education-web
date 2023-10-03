import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./Swip.css"
// import './styles.css';

// import required modules
import { EffectCoverflow,Autoplay } from 'swiper/modules';

const Swip = () => {
    return (
        <>
        <div className=" ">
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="swipers"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="swiper-slides">
          <img  className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800" src="https://i.ibb.co/nky1VcM/mob-hero.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img  className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800" src="https://i.ibb.co/2cs2k6k/cambridge.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img  className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800" src="https://i.ibb.co/ZmV8qsn/University-of-Alabama-Engineering-Research-Center-01.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img  className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800" src="https://i.ibb.co/6ZxFFQT/photo-1559135197-8a45ea74d367.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img  className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800" src="https://i.ibb.co/1f8DFTk/Abe-2022-Sunset-AGP-5202-Northwood-Lincoln-Statue-Final-s.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img  className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800" src="https://i.ibb.co/z7rpHtf/csm-20230726-Maynooth-University-St-Josephs-Square-Chapel-Print-064-d7b881ee32.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img  className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800" src="https://i.ibb.co/txh0yyX/q1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img  className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800" src="https://i.ibb.co/HCnBDKs/GRID-across-loch-003.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img  className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800" src="https://i.ibb.co/Dw04D3k/bffb4ff8b5c5f26fba87d4953382e15ae7ed6883.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>     
        </>
    );
};

export default Swip;