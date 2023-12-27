import React from "react";

function Button1(props) {
  return (
    <div>
      <button
        type="button"
        className="bg-purple-700 text-white py-4 px-9 rounded-full hover:bg-purple-950 hover:rounded-full ease-in-out duration-300"
      >
        {props.as}
      </button>
    </div>
  );
}

export default Button1;
