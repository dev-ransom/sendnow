"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { SearchInput } from "../../Search/SearchInput";

const Chatlist = () => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<HTMLDivElement>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    // Check if click occurred outside both dropdown and filter button
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node) &&
      filterButtonRef.current &&
      !filterButtonRef.current.contains(event.target as Node)
    ) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterOpen]); // Add isFilterOpen to dependency array

  return (
    <section className="relative hidden lg:flex gap-3 flex-col justify-start items-start h-screen w-full md:w-[280px] rounded-2xl border border-[#18B1FF4D] lg:h-[450px] z-100 px-[20px]">
      <header className="flex justify-between  pt-[18px] items-center w-full relative">
        <h3 className="font-medium text-3xl">Chats</h3>
        <div
          ref={filterButtonRef}
          className={`w-[40px] h-[40px] ${
            isFilterOpen && "bg-[#18B1FF4D] hover:bg-none"
          } hover:bg-[#18B1FF4D] rounded-lg flex justify-center items-center transition-all duration-300`}
          onClick={() => setIsFilterOpen((prev) => !prev)}
        >
          <Image
            src="/images/filter.png"
            width={100}
            height={100}
            alt=""
            className="w-6 h-6"
          />
        </div>
        {isFilterOpen && (
          <div
            className="w-[200px] z-10 bg-[white] rounded-lg absolute pb-[10px] top-[65px] right-[-160px] h-fit flex flex-col px-2 shadow-lg"
            ref={dropDownRef}
          >
            <p className="text-gray-500 p-2 text-sm ">Filter chats by</p>
            <div className="flex flex-col gap-2 items-start">
              <button className="px-2 flex items-center text-sm gap-2 cursor-pointer h-[30px] hover:bg-[#18B1FF4D] w-full text-start">
                <IoChatbubbleEllipsesOutline size={20} />
                Unread
              </button>
              <button className="px-2 flex items-center text-sm gap-2 cursor-pointer h-[30px] hover:bg-[#18B1FF4D] w-full text-start">
                <MdFavoriteBorder size={20} />
                Favourites
              </button>
              <button className="px-2 flex items-center text-sm gap-2 cursor-pointer h-[30px] hover:bg-[#18B1FF4D] w-full text-start">
                <IoPersonAddOutline size={20} />
                Contacts
              </button>
              <button className="px-2 flex items-center text-sm gap-2 cursor-pointer h-[30px] hover:bg-[#18B1FF4D] w-full text-start">
                <IoPersonRemoveOutline size={20} />
                Non-contacts
              </button>
              <button className="px-2 flex items-center text-sm gap-2 cursor-pointer h-[30px] hover:bg-[#18B1FF4D] w-full text-start">
                <RiGroupLine size={20} />
                Groups
              </button>
              <button className="px-2 flex items-center text-sm gap-2 cursor-pointer h-[30px] hover:bg-[#18B1FF4D] w-full text-start">
                <HiOutlinePencil size={20} />
                Drafts
              </button>
            </div>
          </div>
        )}
      </header>
      <div className="w-full">
        <SearchInput
          placeholder="Search or Start a new chat"
          className="focus:border-b-[#18B1FF] focus:border-r-gray-300 focus:border-l-gray-300 focus:border-t-gray-300 focus:border-2 bg-inherit"
        />
      </div>
    </section>
  );
};

export default Chatlist;
