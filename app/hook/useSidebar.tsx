"use client";
import { useState } from "react";
import { SidebarIcon } from "../types/types";

export const useSidebar = () => {
  const [icons, setIcons] = useState<SidebarIcon[]>([
    { id: "menu", icon: '/images/chatMenu.png', active: true },
    { id: "chats", icon: '/images/comment.png' },
    { id: "calls", icon: '/images/call.png' },
    { id: "status", icon: '/images/status.png' },
    { id: "divider1", icon:'', dividerBefore: true },
    { id: "starred", icon: '/images/star.png' },
    { id: "archive", icon: '/images/archive.png' },
    { id: "profile", icon: '/images/divider.png', },
  ]);

  const setActiveIcon = (id: string) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon) => ({
        ...icon,
        active: icon.id === id,
      }))
    );
  };

  return { icons, setActiveIcon };
};
