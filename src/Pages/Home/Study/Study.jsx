import { FaSearchPlus } from "react-icons/fa";
import './Study.css'
import CountUp from 'react-countup';
const Study = () => {
  return (
    <>

      <div className="bg-gray-100 ">
        {" "}
        <div className="flex max-w-[1400px] m-auto   items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
            <div className="max-w-[500px] m-auto pt-12">
              <p className="ft-t text-4xl text-gray-950 pb-8 ">
                Featured media
              </p>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
                <div className="h-full ">
                  <img
                    className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/9rXJ0NZ/media-445x270.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    <FaSearchPlus />
                  </h1>
                </div>
              </div>

              <h1 className="ft-text text-2xl text-gray-800 pt-4 hover:text-[#7f1d1d]">
                Open Days at the Smart University
              </h1>
              <p className=" ft-text text-gray-400 text-[14px] leading-loose pt-3 pb-12 mb-5">
                You and your parents are welcome to visit Smart from 8:30 AM to
                5:30 PM Monday through Saturday, except on public holidays and
                certain days throughout the year, which are noted on the
                calendar.
              </p>
            </div>
            <div className="pt-12 mt-3">
              <div className="pt-12 flex">
                <div className=" pt-3 ">
                  <img
                    className=" w-[120px] h-[80px] object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/L54R2WJ/media1.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify  pt-3 font-medium px-3 ft-text hover:text-[#7f1d1d] cursor-pointer">
                  What happens <br /> if you fall into a <br /> black hole?
                </p>
              </div>
              <div className="pt-3 flex">
                <div className=" pt-3 ">
                  <img
                    className=" w-[120px] h-[80px] object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/VNLzgd0/media2-150x96.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify  pt-3 font-medium px-3 ft-text hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  Annual Athena <br />
                  Lecture: Towards <br /> a silent aircraft
                </p>
              </div>
              <div className="pt-3 flex">
                <div className=" pt-3 ">
                  <img
                    className=" w-[120px] h-[80px] object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/nsb9qSK/media3.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify  pt-3 font-medium px-3 ft-text hover:text-[#7f1d1d] cursor-pointer">
                  Smart Art <br /> Museum and the <br /> Loremipsum Collection
                </p>
              </div>
              <div className="pt-3 flex">
                <div className=" pt-3 ">
                  <img
                    className=" w-[120px] h-[80px] object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/k5Xzfjd/media4-150x96.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify  pt-3 font-medium px-3 ft-text hover:text-[#7f1d1d] cursor-pointer">
                  What happens <br /> if you fall <br /> into a black hole?
                </p>
              </div>
            </div>
            <div className="bg-white mx-5 ">
              <div className="ml-5"></div>
              <p className="text-center ft-text text-[13px] mt-12">
                SMART BY THE NUMBER
              </p>
              <div className="max-w-[70px] m-auto pt-5">
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#7f1d1d",
                    height: "1px",
                    marginBottom: "30px",
                  }}
                />
              </div>
              <div>
                <p className="text-5xl study-num  text-center text-[#002147]">
                <CountUp end={89} duration={90} className="countup-font" />% 
                </p>
                <p className=" text-center study-num">of class of 2014</p>
                <p className="text-center text-gray-400 ft-text text-[13px]">
                  bachelor’s recipients were <br /> employed
                </p>
              </div>
              <div className="pt-12">
                <p className="text-5xl study-num  text-center text-[#002147]">
                 <CountUp end={89} duration={90} className="countup-font" />% 
                </p>
                <p className=" text-center study-num">of employed 2014</p>
                <p className="text-center text-gray-400 ft-text text-[13px]">
                  graduates hold a position <br /> related to their degree
                </p>
              </div>
              <div className="pt-12 pb-8 ">
                <p className="text-5xl study-num  text-center text-[#002147]">
                  <CountUp end={ 3042} duration={90} className="countup-font" />% 
                </p>
                <p className=" text-center study-num">students</p>
                <p className="text-center text-gray-400 ft-text text-[13px] pb-8">
                  overall student-athlete <br /> GPA for Spring 2016{" "}
                </p>
              </div>
            </div>

     
          </div>
        </div>
      </div>
      <div className="bg-[#e3e7ea] pt-12 pb-12">
        <div className="study-num max-w-[1400px] m-auto ">
        <h1 className="text-4xl pb-8 px-12 mx-3 pt-12 ">Studying at Smart</h1>
      <div className="study-card">
        
      <section className="container">
        <div className="cards grid px-1">
            <div className="card">
                <div className="img-box">
                    <img className="w-full" src="https://i.ibb.co/TPhKV6B/img10.jpg" alt="" />
                </div>
                <div className="card-content">
                <h1 className="card-heading">Undergraduate Admissions</h1>
                <p className="card-text ">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris</p>
                <h3 className="text-[15px] text-white mx-5 pb-3">Read More</h3>
                <div className="mr-48 px-4  ">
                <div
                  style={{
                    // justifyContent: "center",
                    // alignItems: "center",
                    backgroundColor: "#fff",
                    height: "2px",
                   
                  }}
                />
              </div>
                </div>
            </div>
            <div className="card">
                <div className="img-box">
                    <img className="w-full" src="https://i.ibb.co/ZNY3ynC/img11-1.jpg" alt="" />
                </div>
                <div className="card-content">
                <h1 className="card-heading">Graduation Admissions</h1>
                <p className="card-text ">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris</p>
                <h3 className="text-[15px] text-white mx-5 pb-3">Read More</h3>
                <div className="mr-48 px-4  ">
                <div
                  style={{
                    // justifyContent: "center",
                    // alignItems: "center",
                    backgroundColor: "#fff",
                    height: "2px",
                   
                  }}
                />
              </div>
                </div>
            </div>
            <div className="card">
                <div className="img-box">
                    <img src="https://i.ibb.co/55v4dzd/img12-1.jpg" alt="" />
                </div>
                <div className="card-content">
                <h1 className="card-heading">Continuing Education</h1>
                <p className="card-text ">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris</p>
                <h3 className="text-[15px] text-white mx-5 pb-3">Read More</h3>
                <div className="mr-48 px-4  ">
                <div
                  style={{
                    // justifyContent: "center",
                    // alignItems: "center",
                    backgroundColor: "#fff",
                    height: "2px",
                   
                  }}
                />
              </div>
                </div>
            </div>
            <div className="card">
                <div className="img-box">
                    <img className="w-full" src="https://i.ibb.co/ZNY3ynC/img11-1.jpg" alt="" />
                </div>
                <div className="card-content">
                <h1 className="card-heading">Graduation Admissions</h1>
                <p className="card-text ">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris</p>
                <h3 className="text-[15px] text-white mx-5 pb-3">Read More</h3>
                <div className="mr-48 px-4  ">
                <div
                  style={{
                    // justifyContent: "center",
                    // alignItems: "center",
                    backgroundColor: "#fff",
                    height: "2px",
                   
                  }}
                />
              </div>
                </div>
            </div>
        </div>
      </section>
      </div>
      
      </div>
      
      </div>
      
    </>
  );
};

export default Study;
