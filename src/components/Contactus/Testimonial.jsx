import React from 'react'

const Testimonial = () => {
  return (
    <div className="pb-5 mt-16 lg:mt-0">
  <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
    <div className="text-xl lg:mt-20 font-bold tracking-wider text-indigo-600 uppercase">
      Testimonials Section
    </div>
    <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
      Here's what our customers said
    </h2>
  </div>
  <div className="container p-6 mx-auto mb-10 xl:px-0">
    <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
      <div className="lg:col-span-2 xl:col-auto">
        <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal">
          Outstanding work! {" "}
            <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
            Intellectic
            </mark>
            {" "} exceeded our expectations with their software development skills. Timely delivery and seamless communication made the entire process a breeze. Highly recommended!
          </p>
          <div className="flex items-center mt-8 space-x-3">
           
           
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal">
          Impressed by the expertise at {" "}
            <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
              Intellectic
            </mark>{" "}
            They turned our concept into a flawless software solution. Professionalism and precision define their work. Five stars!"
          </p>
          <div className="flex items-center mt-8 space-x-3">
           
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal">
          Incredible team! {" "}
            <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
             Intellectic
            </mark>{" "}
            implified our complex project, delivering high-quality software on schedule. Their dedication and technical prowess shine. We'll be back for more!
          </p>
          <div className="flex items-center mt-8 space-x-3">
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Testimonial