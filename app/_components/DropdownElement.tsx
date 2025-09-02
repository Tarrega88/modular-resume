import {
  changeBulletPoint,
  changePrevJobLocation,
  Kinds,
} from "@/state/resumeSlice";
import { RootState } from "@/state/store";
import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

type TempProps = {
  options?: any[];
  kind: Kinds;
  id: string;
  locationId: string;
  renderIndex: number;
  field?: string;
};

function DropdownElement({
  options,
  kind,
  id,
  locationId,
  renderIndex,
  field,
}: TempProps) {
  const dispatch = useDispatch();

  function onChange(e: any) {
    switch (true) {
      case kind === "bulletPoint":
        dispatch(changeBulletPoint({ renderIndex, id: e.target.value }));
        // changeBulletPoint(resumeId);
        break;
      case kind === "prevJob" && field === "location":
        dispatch(changePrevJobLocation({ id, locationId: e.target.value }));
        break;
    }
  }

  const { data, resumes } = useSelector((state: RootState) => state.resume);

  return (
    <select
      className="w-4 focus:outline-none cursor-pointer hover:text-gray-500 transition-all duration-150"
      onChange={onChange}
      value={locationId}
      key={locationId}
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
