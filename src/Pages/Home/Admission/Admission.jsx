import "./Admission.css";
import Study from "../Study/Study"
const Admission = () => {
  const items = [
    {
      id: "1",
      name: "Mid September",
      pra: "We encourage you to submit your application as soon as possible after September 15, 2016 and well before the February 1, 2017 deadline.",
    },
    {
      id: "2",
      name: "February 1, 2016 ",
      pra: "Application Deadline. We encourage you to submit your application as soon as possible after September 15 and well before the February 1 deadline.",
    },
    {
      id: "3",
      name: "Checking your application",
      pra: "When we receive your application, it takes several weeks to process materials and submit to the Admissions Committee.",
    },
    {
      id: "4",
      name: "Application Review",
      pra: "The Admissions Committee reviews applications roughly in order of completion. Each application is considered in its entirety.",
    },
    {
      id: "5",
      name: "Interviews",
      pra: "During the application review process you may be invited to interview. These interviews will happen throughout the admissions cycle.",
    },
    {
      id: "6",
      name: "Decisions",
      pra: "We will make every effort to deliver a decision on your application as soon as possible. An applicant who is offered admission will be notified immediately.",
    },
  ];

  const cards = [
    {
      title: "Undergraduate Admissions",
      img: "https://i.ibb.co/TPhKV6B/img10.jpg",
      text: "Christopher Kane is the 23rd president of Smart University, and the Chris Argyris",
    },
    {
      title: "Undergraduate Admissions",
      img: "https://i.ibb.co/cwR1pCL/img13-2.jpg",
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
     <div className="bg-gray-100">
     <div className="max-w-[1280px] mx-auto   px-4 banner-text  ">
          <div>
            <p className="text-center text-4xl pt-16">Admissions</p>
            <p className="text-center pt-6 pb-6 text-[20px]">
              We consider each applicant to Smart University as a whole person,
              and put enormous care into evaluating
              <br /> every application.
            </p>
          </div>

          <div className="admission-grid gap-0 pb-16 ">
            <div className="">
              <img
                className=""
                src="https://i.ibb.co/nknnQT6/img9.jpg"
                alt=""
              />
            </div>
            <div className="pt-4">
              <p className="text-gray-500   text-justify text-base">
                Each applicant to Smart University is considered with great
                care. We hope you will explore the information in this section
                to understand what we look for in our admissions process. Early
                Action applicants apply by the November 1, 2016 deadline and
                hear from us by mid-December. If you apply to Smart University
                under our Early Action program, you may also apply at the same
                time to any public college/university or to foreign universities
                but you are restricted from applying to other private
                universities’ Early Action and Early Decision programs. You may
                apply under our Regular Decision program until January 1, 2016.
              </p>
              <button className="apply-btn">
                View details and apply
              </button>
              
              {/* <div className=" pr-96 mr-12 ">
                <div
                  style={{
                    backgroundColor: "#991b1b",
                    height: "3px",
                  }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="video">
        <div className="w-full h-[600px] overflow-y-hidden ">
          <video
            src="https://s41256.pcdn.co/wp-content/uploads/2023/05/OurCrowd_VideoModule_V3_3.mp4"
            autoPlay
            // height={100}
            width="100%"
            loop
            muted
            className="video-container"
          ></video>
          <div className="mb-64 p-5  cont-pra text-white text-center texteras ">
            <h1 className=" text-2xl ">1M+ contributors in 170+</h1>
            <p>
              provide solutions for real world scenarios, and efficiently
              measure and monitor the performance of your model to
            </p>
          </div>
        </div>
      </div>

      <div className="banner-text pb-6 max-w-[1400px] m-auto">
        <p className="text-center text-3xl pt-12">The Application Timeline</p>
        <div className="grids gap-24 pb-16">
          {items?.map((item) => (
            <>
              <div>
                <p className="flex pt-16">
                  <span className="circel">{item?.id}</span>
                  <span className="pt-2 text-[20px] pb-3">
                    {item?.name}
                  </span>{" "}
                </p>
                <p className="ml-12 pl-2 text-[14px]  ft-text text-gray-500 text-justify leading-losse">
                  {item?.pra}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>
        <Study/>
      </div>
    </>
  );
};

export default Admission;
