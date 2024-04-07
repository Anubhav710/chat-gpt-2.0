import {
  SunIcon,
  ExclamationTriangleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-5  text-center">
      <SunIcon className="w-8 h-8" />
      <h2 className="mb-4">Examples</h2>

      {/* Middle harf  */}
      <div className="space-y-3 ">
        <p className="infoText">&quot;Explain Something to me&quot;</p>
        <p className="infoText">
          &quot;What is the difference between a dog and cat&quot;
        </p>
        <p className="infoText">&quot;What is the color of the sun?&quot;</p>
      </div>
    </div>
  );
};

export default Cards;
