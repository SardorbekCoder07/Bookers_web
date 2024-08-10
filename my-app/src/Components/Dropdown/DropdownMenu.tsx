"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import uzbekImg from "@assets/images/uzbekFlag.png";
// import usaImg from "../../assets/images/usaFlag.png";
import russianImg from "../../assets/images/russiaFlag.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type MenuOption = {
  value: string;
  name: string;
  friendlyName: string;
  icon?: StaticImageData;
};

const options: MenuOption[] = [
//   { name: "UZB", value: "uz", friendlyName: "UZB", icon: uzbekImg },
  { name: "RUS", value: "ru", friendlyName: "RUS", },
//   { name: "ENG", value: "en", friendlyName: "ENG", icon: usaImg },
];

const DropdownMenu: React.FC = () => {
  const [selected, setSelected] = useState<string>('uz');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: MenuOption) => {
    setSelected(option.name);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((option) => option.name === selected);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="drop__btn w-full bg-transparent border-[1px] border-white text-white p-2 rounded-md flex items-center justify-between"
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
        onClick={handleToggle}
      >
        {selectedOption?.icon && (
          <Image
            src={selectedOption?.icon}
            alt={selectedOption.friendlyName}
            width={20}
            height={20}
            className="mr-2"
          />
        )}
        {selectedOption?.friendlyName}
        <span className="ml-2">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-[#B9B9C9] shadow-lg rounded-md w-full z-10">
          <div className="drop__items p-2">
            {options.map((option) => (
              <button
                key={option.name}
                className={`drop__btn w-full text-left p-2 rounded-md flex items-center ${
                  selected === option.name
                    ? "bg-[#9c0b35] text-white"
                    : "text-[#000]"
                }`}
                type="button"
                onClick={() => handleSelect(option)}
              >
                {option.icon && (
                  <Image
                    src={option.icon}
                    alt={option.friendlyName}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                )}
                {option.friendlyName}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
