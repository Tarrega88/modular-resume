import { useState } from "react";
import DeleteElementButton from "./DeleteElementButton";
import DropdownElement from "./DropdownElement";

type Props = {
  text?: string;
  id?: string;
  onCommit?: (value: string) => Promise<void> | void;
  children: React.ReactNode;
  options?: any[];
};

//TODO 8/23/2025: won't need the select option here since that's off to the side now
function DynamicInput({ text, id, onCommit, options, children }: Props) {
  const [tempText, setTempText] = useState<string>(text ?? "");
  const [displayMode, setDisplayMode] = useState<"div" | "input" | "select">(
    "div"
  );

  return displayMode === "div" ? (
    <div className="relative hover:bg-gray-200 transition-all duration-150 cursor-pointer w-full">
      <div>{children}</div>
      <div className="absolute top-0 flex justify-end w-full hover:opacity-100 h-full pr-1 items-center gap-2 opacity-0">
        <DropdownElement options={options} />
        <DeleteElementButton />
      </div>
    </div>
  ) : displayMode === "input" ? (
    <input />
  ) : (
    <select></select>
  );
}

export default DynamicInput;
