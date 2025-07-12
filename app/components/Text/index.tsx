import React from "react";

const Text = ({
  text,
  textColor = "text-black",
  textSize = "text-[14px] lg:text-[16px]",
  breakText,
  textStyle,
  handleClick,
}: {
  text: string;
  textColor?: string;
  textSize?: string;
  breakText?: string;
  textStyle?: string;
  handleClick?: () => void;
}) => {
  return (
    <h2
      className={`${textColor} ${textSize} ${textStyle}`}
      onClick={handleClick}
    >
      {text} <br /> {breakText}
    </h2>
  );
};

export default Text;
