import React from "react";
// import IconIon from "../../components/Part 1/Icon/IconIon";
import Button1 from "../../components/Part 1/button/Button1";

function Hero() {
  return (
    <div className="flex ">
      <div className="w-1/2 text-sm font-bold xs:order-2">
        {/* explore */}
        <div className="flex mt-10 text-pink-500">
          <div> Explore the world!</div>
          <div className="ps-1">
            <ion-icon name="headset"></ion-icon>
          </div>
        </div>
        <div className="text-semibold text-6xl mt-9">
          Travel top destination of the world
        </div>
        <div className="font-normal text-gray-500 text-xl mt-9">
          We always make our customer happy by providing as many choices as
          possible
        </div>
        {/* button */}
        <div className="flex mt-9">
          <Button1 as={"Get Started"} />
          <button
            type="button"
            className="py-4 px-9 bg-transparent rounded-full hover:bg-purple-200 ease-in-out duration-300"
          >
            Watch Demo
          </button>
        </div>
      </div>

      {/* kanan */}
      <div className="grow w-4 xs:order-1">
        <img src="public/icon/hero.svg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
