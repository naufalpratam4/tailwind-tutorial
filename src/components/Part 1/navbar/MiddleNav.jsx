import React from "react";

function MiddleNav() {
  return (
    <div className="py-4 justify-center">
      <ul className=" ms-32">
        <li>
          <a href="#" className="px-4 font-bold text-purple-700">
            Home
          </a>
          <a href="#" className="px-4 opacity-50">
            Discover
          </a>
          <a href="#" className="px-4 opacity-50">
            Special Deals
          </a>
          <a href="#" className="px-4 opacity-50">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MiddleNav;
