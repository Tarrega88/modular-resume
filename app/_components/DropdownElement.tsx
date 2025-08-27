import { changeBulletPoint, Kinds } from "@/state/resumeSlice";
import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch } from "react-redux";

type TempProps = {
  options?: any[];
  kind: Kinds;
  id: string;
  renderIndex: number;
};

function DropdownElement({ options, kind, id, renderIndex }: TempProps) {
  const dispatch = useDispatch();

  function onChange(e: any) {
    switch (kind) {
      case "bulletPoint":
        dispatch(changeBulletPoint({ renderIndex, id: e.target.value }));
        // changeBulletPoint(resumeId);
        return;
      case "prevJob":
        return;
    }
  }

  return (
    <select
      className="w-4 focus:outline-none hover:bg-gray-900 text-white bg-gray-600 h-4 rounded-lg cursor-pointer"
      onChange={onChange}
      value={id}
    >
      {options?.map((option) => (
        <option key={option.id} value={option.id}>
          {option.text}
        </option>
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
