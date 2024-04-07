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
        <p className="infoText">"Explain Something to me"</p>
        <p className="infoText">
          "What is the difference between a dog and cat"
        </p>
        <p className="infoText">"What is the color of the sun?""</p>
      </div>
    </div>
  );
};

export default Cards;
