"use client";

import { useDispatch } from "react-redux";
import { MAX, MIN, useScale } from "../_context/ScaleContext";
import BulletSelect from "./bulletPoints/BulletSelect";
import { addResumeItem } from "@/state/resumeSlice";
import SwitchMode from "./SwitchMode";

function BuilderColumn() {
  const { scale, setScale } = useScale();

  const dispatch = useDispatch();
  // function handleSetScale() {
  //   setScale(scale )
  // }

  function handleSetScale(direction: number) {
    //0.8 * 10: 8
    //1 * 1.25: 1.25
    if (
      (scale === MAX && direction === 1) ||
      (scale === MIN && direction === -1)
    )
      return;
    setScale((prev: number) => (prev * 10 + direction * 1.25) / 10);
  }

  return (
    <div className="w-64 bg-blue-500">
      <div>Col A</div>
      <div className="flex flex-col gap-2">
        <button
          className="bg-emerald-500 cursor-pointer"
          onClick={() => handleSetScale(-1)}
        >
          - Scale
        </button>
        <div>{scale * 100}%</div>
        <button
          className="bg-emerald-500 cursor-pointer"
          onClick={() => handleSetScale(1)}
        >
          + Scale
        </button>
      </div>
      <SwitchMode />
      <BulletSelect />
      {/* <button
        className="bg-sky-400 cursor-pointer hover:bg-sky-300 transition-all duration-150"
        onClick={() =>
          dispatch(addResumeItem({ kind: "prevJob", elementId: "0" }))
        }
      >
        Add Item
      </button> */}
    </div>
  );
}

export default BuilderColumn;
