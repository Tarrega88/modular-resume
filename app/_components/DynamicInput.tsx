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

function DynamicInput({ text, id, onCommit, options, children }: Props) {
  const [tempText, setTempText] = useState<string>(text ?? "");
  const [displayMode, setDisplayMode] = useState<"div" | "input">("div");

  return displayMode === "div" ? (
    <div className="relative hover:bg-gray-200 transition-all duration-150 cursor-pointer w-full">
      <div className="wrap-break-word">{children}</div>
      <div className="absolute top-0 flex justify-end w-full hover:opacity-100 h-full opacity-0">
        <div className="flex items-center bg-white gap-2 rounded-md w-14 justify-center border">
          <DropdownElement options={options} />
          <DeleteElementButton />
        </div>
      </div>
    </div>
  ) : (
    <input />
  );
}

export default DynamicInput;
