"use client";
import { db } from "@/app/firebase/firebase_config";
import { collection, orderBy, query } from "firebase/firestore";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./ui/Message";

type Props = {
  chatId: string;
};
const Chat = ({ chatId }: Props) => {
  const [message] = useCollection(
    query(
      collection(db, "chat", chatId, "messages"),
      orderBy("createdAt", "asc")
    )
  );

  return (
    <div className="flex-1 pt-5 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-[#383838] scrollbar-track-transparent">
      {message?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
};

export default Chat;
