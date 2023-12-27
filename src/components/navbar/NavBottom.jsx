import React from "react";
import IconIon from "../Icon/IconIon";
import Alpine from "alpinejs";
function NavBottom() {
  return (
    <div>
      <div
        x-data="{ open: false }"
        className="fixed bottom-0 right-0 left-0 bg-white p-4 "
      >
        <ul className="flex justify-between">
          <li>
            <a
              href=""
              className="flex justify-center flex-col items-center gap-1 text-emerald-950"
            >
              <IconIon as={"home-outline"} className="opacity-50" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex justify-center flex-col items-center gap-1"
            >
              <IconIon as={"analytics-outline"} />
              <span className="opacity-50">Discover</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex justify-center flex-col items-center gap-1"
            >
              <IconIon as={"cafe-outline"} />
              <span className="opacity-50">Spesial</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex justify-center flex-col items-center gap-1"
            >
              <IconIon as={"id-card-outline"} />
              <span className="opacity-50">Contact</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex justify-center flex-col items-center gap-1"
            >
              <IconIon as={"person-outline"} />
              <span className="opacity-50">More</span>
            </a>
          </li>
        </ul>
        <div className="absolute bg-red bottom-28 left-1/2 -translate-x-1/2 flex gap-4 w-3/4">
          <button className="grow bg-white px-8 py-4 text-gray-700 text-sm rounded-full">
            Login
          </button>
          <button className="grow bg-purple-700 px-8 py-4 text-white rounded-full text-sm ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBottom;
