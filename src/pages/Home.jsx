import React from "react";
import Hero from "../components/HomePage/Hero";
import Features from "../components/HomePage/Features";
import Services from "../components/HomePage/HomeServies/Services";
import Contactus from "../components/HomePage/Contactus";
import Newsletter from "../components/HomePage/Newsletter";
import Banner from "../components/college/Banner";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Banner />
      <Features />
      <Newsletter />
      <Contactus />
    </>
  );
};

export default Home;
