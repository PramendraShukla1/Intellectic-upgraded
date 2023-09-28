import React from 'react'
import internships from "../../assets/videos/internship-hero.mp4"

const Hero = () => {
  return (
    <div >
          <div className="flex justify-center items-center place-content-center lg:mt-20 mt-10">
        <h1 className="text-2xl lg:mt-0 lg:text-6xl text-gray-800 lg:font-semibold font-bold mx-auto md:text-5xl ">
         Intellectic Internship Programs
        </h1>
      </div>

      <section>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10" />
        <div className=" max-w-screen mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8 xl:flex">
          <div className="space-y-5 max-w-2xl flex flex-col justify-center  mx-auto text-center xl:text-left">
            <h1 className="text-4xl mt-10 lg:mt-0 lg:text-6xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Unveil Your Potential: The Promised Rewards Await!
            </h1>
            <p className="max-w-xl lg:text-xl mx-auto xl:mx-0">
            Explore Boundless Opportunities: Your Journey to Excellence Begins Here. Dive into Our Premium Courses and Exclusive Internships, Where Real-World Projects Await. Achieve Industry-Ready Skills and Earn Prestigious Certificates to Open Doors to Your Future Success.
            </p>
          </div>
          <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
            <div className="relative">
            <video className="rounded-lg w-full max-w-2xl" loop muted autoPlay={true}>
                        <source src={internships} />
                    </video>
             
            </div>
        </div>
        </div>
        
      </section>
    </div>
  )
}

export default Hero   