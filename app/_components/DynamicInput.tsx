import { Kinds } from "@/state/resumeSlice";
import { useState } from "react";
import DeleteElementButton from "./DeleteElementButton";
import DropdownElement from "./DropdownElement";

type Props = {
  text: string;
  id: string;
  options?: any[];
  kind: Kinds;
  renderIndex: number;
  editData(id: string, text: string): void;
};

//TODO 8/31/2025: decouple the bulletpoint logic up into bulletpoint component

function DynamicInput({
  text = "",
  id,
  options,
  kind,
  renderIndex,
  editData,
}: Props) {
  const [tempText, setTempText] = useState(text);
  const [displayMode, setDisplayMode] = useState<"div" | "input">("div");

  function setDisplayToInput() {
    setDisplayMode("input");
  }

  function handleBlur() {
    setDisplayMode("div");
    editData(id, tempText);
  }

  function handleEnter(e: any) {
    if (e.key === "Enter") {
      setDisplayMode("div");
      editData(id, tempText);
    }
  }

  return displayMode === "div" ? (
    <div
      className="relative hover:bg-sky-50 transition-all duration-150 cursor-pointer w-full"
      onClick={setDisplayToInput}
    >
      <div className="wrap-break-word transition-all duration-200">
        {tempText}
      </div>
      <div className="absolute top-0 hover:opacity-100 h-full w-full opacity-0">
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
      onBlur={handleBlur}
      onKeyDown={handleEnter}
    />
  );
}

export default DynamicInput;
