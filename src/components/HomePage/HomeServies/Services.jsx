import React from "react";
import personalized from "../../../assets/personalized.png";
import webDesign from "../../../assets/web_design.png";
import resume from "../../../assets/resume.png";
import seo from "../../../assets/seo.png";
import ui from "../../../assets/ui.png";

const Services = () => {
  
  return (
    <div>
      <div className="flex justify-center items-center place-content-center lg:mt-20 mt-10">
        <h1 className="text-2xl lg:mt-0 lg:text-6xl text-gray-800 lg:font-semibold font-bold mx-auto md:text-5xl ">
          Comprehensive Business Solutions
        </h1>
      </div>

      <section>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10" />
        <div className=" max-w-screen mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8 xl:flex">
          <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
            <div className="relative flex flex-col justify-center">
              <img src={personalized} className="rounded-lg" alt="" />
            </div>
          </div>
          <div className="space-y-5 max-w-2xl flex flex-col justify-center  mx-auto text-center xl:text-left">
            <h1 className="text-4xl mt-10 lg:mt-0 lg:text-6xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              Personalized Websites
            </h1>
            <p className="max-w-xl lg:text-xl mx-auto xl:mx-0">
              Your digital story, uniquely told. Our team specializes in
              tailoring websites to match your individuality. From design to
              functionality, we create a digital space that reflects you.
            </p>
          </div>
        </div>
      </section>

      <section>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 " />

        <div className="max-w-screen mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8 xl:flex">
          <div className="space-y-5 max-w-2xl flex flex-col justify-center  mx-auto text-center xl:text-left">
            <h1 className="text-4xl lg:text-6xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Web Development and Design
            </h1>
            <p className="max-w-xl lg:text-xl mx-auto xl:mx-0">
            Crafting captivating websites that blend creativity and technical excellence. From stunning visuals to flawless functionality, we design online platforms that resonate with your brand. Let us transform your vision into a remarkable digital reality.
            </p>
          </div>
          <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
            <div className="relative">
              <img src={webDesign} className="rounded-lg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10" />
        <div className=" max-w-screen mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8 xl:flex">
          <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
            <div className="relative flex flex-col justify-center">
              <img src={resume} className="rounded-lg" alt="" />
            </div>
          </div>
          <div className="space-y-5 max-w-2xl flex flex-col justify-center  mx-auto text-center xl:text-left">
            <h1 className="text-4xl mt-10 lg:mt-0 lg:text-6xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Resume Building
            </h1>
            <p className="max-w-xl lg:text-xl mx-auto xl:mx-0">
            Crafting Impactful Resumes: Our expert team specializes in creating tailored resumes that showcase your skills, experience, and achievements. With meticulous attention to detail, we design resumes that stand out to potential employers.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 " />

        <div className="max-w-screen mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8 xl:flex">
          <div className="space-y-5 max-w-2xl flex flex-col justify-center  mx-auto text-center xl:text-left">
            <h1 className="text-4xl lg:text-6xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            SEO Optimization
            </h1>
            <p className="max-w-xl lg:text-xl mx-auto xl:mx-0">
            Boost Online Visibility: Our SEO optimization maximizes your website reach. Through strategic techniques, we drive organic traffic and enhance search engine rankings. Elevate your digital presence with our expert SEO services.
            </p>
          </div>
          <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
            <div className="relative">
              <img src={seo} className="rounded-lg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10" />
        <div className=" max-w-screen mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8 xl:flex">
          <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
            <div className="relative flex flex-col justify-center">
              <img src={ui} className="rounded-lg" alt="" />
            </div>
          </div>
          <div className="space-y-5 max-w-2xl flex flex-col justify-center  mx-auto text-center xl:text-left">
            <h1 className="text-4xl mt-10 lg:mt-0 lg:text-6xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            UI/UX Design
            </h1>
            <p className="max-w-xl lg:text-xl mx-auto xl:mx-0">
            Our UI/UX design team creates intuitive interfaces that engage and delight users. With a focus on user-centric design principles, we ensure your digital products are not only visually appealing but also easy to navigate. From wireframes to final prototypes.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Services;
