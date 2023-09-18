import React from "react";
import "./myorg.css";
import { Image } from "@nextui-org/react";
import add from "../../assets/add.png";

function Myorg({ handleClickImg }) {
  return (
    <div className="myorg">
      <div>
        <h3>My Organization</h3>
      </div>
      <div>
        <Image
          onClick={handleClickImg}
          isBlurred
          width={64}
          src={add}
          alt="NextUI Album Cover"
          classNames="m-5"
        />
      </div>
    </div>
  );
}

export default Myorg;
