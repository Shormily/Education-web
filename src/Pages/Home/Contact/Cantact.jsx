// import { useState } from "react";
import "animate.css";
// import {  Toaster, toast } from "react-hot-toast";
// import Swal from 'sweetalert2'
import "./Contact.css";

const Contact = () => {
  
  
  const cards = [
    {
      title:
        "Faculty of Social Sciences and Humanities celebrates students success",
      img: "https://i.ibb.co/cwR1pCL/img13-2.jpg",
      text: "Thousands of teenagers across the US will have school lessons in mindfulness in an experiment designed to see",
    },
  ];
  return (
    <>
      {/* <Toaster/> */}
     

      <form
      //  onSubmit={handleSubmit}
      >
        <div id="contact" className=" max-w-[1240px] m-auto">
          <div className="z">
            {cards?.map((card) => (
              <>
                <div className="max-w-sm lg:mb-1  md:mb-48   m-auto  w-full h-80 lg:max-w-full lg:flex pb-8 md:item-center pt-5">
                  <div
                    className=" flex-none  shadow-2xl shadow-lg-x bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    title="Woman holding a mug"
                  >
                    <img
                      className="shadow-2xl lg:h-full   flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
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

          <div className="lg:col-span-2 md:col-span-2 mx-3  pt-12  animate__animated animate__fadeInRight">
            <div className="flex gap-4">
              <div className="w-full mt-2  ">
                <label
                  className="block text-gray-950 font-medium text-[12px]  mb-2 "
                  placeholder="grid-password"
                  type="text"
                >
                  Subject :
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  name="subject"
                  placeholder=""
                  //   onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-full mt-2  ">
                <label
                  className="block text-gray-950 font-medium text-[12px]  mb-2 "
                  placeholder="grid-password"
                  type="text"
                >
                  Email Address :
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder=""
                  id="recipientEmail"
                  //   onChange={handleInputChange}
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="w-full mt-2 ">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2 ">
                Phone Number :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                name="phone"
                //   onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full mt-2 ">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2">
                Tell us a bit about your project:
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 pb-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                name="message"
                placeholder=""
                //   onChange={handleInputChange}
                required
              />
              <div className="flex mb-8 mt-4  m-auto ">
                <input
                  className="text-white bg-gradient-to-br  from-indigo-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-900 font-semibold rounded-sm text-sm px-5 py-2.5 text-center mb-2"
                  type="submit"
                  name="submit"
                  style={{
                    paddingRight: "55px",
                    paddingLeft: "55px",
                    backgroundColor: "#106AC3",
                    color: "#fff",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
