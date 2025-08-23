import { useState } from "react";
import DeleteElementButton from "./DeleteElementButton";
import DropdownElement from "./DropdownElement";

type Props = {
  text?: string;
  id?: string;
  onCommit?: (value: string) => Promise<void> | void;
  children: React.ReactNode;
};

function DynamicInput({ text, id, onCommit, children }: Props) {
  const [tempText, setTempText] = useState<string>(text ?? "");
  const [displayMode, setDisplayMode] = useState<"div" | "input" | "select">(
    "div"
  );

  return displayMode === "div" ? (
    <div className="relative hover:bg-gray-200 transition-all duration-150 cursor-pointer w-full">
      <div>{children}</div>
      <div className="absolute top-0 flex justify-end w-full hover:opacity-100 h-full pr-1 items-center gap-2 opacity-0">
        <DropdownElement />
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
