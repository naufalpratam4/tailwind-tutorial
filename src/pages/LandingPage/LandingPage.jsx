import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Hero from "./Hero";
import Sponsor from "./Sponsor";
import Services from "./Services";
import Destination from "./Destination";
import TargetPoint from "./TargetPoint";

function LandingPage() {
  return (
    <div className="container mx-auto px-32 py-4">
      <NavBar />
      <Hero />
      <Sponsor />
      <Services />
      <Destination />
      <TargetPoint />
    </div>
  );
}

export default LandingPage;
