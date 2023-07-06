import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full border-t-[1px] border-b-[1px] py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-.5">
          <p className="text-sm">see personalized recommendation</p>
          <Link to="./signin">
            <button
              className="w-full bg-yellow-400 rounded-md py-1 font-semibold 
                 cursor-pointer active:bg-yellow-700"
            >
              Sign In
            </button>
          </Link>
          <p className="text-xs mt-1">
            New Customer?{" "}
            <span className=" text-blue-600 ml-1 cursor-pointer">
              Start here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
