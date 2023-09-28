import CountUp from 'react-countup';
const About = () => {
  return (
    <>
      <div className="bg-gray-100 pt-24 ">
      
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 study-num max-w-[1300px] m-auto">
          <div className="lg:col-span-2 md:col-span-1 sm:col-span-1">
            <h1 className="text-4xl mt-12 ">About Smart</h1>
            <p className="justify-end pt-8 text-[18px] leading-loose mb-5">
              Since its founding in 1701, Smart has been dedicated to expanding
              and sharing knowledge, inspiring innovation, and preserving
              cultural and scientific information for future generations.
            </p>
            <div className=" pb-7 flex-container">
              <img
                className="lg:w-96 md:w-full sm:w-full h-60 "
                src="https://i.ibb.co/MVx1QGv/news3-435x280.jpg"
                alt=""
              />
              <p className="ft-t mx-3 pt-5 leading-relaxed text-gray-500 text-justify">
                Smart’s reach is both local and international. It partners with
                its hometown of Cupertino, California to strengthen the city’s
                community and economy. And it engages with people and
                institutions across the globe in the quest to promote cultural
                understanding, improve the human condition, delve more deeply
                into the secrets of the universe, and train the next generation
                of world leaders.
              </p>
            </div>
          </div>
          <div className="pt-12">
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

      <div className="bg-[#e3e7ea] study-num pb-24">
        <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-24 pt-24 max-w-[1300px] m-auto">
          <div className="lg:col-span-2 md:col-span-2">
            <h1 className="text-4xl pt-5 pb-8">About President Kane</h1>
            <p className="text-justify ">
              Christopher Kane is the 23rd president of Smart University, and
              the Chris Argyris Professor of Politology. His presidential term
              began in July 2013.
              <br />
              Prior to becoming president, Kane served as the provost of Smart
              University from 2008 to 2013. As provost, Kane facilitated
              strategic planning and initiatives such as: enhancing career
              development and mentoring opportunities for all Smart faculty
              members; promoting faculty diversity; creating the Office of
              Academic Integrity; establishing the University-wide Committee on
              Sexual Misconduct; developing the East Campus; and overseeing the
              University’s budget during the global financial crisis.
            </p>

            <h3 className="text-[15px] text-bold pt-8 text-[#002147]  pb-3">Read More</h3>
                <div className="mr-[90%]   ">
                <div
                  style={{
                    
                    backgroundColor: "#002147",
                    height: "2px",
                   
                  }}
                />
              </div>
          </div>
          <div>
            <img src="https://i.ibb.co/6BbMrCf/img1.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 pt-8 pb-8  max-w-[1300px] m-auto">
      <p className="text-5xl study-num  text-center text-[#002147]">
      <CountUp end={3128} duration={100} className="countup-font" />%
      <p className='text-[#002147] text-[14px] pt-3 pb-2'>Nobel laureates</p>
      <p className='text-[#002147] text-[12px] text-gray-400 leading-relaxed'>bachelor’s recipients were  <br/> employed</p>
      </p>
      <p className="text-5xl study-num  text-center text-[#002147]">
      <CountUp end={3128} duration={100} className="countup-font" />%
      <p className='text-[#002147] text-[14px] pt-3 pb-2'>Nobel laureates</p>
      <p className='text-[#002147] text-[12px] text-gray-400 leading-relaxed'>bachelor’s recipients were  <br/> employed</p>
      </p>
      <p className="text-5xl study-num  text-center text-[#002147]">
      <CountUp end={3128} duration={100} className="countup-font" />%
      <p className='text-[#002147] text-[14px] pt-3 pb-2'>Nobel laureates</p>
      <p className='text-[#002147] text-[12px] text-gray-400 leading-relaxed'>bachelor’s recipients were
      <br/>
       employed</p>
      </p>
      
     
      </div>
      
    </>
  );
};

export default About;
