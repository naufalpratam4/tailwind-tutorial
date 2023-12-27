import React from "react";
import CardComponent from "../../components/card/CardComponent";

function Services() {
  return (
    <>
      <div className="flex mt-20">
        <div className="my-auto">
          <div className="text-pink-500 text-2xl font-bold">Services</div>
          <div className="text-gray-900 font-bold text-4xl">
            Our top value categories for you
          </div>
        </div>

        {/* card  */}
        <div className="flex">
          <CardComponent
            src="public/icon/destination 1.svg"
            title="Best Tour Guide"
            desc="What looked like a small patch of purple grass, above five feet."
          />
          <CardComponent
            src="public/icon/destination 1.svg"
            title="Best Tour Guide"
            desc="What looked like a small patch of purple grass, above five feet."
          />
          <CardComponent
            src="public/icon/destination 1.svg"
            title="Best Tour Guide"
            desc="What looked like a small patch of purple grass, above five feet."
          />
        </div>
      </div>
    </>
  );
}

export default Services;
