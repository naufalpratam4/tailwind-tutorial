import React from "react";
import NavBar from "../../components/Part 2/navbar/NavBar";
import Hero from "../../components/Part 2/hero/Hero";

function LandingPageMobile() {
  return (
    <>
      {" "}
      <div className="md:mx-auto md:px-32 md:py-4 p-4">
        <NavBar />
        <Hero />
      </div>
    </>
  );
}

export default LandingPageMobile;
