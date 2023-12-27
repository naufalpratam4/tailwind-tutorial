import React from "react";
import Button1 from "../button/Button1";

function ListNav() {
  return (
    <div className="flex">
      <button
        type="button"
        className="py-4 px-9 hover:bg-purple-700 hover:text-white hover:rounded-full ease-in-out duration-300"
      >
        Login
      </button>
      <Button1 as={"Sign Up"} />
    </div>
  );
}

export default ListNav;
