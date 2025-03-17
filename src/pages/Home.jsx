import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function HomePage() {
  return (
    <>
      <div className="h-[50vh] flex items-center max-w-6xl mx-auto pt-24">
        <div className="h-[100%] w-[50%]">
          <img className="h-[100%] rounded-3xl" src="./homeAssets/home1.jpg" />
        </div>

        <div className="h-[100%] w-[50%] flex justify-center items-center">
          <div>
            <p className="text-5xl font-bold ">Lorem ipsum </p>
            <p className="w-[70%] text-lg font-medium text-gray-600 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              optio aut aliquid delectus modi voluptas numquam quasi ea suscipit
              iure provident hic, beatae aliquam maiores animi quia eaque
              repudiandae similique.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[50vh] flex items-center max-w-6xl mx-auto mt-20">
        <div className="h-[100%] w-[50%] flex justify-center items-center">
          <div>
            <p className="text-5xl font-bold ">Lorem ipsum </p>
            <p className="w-[70%] text-lg font-medium text-gray-600 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              optio aut aliquid delectus modi voluptas numquam quasi ea suscipit
              iure provident hic, beatae aliquam maiores animi quia eaque
              repudiandae similique.
            </p>
          </div>
        </div>

        <div className="h-[100%] w-[50%]">
          <img className="h-[100%] rounded-3xl" src="./homeAssets/home5.jpg" />
        </div>
      </div>

      <div className="h-[50vh] flex items-center max-w-6xl mx-auto mt-20">
        <div className="h-[100%] w-[50%]">
          <img className="h-[100%] rounded-3xl" src="./homeAssets/home1.jpg" />
        </div>

        <div className="h-[100%] w-[50%] flex justify-center items-center">
          <div>
            <p className="text-5xl font-bold ">Download Now</p>
            <p className="text-3xl font-bold">Lorem Ipsum</p>
            <button className="flex justify-center items-center gap-1 px-5 py-2 rounded-md text-white bg-red-900">
              <IoLogoGooglePlaystore />
              <span>Download Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
