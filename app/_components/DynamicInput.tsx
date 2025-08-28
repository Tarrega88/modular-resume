import { useState } from "react";
import DeleteElementButton from "./DeleteElementButton";
import DropdownElement from "./DropdownElement";
import {
  dragResumeItem,
  editBulletPoint,
  Kinds,
  setDragFromIndex,
  setDragToIndex,
} from "@/state/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import AddAboveButton from "./AddAboveButton";
import AddBelowButton from "./AddBelowButton";
import { RootState } from "@/state/store";

type Props = {
  text?: string;
  id: string;
  children: React.ReactNode;
  options?: any[];
  kind: Kinds;
  renderIndex: number;
};

function DynamicInput({
  text,
  id,
  options,
  children,
  kind,
  renderIndex,
}: Props) {
  const [tempText, setTempText] = useState<string>(children?.toString() ?? "");
  const [displayMode, setDisplayMode] = useState<"div" | "input">("div");

  const [dragEntered, setDragEntered] = useState(false);

  const [toIndex, setToIndex] = useState(renderIndex);

  const dispatch = useDispatch();

  const { dragFromIndex, dragToIndex } = useSelector(
    (state: RootState) => state.resume
  );

  // function handleDrag() {

  // }

  function setDisplayToInput() {
    setDisplayMode("input");
  }

  function setDisplayToDiv() {
    setDisplayMode("div");
  }

  function handleEnter(e: any) {
    if (e.key === "Enter") {
      setDisplayMode("div");
      dispatch(editBulletPoint({ id, text: tempText }));
    }
  }

  function handleDragStart() {
    dispatch(setDragFromIndex(renderIndex));
  }

  function handleDragEnd() {
    // setIsDragging(false);
    // dispatch(setDragToIndex(renderIndex));
    dispatch(dragResumeItem());
    dispatch(setDragFromIndex(-1));
  }

  function handleDragEnter() {
    // console.log(renderIndex);
    setDragEntered(true);
    dispatch(setDragToIndex(renderIndex));
  }

  function handleDragLeave() {
    setDragEntered(false);
    // console.log(dragFromIndex);
    // dispatch(setDragToIndex(dragFromIndex));
  }

  //TODO 8/28/2025: work on drag styling

  // const dragStyle =
  //   dragEntered && dragFromIndex !== renderIndex ? "translate-y-3" : "";

  // const outerDragStyle =
  //   dragFromIndex === renderIndex ? "bg-transparent text-transparent" : "";

  const dragStyle =
    dragFromIndex !== -1 && dragToIndex <= renderIndex ? "translate-y-3" : "";

  const outerDragStyle =
    dragFromIndex === renderIndex ? "hover:opacity-50" : "hover:opacity-100";

  return displayMode === "div" ? (
    <div
      draggable
      className={`relative hover:bg-gray-200 transition-all duration-150 cursor-pointer w-full ${outerDragStyle}`}
      onClick={setDisplayToInput}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
      // onDragEnter={() => s}
      // onMouseEnter={() => handleDragActive(renderIndex)}
      // onDrag={() => console.log("dragging")}
    >
      <div
        className={`wrap-break-word transition-all duration-200 ${dragStyle}`}
      >
        {tempText}
      </div>
      <div className="absolute top-0 hover:opacity-100 h-full w-full">
        <div className="absolute right-0">
          <div
            className="flex items-center bg-white gap-2 rounded-md w-14 justify-center border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <AddAboveButton />
            <AddBelowButton /> */}
            <DropdownElement
              options={options}
              kind={kind}
              id={id}
              renderIndex={renderIndex}
            />
            <DeleteElementButton renderIndex={renderIndex} />
            {/*
            Still need:
            Move Up Button
            Move Down Button
            Add Above
            Add Below
            */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <input
      className="w-full"
      autoFocus
      value={tempText}
      onChange={(e) => setTempText(e.target.value)}
      onBlur={setDisplayToDiv}
      onKeyDown={handleEnter}
    />
  );
}

export default DynamicInput;
