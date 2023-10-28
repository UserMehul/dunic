import React from "react";
import KYS from "../images/know-your-score.jpg";

const Knowyourscore = () => {
  return (
    <div className="bg-red-50 rounded-lg m-2 p-2">
      <div className="flex justify-center items-center h-36 md:h-96">
        <div className="w-1/2 items-end">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {" "}
            Know your Score
          </button>
        </div>
        <div className="flex-1 w-14 ">
          <img
            className="w-full  rounded-lg object-cover object-center p-2"
            src={KYS}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Knowyourscore;
