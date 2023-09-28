import React from "react";
import card1 from "../../assets/videos/card1.png";
import card2 from "../../assets/videos/card2.png";
import card3 from "../../assets/videos/card3.png";
import card4 from "../../assets/videos/card4.png";
import card5 from "../../assets/videos/card5.png";
import card6 from "../../assets/videos/card6.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const details = [
  {
    video: card1,
    title: "Dedicated Client Support",
    desc: " Always Here for You: Experience round-the-clock support that ensures your needs are met anytime, anywhere.",
  },
  {
    video: card2,
    title: "Ensured Safety and Unwavering Stability",
    desc: "Our commitment to a secure and solid foundation guarantees your peace of mind.",
  },
  {
    video: card3,
    title: "Extremely fast",
    desc: "Experience the power of extreme speed that accelerates your journey with us.",
  },
  {
    video: card4,
    title: "Customized Software Solutions",
    desc: "We emphasize our commitment to deliver you tailor-made software solutions that address your unique requirements.",
  },
  {
    video: card5,
    title: "Quality Assurance and Testing",
    desc: "All softwares go through our rigorous quality assurance processes and comprehensive testing strategies.",
  },
  {
    video: card6,
    title: "Cutting-Edge Technology Stack",
    desc: "We emphasize our utilization of the latest technologies, frameworks, and tools to ensure modern and high-performing software solutions.",
  },
];

const Features = () => {
  return (
    <>
      <div>
        <h1 class="mb-4 flex justify-center p-5 text-xl mt-5 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Here's Why We Are&nbsp;
          <span className="text-light-blue-900 ">Exceptional</span>{" "}
        </h1>

        <div className="flex justify-center flex-wrap gap-10">
      {   details.map(({video,title,desc})=>(
        <Card className="w-full max-w-[26rem] shadow-lg hover:bg-gray-200">
            <CardHeader floated={false} color="blue-gray">
            <img src={video} className="object-cover" alt="" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-semibold text-2xl "
                >
                 {title}
                </Typography>
              </div>
              <Typography className="text-gray-800 font-sans text-lg">
               {desc}
              </Typography>
              <div className="group mt-8 inline-flex flex-wrap items-center gap-3"></div>
            </CardBody>
          </Card>
      )) }
        </div>
      </div>
    </>
  );
};

export default Features;
