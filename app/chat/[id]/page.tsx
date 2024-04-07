import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import React from "react";

type Props = {
  params: { id: string };
};

const page = ({ params: { id } }: Props) => {
  return (
    <div className="flex text-white flex-col h-screen overflow-hidden max-w-screen-lg mx-auto p-5">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
};

export default page;
