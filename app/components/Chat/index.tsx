'use client'
import { useSidebar } from "@/app/hook/useSidebar";
import { Sidebar } from "./Components/Sidebar";

const Chat = () => {
    const {icons, setActiveIcon} = useSidebar()
  return (
    <div className="px-[5%] h-full w-full">
      <Sidebar icons={icons} onIconClick={setActiveIcon} />
    </div>
  );
};

export default Chat;
