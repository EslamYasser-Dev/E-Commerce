import React from "react";
import { logo } from "../assets/index";

const Signin = () => {
  return (
    <div className="w-full  ">
      <div className="w-full bg-gray-100">
        <form>
          <img src={logo} alt="logo" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
