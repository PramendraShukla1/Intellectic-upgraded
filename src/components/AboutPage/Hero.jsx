import React,{ useState} from 'react'
import aboutVideo from "../../assets/videos/about.mp4"
import aboutImg from "../../assets/aboutimg1.png"
import founder from "../../assets/founder.png"
import laptopVideo from "../../assets/videos/aboutLaptop.mp4"
import aboutMission from "../../assets/aboutMission.png"

const Hero = () => {

    const [isVideoPoppedUp, setVideoPopUp] = useState(false)


  return (
    <>
    <section >
    <div className=" max-w-screen mx-auto fade lg:h-screen px-4 py-10 gap-12 text-gray-600 md:px-8 xl:flex fade-in-image" >
        <div className="space-y-5 max-w-2xl  flex flex-col justify-center  mx-auto text-center xl:text-left">
           
            <h1 className="text-4xl lg:text-6xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Guided by Passion, Driven by Innovation
            </h1>
            <p className="max-w-xl lg:text-xl mx-auto xl:mx-0">
            Our journey at Intellectic began with a vision to create meaningful impact. With unwavering dedication, we've crafted a legacy of excellence, embracing challenges as opportunities and fostering a culture of collaboration.
            </p>
         
        </div>
        <div className="flex-1 max-w-xl lg:flex lg:justify-center lg:flex-col mx-auto mt-14 xl:mt-0">
            <div className="relative">
                <img src={aboutImg}className="rounded-lg" alt="" />
                <button className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white"
                    onClick={() => setVideoPopUp(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 m-auto">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    {
        isVideoPoppedUp ? (
            <div className="fixed inset-0 w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
                <div className="px-4 relative">
                    <button
                        className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
                        onClick={() => setVideoPopUp(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                    <video className="rounded-lg w-full max-w-2xl" controls autoPlay={true}>
                        <source src={aboutVideo} />
                    </video>
                </div>
            </div>
        ) : ""
    }
    </section>
<section >
<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"/>
<div className=" max-w-screen mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8 xl:flex">
<div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
            <div className="relative flex flex-col justify-center">
                <img src={founder}className="rounded-lg" alt="" />
                <h1 className="text-3xl hidden mb-10 lg:mb-0 lg:flex lg:justify-center mt-3 lg:text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
           Pramendra Shukla
            </h1>
            </div>
        </div>
        <div className="space-y-5 max-w-2xl flex flex-col justify-center  mx-auto text-center xl:text-left">
           
            <h1 className="text-4xl mt-10 lg:mt-0 lg:text-6xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Meet Our Founder
            </h1>
            <p className="max-w-xl lg:text-xl mx-auto xl:mx-0">
            I'm <span className='font-semibold lg:font-normal'>Pramendra Shukla</span>, a fourth-year B.Tech student at Noida Institute of Engineering and Technology. With 1.8+ years of full-stack development experience and as a Udemy instructor, I bridge theory and practice. I've interned at TCS ion, Technocolabs, and Twi Learn, gaining insights into leading technologies. My drive for tech and quest for excellence fuel my journey. Eager to stay at tech's cutting edge, I'm ready to contribute meaningfully to the industry. Let's connect and innovate together!
            </p>
         
        </div>
       
    </div>
    </section>
    <section >
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 "/>
   
    <div className="max-w-screen mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl flex flex-col justify-center  mx-auto text-center xl:text-left">
           
            <h1 className="text-4xl lg:text-6xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Innovate, Empower, Transform: Our Mission
            </h1>
            <p className="max-w-xl lg:text-xl mx-auto xl:mx-0">
            At Intellectic, our mission is to empower individuals and organizations with innovative technology solutions that catalyze growth, foster creativity, and enhance efficiency. We are dedicated to pushing the boundaries of what's possible, consistently striving for excellence, and delivering exceptional value to our clients. By fostering a culture of continuous learning, collaboration, and adaptability, we aim to make a lasting impact on industries and communities worldwide. Our unwavering commitment to innovation and customer satisfaction drives us to create a future where technology transforms lives for the better.
            </p>
         
        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
            <div className="relative">
            <video className="rounded-lg w-full max-w-2xl" loop muted autoPlay={true}>
                        <source src={laptopVideo} />
                    </video>
             
            </div>
        </div>

        
    </div>
    </section>
    <section >
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"/>
<div className="max-w-screen mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8 xl:flex">
<div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
            <div className="relative flex flex-col justify-center">
                <img src={aboutMission}className="rounded-lg" alt="" />
               
            </div>
        </div>
        <div className="space-y-5 max-w-2xl flex flex-col justify-center  mx-auto text-center xl:text-left">
           
            <h1 className="text-4xl mt-10 lg:mt-0 lg:text-6xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            New Horizons Unveiled: Our Innovative Pursuits
            </h1>
            <p className="max-w-xl lg:text-xl mx-auto xl:mx-0">
            Based in Greater Noida, Uttar Pradesh, India, Intellectic is a prominent software development company specializing in innovative software solutions for diverse industries. Our primary focus is empowering small enterprises through cutting-edge website development to boost their online presence and spur growth. In addition to software expertise, we offer personalized resume crafting and engaging content creation. Our team excels in designing authentic brand-representative websites and user-friendly cross-platform applications. As an MSME-registered entity, we reaffirm our dedication to excellence, delivering holistic solutions across sectors.
            </p>
         
        </div>
       
    </div>
</section>
</>
  )
}

export default Hero