"use client";
import { useSidebar } from "@/app/hook/useSidebar";
import { Sidebar } from "./Components/Sidebar";
import { IoLogOut } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useLogoutMutation } from "@/app/features/auth/authService";
import { useEffect } from "react";

const Chat = () => {
  const { mutate: logout, isSuccess } = useLogoutMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      // Optional: You can redirect after successful logout
      router.push("auth/login");
    }
  }, [isSuccess, router]);
  const { icons, setActiveIcon } = useSidebar();
  return (
    <div className="px-[5%] h-full w-full">
      <Sidebar icons={icons} onIconClick={setActiveIcon} />
      <IoLogOut size={24} className="cursor-pointer" onClick={() =>logout()} />
    </div>
  );
};

export default Chat;
