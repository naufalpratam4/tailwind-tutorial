import React from "react";

function TargetPoint() {
  return (
    <div className="flex">
      <div className="w-3/5">
        <img src="public/icon/targetPoint.png" alt="" />
      </div>

      <div className="w-2/5 mt-8">
        <div className="text-pink-500 font-semibold text-xl">TARGER POINT</div>
        <div className="text-4xl font-bold text-gray-900 my-6   ">
          We helping you find your dream location
        </div>
        <div className="text-gray-900 text-opacity-50">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </div>

        {/* grid */}
        <div class="grid grid-cols-2 gap-2 ">
          <div className="border p-8 rounded-3xl border-gray-900 border-opacity-10 text-center">
            <div className="text-orange-500 font-bold text-2xl">500+</div>
            <div>Holiday Package</div>
          </div>
          <div className="border p-8 rounded-3xl border-gray-900 border-opacity-10 text-center">
            <div className="text-orange-500 font-bold text-2xl">500+</div>
            <div>Holiday Package</div>
          </div>
          <div className="border p-8 rounded-3xl border-gray-900 border-opacity-10 text-center">
            <div className="text-orange-500 font-bold text-2xl">500+</div>
            <div>Holiday Package</div>
          </div>
          <div className="border p-8 rounded-3xl border-gray-900 border-opacity-10 text-center">
            <div className="text-orange-500 font-bold text-2xl">500+</div>
            <div>Holiday Package</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TargetPoint;
