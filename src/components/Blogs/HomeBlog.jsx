import React from 'react'
import blogCover from "../../assets/blogCover.png"
import blog1 from "../../assets/Blog1.png"
import { Link } from 'react-router-dom'

const HomeBlog = () => {
  return (
    <>
    <div
      className="w-full m-0 p-0 lg:h-[600px] bg-bottom h-[350px]"
    >
     <img src={blogCover} className='lg:h-[600px] h-[200px] w-full' alt="" />
    </div>
    {/*Container*/}
    <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div className="mx-0 sm:mx-6">
        {/*Nav*/}
     
        <div className=" w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
          {/*Lead Card*/}
          <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
            <Link
             to={"/mern-stack-development"}
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <div className="w-auto h-auto md:w-2/3 rounded-t">
                <img
                  src={blog1}
                  className="h-full w-full shadow"
                />
              </div>
              <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                   
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    👋 Essential insights into MERN stack development, covering all key aspects.
                  </div>
                  <div className='mt-5'>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5 ">
                  MERN stack, comprising MongoDB, Express.js, React.js, and Node.js, is a powerful choice for web development. It delivers robust, dynamic web applications by integrating these technologies efficiently.
                  </p>
                  </div>
                 
                </div>
              
              </div>
            </Link>
          </div>
          {/*/Lead Card*/}
          {/*Posts Container*/}
          <div className="flex flex-wrap justify-between pt-12 -mx-6">
            {/*1/3 col */}
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/225/800x600"
                    className="h-64 w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <img
                    className="w-8 h-8 rounded-full mr-4 avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
            {/*1/3 col */}
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/3106804/800x600"
                    className="h-64 w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum
                    dolor sit amet, consectetur adipiscing elit. Aliquam at ip
                    Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <img
                    className="w-8 h-8 rounded-full mr-4 avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
            {/*1/3 col */}
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/539527/800x600"
                    className="h-64 w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div className="w-full  font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <img
                    className="w-8 h-8 rounded-full mr-4 avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
            {/*1/2 col */}
            <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/3657445/800x600"
                    className="h-full w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <img
                    className="w-8 h-8 rounded-full mr-4 avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
            {/*1/2 col */}
            <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/764827/800x600"
                    className="h-full w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <img
                    className="w-8 h-8 rounded-full mr-4 avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
            {/*2/3 col */}
            <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/325867/800x600"
                    className="h-full w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <img
                    className="w-8 h-8 rounded-full mr-4 avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
            {/*1/3 col */}
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/1118905/800x600"
                    className="h-full w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <img
                    className="w-8 h-8 rounded-full mr-4 avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
          </div>
          {/*/ Post Content*/}
        </div>
        
       
      </div>
    </div>
    
  </>
  

  )
}

export default HomeBlog