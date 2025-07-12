import React from "react";

const Header = ({
  text,
  textSize = "lg:text-[24px] text-[20px] ",
  position,
  textColor = "text-black",
  textClasses,
  font = "font-[600]",
}: {
  text: string;
  textColor?: string;
  textSize?: string;
  position?: string;
  textClasses?: string;
  font?: string;
}) => {
  return (
    <h6
      className={`${textSize} ${textColor} ${position} ${textClasses} ${font} py-1`}
    >
      {text}
    </h6>
  );
};

export default Header;
