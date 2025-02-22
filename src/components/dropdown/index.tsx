"use client";

import { useState } from "react";
import DropdownButton from "./dropdown-button";
import DropdownContent from "./dropdown-content";

interface DropdownProps {
  data: {
    title: string;
    items: string;
  };
}

export default function Dropdown({ data }: DropdownProps) {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  function toggleDropdown() {
    setIsDropdownActive((prev) => !prev);
  }

  return (
      <div className="overflow-hidden w-full max-w-2xl">
        <DropdownButton
          title={data.title}
          isActive={isDropdownActive}
          onClick={toggleDropdown}
        />
        
        {isDropdownActive && <DropdownContent item={data.items} />}
      </div>
  );
}
