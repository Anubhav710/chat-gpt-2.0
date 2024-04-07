import Image from "next/image";
import { SunIcon } from "@heroicons/react/24/outline";
import Cards from "@/components/Cards";
import ChatInput from "@/components/ChatInput";
import NewChat from "@/components/ui/NewChat";

export default function Home() {
  return (
    <main className=" pb-4 px-2 flex flex-col justify-between h-screen max-w-screen-lg  mx-auto">
      <div className="flex flex-col items-center justify-center mt-40 px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        {/* Wrapper Div of all boxs  */}
        <section className="flex space-x-4">
          {/* Upper half  */}
          <Cards />
          <Cards />
          <Cards />
        </section>
      </div>
      <NewChat title="Start with a new chat" />
    </main>
  );
}
