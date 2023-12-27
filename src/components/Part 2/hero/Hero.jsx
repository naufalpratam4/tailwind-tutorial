import React from "react";
import Button1 from "../../Part 1/button/Button1";
import HeroImage from "../../../../public/icon/hero.svg";
function Hero() {
  return (
    <div className="md:flex md:mx-auto pt-2 text-center ">
      {/* kanan */}
      <div className="flex md:w-3/4 justify-center order-2">
        <img src={HeroImage} alt="" />
      </div>

      {/* kiri */}
      <div className="md:text-start md:mt-10 md:w-1/2 order-1">
        <div className=" text-pink-500 md:text-start">
          <button className="text-sm py-4 px-9 rounded-full shadow">
            Explore the world!
            <span>
              <ion-icon name="globe"></ion-icon>
            </span>
          </button>
        </div>

        <div className="text-4xl font-bold py-4">
          Travel <span className="text-pink-500">Top Destination</span> of the
          world
        </div>

        <div className="py-6 text-gray-900 text-opacity-50 text-base">
          We always make our customer happy by providing as many choices as
          possible
        </div>

        {/* button */}
        <div>
          <button
            type="button"
            className="px-32 py-6 bg-pink-500  rounded-full mb-1"
          >
            Get Started
          </button>
          <button
            type="button"
            className="px-28 py-6 bg-white border border-zinc-100 rounded-full"
          >
            <span>
              <ion-icon name="play-circle"></ion-icon>
            </span>
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
