import React from "react";

const Poster = () => {
  return (
    <div className="m-2 p-2 h-96 bg-orange-200">
      <div className="slide hi-slide">
        <div className="hi-next"></div>
        <div className="hi-previous"></div>
      </div>
      <h1>Hi</h1>
      <div className="flex  items-center bg-slate-300">
        <div className="flex-initial w-64 bg-red-200">Jio</div>
        <div className="flex-row bg-green-200"> Jeene Do</div>
      </div>
    </div>
  );
};

export default Poster;
