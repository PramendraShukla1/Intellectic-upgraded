import React from 'react'
import internshipImg from "../../assets/internshipOffer.png"
const Timeline = () => {
  return (
    <div>
        <section>
  <div className=" text-white py-8"  >
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
       
        <p className="text-3xl text-black md:text-4xl font-bold leading-normal md:leading-relaxed mb-2">
          Working Process of Intellectic Internship Programs
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Here’s your guide to the Intellectic Internship Programs process. Go through all the
          steps to know the exact process.
        </p>
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 border-gray-700 absolute h-full border"
              style={{
                right: "50%",
                border: "2px solid black",
                borderRadius: "1%"
              }}
            />
            <div
              className="border-2-2 border-gray-700 absolute h-full border"
              style={{
                left: "50%",
                border: "2px solid black",
                borderRadius: "1%"
              }}
            />
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4 text-right">
               
                <h4 className="mb-3 font-bold text-black text-lg md:text-2xl">
                  Registration
                </h4>
                <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                 Fill Our Registration form and choose your intrested domain for work.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1  w-5/12 px-1 py-4 text-left">
               
                <h4 className="mb-3 font-bold text-black text-lg md:text-2xl">
                Project Selection
                </h4>
                <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                 Select from wide range of projects we have according to your skill levels.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4 text-right">
              
                <h4 className="mb-3 font-bold text-black text-lg md:text-2xl">
                 Internship Offer Letter
                </h4>
                <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                Our support team will contact you through email and send you your offer letter.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1  w-5/12 px-1 py-4">
               
                <h4 className="mb-3 font-bold text-black  text-lg md:text-2xl text-left">
                 Internship Experience letter 
                </h4>
                <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                 After successful complition of your project mail us your cin number, name and git repository on our official email <b>support@intellectic.in</b> and after verifying your Repository we will send you an internship complition letter, Letter of recommendation and Intellectic goodies. 
                </p>
              </div>
            </div>
          </div>
          <img
            className="mx-auto -mt-36 md:-mt-20"
            src={internshipImg}
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Timeline