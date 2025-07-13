import { SidebarIcon } from "@/app/types/types";
import React from "react";
import { IconButton } from "../../ui/IconButton";

interface SidebarProps {
  icons: SidebarIcon[];
  onIconClick: (id: string) => void;
}

export const Sidebar = ({ icons, onIconClick }: SidebarProps) => {
  return (
    <div className="w-20 h-full bg-transparent flex flex-col items-center py-5 justify-between">
      {icons.map(({ id, icon, active, dividerBefore }) => (
        <React.Fragment key={id}>
          {dividerBefore && (
            <div className="bg-[#18b2ff] w-10 h-1 rounded-full"></div>
          )}
          {icon && (
            <IconButton
              icon={icon}
              active={active}
              onClick={() => onIconClick(id)}
              aria-label={id}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
