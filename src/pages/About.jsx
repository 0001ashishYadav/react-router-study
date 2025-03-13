import React from "react";

function AboutPage() {
  return (
    <div className="h-[75vh] flex items-center max-w-6xl mx-auto pt-24">
      <div className="h-[100%] w-[50%] flex justify-center items-center relative">
        <img className="h-[80%] rounded-3xl" src="./aboutAssets/about-1.jpeg" />

        <img
          className="absolute h-[40%] top-[290px] right-[-20px]"
          src="./aboutAssets/treePot-2.png"
        />
      </div>

      <div className="h-[100%] w-[50%] flex justify-center items-center">
        <div className="pl-12">
          <p className="text-2xl font-bold mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Quos
            quisquam
          </p>
          <p className="w-[70%] text-sm font-medium text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo optio
            aut aliquid delectus modi voluptas numquam quasi ea suscipit iure
            provident hic, beatae aliquam maiores animi quia eaque repudiandae
            similique.
          </p>

          <p className="w-[70%] text-sm font-medium text-gray-600 mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            commodi cupiditate fugit nemo in dolores earum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
