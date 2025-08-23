import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function DropdownElement() {
  const [isActive, setIsActive] = useState(false);

  return isActive ? (
    <select className="bg-emerald-500">
      <option>A</option>
      <option>B</option>
    </select>
  ) : (
    <div className="text-lg text-gray-500 hover:text-gray-800">
      <IoIosArrowDropdownCircle />
    </div>
  );
}

export default DropdownElement;
