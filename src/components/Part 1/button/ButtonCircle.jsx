import React from "react";

function ButtonCircle(props) {
  return (
    <div className="px-5 py-4 bg-purple-700 text-white rounded-full">
      {props.button}
    </div>
  );
}

export default ButtonCircle;
