import React from "react";

function NavBar() {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <img src="public/icon/Frame 1.png" alt="" />
        </div>
        <div className="mt-2 items-center">
          <ion-icon name="menu" size="large"></ion-icon>
        </div>
      </div>
    </>
  );
}

export default NavBar;
