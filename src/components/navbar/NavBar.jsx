import React from "react";
import Button1 from "../button/Button1";
import LogoNav from "../logo/LogoNav";
import ToggleNav from "../toggle/ToggleNav";

import NavBottom from "./NavBottom";
import ListNav from "./ListNav";
import MiddleNav from "./MiddleNav";

function NavBar() {
  return (
    <div className="">
      <div className="flex justify-between">
        <LogoNav />
        <MiddleNav />
        <ListNav />
      </div>
    </div>
  );
}

export default NavBar;
