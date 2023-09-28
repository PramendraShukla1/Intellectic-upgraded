import React from 'react'
import blogOne from "../../../assets/Blog1.png"

const BlogOne = () => {
  return (
    <>
  <div
    id="header"
    className="bg-white fixed w-full z-10 top-0 hidden animated"
    style={{ opacity: ".95" }}
  >
    <div className="bg-white">
      <div className="flex flex-wrap items-center content-center">
        <div className="flex w-1/2 justify-start text-white font-extrabold">
      
        </div>
        <div className="flex w-1/2 justify-end content-center">
         
        
        
        </div>
      </div>
    </div>
    {/*Progress bar*/}

  </div>
  {/*Title*/}
  <div className="text-center pt-16 md:pt-32">
    <p className="text-sm md:text-base text-gray-600 font-bold">
      24 SEPTEMBER 2023
    </p>
    <h1 className="font-bold break-normal text-3xl md:text-5xl">
    Essential insights into MERN stack development, covering all key aspects.
    </h1>
  </div>
  {/*image*/}
  <div
    className="container w-[400px] lg:w-full max-w-screen-xl mx-auto bg-white bg-contain bg-no-repeat mt-14 rounded"
    style={{
      backgroundImage: `url(${blogOne})`,
      height: "75vh",
      objectFit:"contain",
    
    }}
  />
  {/*Container*/}
  <div className="container max-w-5xl mx-auto lg:-mt-32 -mt-96 ">
    <div className="mx-0 sm:mx-6">
      <div
        className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
        style={{ fontFamily: "Georgia,serif" }}
      >
        {/*Post Content*/}
        {/*Lead Para*/}
        <p className="text-2xl md:text-3xl mb-5">
          👋 Welcome fellow{" "}
          <a
            className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
            href="https://www.tailwindcss.com"
          >
            Tailwind CSS
          </a>{" "}
          and{" "}
          <a
            className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
            href="https://www.ghost.org"
          >
            Ghost
          </a>{" "}
          fan. This starter template is an attempt to replicate the default
          Ghost theme{" "}
          <a
            className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
            href="https://demo.ghost.io/welcome"
          >
            "Casper"
          </a>{" "}
          using Tailwind CSS and vanilla Javascript.
        </p>
        <p className="py-6">
          The basic blog page layout is available and all using the default
          Tailwind CSS classes (although there are a few hardcoded style tags).
          If you are going to use this in your project, you will want to convert
          the classes into components.
        </p>
        <p className="py-6">
          Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
          purus, in mattis tortor sollicitudin pretium. Phasellus at diam
          posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
          pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
          condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
          turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
          rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
          molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
          molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
          risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla
          eget sem dictum elementum.
        </p>
        <ol>
          <li className="py-3">
            Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero
            lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper
            venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo
            sit amet placerat in, interdum a ipsum. Morbi sit amet tellus
            scelerisque tortor semper posuere.
          </li>
          <li className="py-3">
            Morbi varius posuere blandit. Praesent gravida bibendum neque eget
            commodo. Duis auctor ornare mauris, eu accumsan odio viverra in.
            Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut
            odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus
            hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec
            felis.
          </li>
          <li className="py-3">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
            tristique in risus ac, tristique rutrum velit. Mauris accumsan
            tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam
            ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit,
            elementum odio et, consequat tellus.
          </li>
        </ol>
        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
          Example of blockquote - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
          ligula.
        </blockquote>
        <p className="py-6">Example code block:</p>
        <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
          {"\t"}
          {"\t"}
          {"\t"}
          {"\t"}
          {"\t"}
          <code className="break-words whitespace-pre-wrap">
            {"\n"}&lt;header class="site-header outer"&gt;{"\n"}
            {"  "}&lt;div class="inner"&gt;{"\n"}
            {"    "}
            {"{"}
            {"{"}&gt; "site-nav"{"}"}
            {"}"}
            {"\n"}
            {"  "}&lt;/div&gt;{"\n"}&lt;/header&gt;{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
          </code>
          {"\n"}
          {"\t"}
          {"\t"}
          {"\t"}
          {"\t"}
        </pre>
        {/*/ Post Content*/}
      </div>
     
      
     
    </div>
  </div>
 
  <div>
    <div className="container w-full max-w-6xl mx-auto px-2 py-8">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/3 px-2 pb-12">
          <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
            <a href="#" className="no-underline hover:no-underline">
              <img
                src="https://source.unsplash.com/_AjqGGafofE/400x200"
                className="h-48 w-full rounded-t shadow-lg"
              />
              <div className="p-6 h-auto md:h-48">
                <p className="text-gray-600 text-xs md:text-sm">
                  GETTING STARTED
                </p>
                <div className="font-bold text-xl text-gray-900">
                  Aperture Science
                </div>
                <p className="text-gray-800 font-serif text-base mb-5">
                  I’ll be honest, we’re throwing science at the wall here to see
                  what sticks. No idea what it’ll do. Probably nothing. Best
                  case scenario you might get some super powers. Worst case,
                  some tumors, which we’ll cut out.
                </p>
              </div>
              <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                <img
                  className="w-8 h-8 rounded-full mr-4"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p className="text-gray-600 text-xs md:text-sm">2 MIN READ</p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 pb-12">
          <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
            <a href="#" className="no-underline hover:no-underline">
              <img
                src="https://source.unsplash.com/_AjqGGafofE/400x200"
                className="h-48 w-full rounded-t shadow"
              />
              <div className="p-6 h-auto md:h-48">
                <p className="text-gray-600 text-xs md:text-sm">UNDERWATER</p>
                <div className="font-bold text-xl text-gray-900">
                  Biolumini algae diatomeae ecology.
                </div>
                <p className="text-gray-800 font-serif text-base mb-5">
                  Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo
                  posuere et sit amet ligula.
                </p>
              </div>
              <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                <img
                  className="w-8 h-8 rounded-full mr-4"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p className="text-gray-600 text-xs md:text-sm">4 MIN READ</p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 pb-12">
          <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
            <a href="#" className="no-underline hover:no-underline">
              <img
                src="https://source.unsplash.com/DEa8_vxKlEo/400x200"
                className="h-48 w-full rounded-t shadow"
              />
              <div className="p-6 h-auto md:h-48">
                <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                <div className="font-bold text-xl text-gray-900">
                  What is life but a teardrop in the eye of infinity?
                </div>
                <p className="text-gray-800 font-serif text-base mb-5">
                  Mollis pretium integer eros et dui orci, lectus nec elit
                  sagittis neque. Dignissim ac nullam semper aliquet volutpat,
                  ut scelerisque.
                </p>
              </div>
              <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                <img
                  className="w-8 h-8 rounded-full mr-4"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p className="text-gray-600 text-xs md:text-sm">7 MIN READ</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</>

  )
}

export default BlogOne