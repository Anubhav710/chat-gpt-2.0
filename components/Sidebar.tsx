"use client";
import React from "react";
import NewChat from "./ui/NewChat";

import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/app/firebase/firebase_config";
import ChatRow from "./ui/ChatRow";

const Sidebar = () => {
  const [chats, loading, error] = useCollection(collection(db, "chat"));
  console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen  text-white">
      <div className="flex-1">
        <div className="space-y-3">
          {/* New Chat  */}
          <NewChat title="New Chat" show />

          <div>{/* Model Selection  */}</div>

          {/* Map through ChatRows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
