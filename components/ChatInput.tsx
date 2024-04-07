"use client";
import { geminiResponse } from "@/actions/geminiAction";
import { db } from "@/app/firebase/firebase_config";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { FormEvent, useState } from "react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState("loading");

  console.log(chatId);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    setPrompt("");

    const input = prompt.trim();

    const resp = await geminiResponse(prompt);

    const message = {
      text: input,
      botResp: resp,
      createdAt: serverTimestamp(),
      user: {
        _id: 1,
        name: "Anubhav",
      },
    };

    //Collection first take parth means where to navigate and then the data in secound argument
    await addDoc(collection(db, "chat", chatId, "messages"), message);
  };

  return (
    <div className="border border-gray-600 overflow-hidden bg-[#212121] text-gray-400 rounded-xl text-sm">
      <form className="   space-x-5 flex  " onSubmit={handleSubmit}>
        <input
          className=" flex-1 px-5 py-4  bg-transparent  focus:outline-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Message ChatGPT..."
        />
        <button type="submit" disabled={!prompt}>
          <PaperAirplaneIcon className="h-5 w-5 mr-3  " />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
