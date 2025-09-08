"use client";

import { useDispatch, useSelector } from "react-redux";
import BulletSelect from "./bulletPoints/BulletSelect";
import { addResumeItem, setScale } from "@/state/resumeSlice";
import SwitchMode from "./SwitchMode";
import { RootState } from "@/state/store";

function BuilderColumn() {
  const dispatch = useDispatch();

  const { scale } = useSelector((state: RootState) => state.resume);

  function handleSetScale(num: number) {
    console.log(num);
    console.log("Attempting change");
    //0.8 * 10: 8
    //1 * 1.25: 1.25
    // const divided = num / 100;
    // console.log(divided);

    dispatch(setScale(num));
  }

  console.log(`SCALE: ${scale}`);
  return (
    <div className="w-64 bg-blue-500">
      <div>Col A</div>
      <div className="flex flex-col gap-2">
        <input
          type="range"
          min={50}
          max={150}
          value={scale}
          onChange={(e) => handleSetScale(Number(e.target.value))}
          step={5}
        />
        {/* <button
          className="bg-emerald-500 cursor-pointer"
          onClick={() => handleSetScale(-1)}
        >
          - Scale
        </button> */}
        <div>{scale}%</div>
        {/* <button
          className="bg-emerald-500 cursor-pointer"
          onClick={() => handleSetScale(1)}
        >
          + Scale
        </button> */}
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
