"use client";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/firebase/firebase_config";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  show?: boolean;
}

const NewChat = ({ title, show }: Props) => {
  const router = useRouter();

  const createNewChat = async () => {
    const doc = await addDoc(collection(db, "chat"), {
      createdAt: serverTimestamp(),
      messages: [],
    });

    router.push(`/chat/${doc.id}`);
  };
  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      {show && <PlusIcon className="w-4 h-4 " />}
      <p className="">{title}</p>
    </div>
  );
};

export default NewChat;
