import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

type TempProps = {
  options?: any[];
};

function DropdownElement({ options }: TempProps) {
  return (
    <select className="w-4 focus:outline-none hover:bg-gray-900 text-white bg-gray-600 h-4 rounded-lg cursor-pointer">
      {options?.map((option) => (
        <option key={option.id}>{option.text}</option>
      ))}
    </select>
  );
}

export default DropdownElement;

/*
    <div
      className="text-lg text-gray-500 hover:text-gray-800"
      onClick={() => setIsActive(true)}
    >
      <IoIosArrowDropdownCircle />
    </div>
*/

// <ul className="absolute top-0 bg-gray-500">
//   {options?.map((option) => (
//     <li key={option.id}>{option.text}</li>
//   ))}
// </ul>
