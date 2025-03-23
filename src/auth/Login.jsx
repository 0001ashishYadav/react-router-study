import React from "react";

function LoginPage() {
  return (
    <div className="h-[78vh] max-w-7xl md:flex justify-center  items-center mx-auto relative pt-24">
      <div
        style={{
          backgroundImage: "url(./aboutAssets/about-2.jpg)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
        className="h-full w-[100%] md:w-[50%] hidden md:block"
      ></div>

      {/* right container */}

      <div className="h-full w-[50%] hidden md:block  px-[120px] relative">
        <div className="text-4xl font-semibold">
          <span className=" text-gray-500">My</span>
          <span className=" text-red-800">Logo</span>
        </div>

        <div className="flex justify-between items-center text-xs mt-5">
          <button className="h-8 flex items-center gap-2 border-[1px] border-[#5B86E5] px-5 py-4 rounded-md">
            <img className="h-5" src="./logInAssets/google-logo.png" />
            <p>Sign up with Google</p>
          </button>
          <button className="h-8 flex items-center gap-2 border-[1px] border-[#5B86E5] px-5 py-4 rounded-md">
            <img className="h-5" src="./logInAssets/gmail-logo.png" />
            <p>Sign up with Email</p>
          </button>
        </div>

        <p className="text-lg font-semibold text-[#838383] text-center my-8">
          - OR -
        </p>

        <input
          className="text-xs w-[100%] pb-3 bg-transparent border-t-none border-l-none border-r-none border-b-[1px] border-[#8583835c] outline-none"
          type="email"
          placeholder="Email Address"
        />

        <input
          className="text-xs w-[100%] mt-5 pb-3 bg-transparent border-t-none border-l-none border-r-none  border-b-[1px] border-[#8583835c] outline-none"
          type="password"
          placeholder="Password"
        />

        <div className="grid gap-3 px-10 relative pb-7 mt-8">
          <button className="h-8 bg-primary text-xs text-white font-medium  rounded-md">
            Log in
          </button>
          <button className="h-8 text-xs text-[#5B86E5] font-medium border-[1px] border-[#5B86E5] rounded-md">
            Rgister Now
          </button>

          {/* <Link
            className="absolute right-9 bottom-0 text-[10px] text-[#5B86E5]  font-medium"
            href="/auth/forgot_password"
          >
            Forget Password?
          </Link> */}
        </div>

        <p className="text-[10px] absolute bottom-0 right-28">
          MyLogo Terms & conditions
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
