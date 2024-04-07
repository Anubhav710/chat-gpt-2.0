"use client";
import { db } from "@/app/firebase/firebase_config";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import { collection, deleteDoc, orderBy, query, doc } from "firebase/firestore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);

  const [message] = useCollection(
    query(collection(db, "chat", id, "messages"), orderBy("createdAt", "asc"))
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname, id]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "chat", id));
    router.replace("/");
  };
  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow space-x-14 ${active && "bg-gray-700/50"}  `}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {message?.docs[message?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon
        onClick={handleDelete}
        className="h-5 w-5 text-gray-500 hover:text-red-500"
      />
    </Link>
  );
};

export default ChatRow;
