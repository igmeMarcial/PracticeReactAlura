import React from "react";
import { Image } from "@nextui-org/react";
import banner from "../../assets/image5.png";

function Header() {
  return (
    <div className="w-full">
      <img className="w-full object-cover" src={banner}></img>
    </div>
  );
}

export default Header;
