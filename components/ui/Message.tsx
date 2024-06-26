import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React from "react";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  return (
    <div className="text-white    ">
      <div className="flex  space-x-5  mb-2  ">
        <Image
          src="/user.jpg"
          alt=""
          width={30}
          height={30}
          className="h-9 w-9 rounded-full"
        />
        <div>
          <h2 className="font-semibold">You </h2>
          <p className="pt-1 text-sm">{message.text}</p>
        </div>
      </div>
      <div className="flex space-x-5  mb-10">
        <Image
          src="/bot.jpg"
          alt=""
          width={30}
          height={30}
          className="h-9 w-9 rounded-full"
        />
        <div>
          <h2 className="font-semibold">AI</h2>
          <p className="pt-1 text-sm">{message.botResp}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
