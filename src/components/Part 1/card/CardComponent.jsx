import React from "react";

function CardComponent(props) {
  return (
    <div className="flex-auto border-2 mx-1 w-80 rounded-lg text-center  md:w-full">
      <div>
        <img src={props.src} alt="" className="mx-auto my-16" />
      </div>
      <div className="font-bold text-2xl">{props.title}</div>
      <div className="opacity-50 text-lg pt-8 pb-16">{props.desc}</div>
    </div>
  );
}

export default CardComponent;
