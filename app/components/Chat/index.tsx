"use client";
import { Sidebar } from "./Components/Sidebar";
import Chatlist from "./Components/Chatlist";
import ChatBox from "./Components/ChatBox";

const Chat = () => {

  return (
    <div className="px-[5%] h-full w-full">
      <div className="flex lg:flex-row flex-col items-start w-full">
        <Sidebar />
        <div className="pl-[70px] flex ">
          <Chatlist />
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default Chat;
