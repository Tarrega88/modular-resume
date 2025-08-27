import { useState } from "react";
import DeleteElementButton from "./DeleteElementButton";
import DropdownElement from "./DropdownElement";
import { Kinds } from "@/state/resumeSlice";

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
  const [tempText, setTempText] = useState<string>(text ?? "");
  const [displayMode, setDisplayMode] = useState<"div" | "input">("div");

  return displayMode === "div" ? (
    <div className="relative hover:bg-gray-200 transition-all duration-150 cursor-pointer w-full">
      <div className="wrap-break-word">{children}</div>
      <div className="absolute top-0 flex justify-end w-full hover:opacity-100 h-full opacity-0">
        <div className="flex items-center bg-white gap-2 rounded-md w-14 justify-center border">
          <DropdownElement
            options={options}
            kind={kind}
            id={id}
            renderIndex={renderIndex}
          />
          <DeleteElementButton />
        </div>
      </div>
    </div>
  ) : (
    <input />
  );
}

export default DynamicInput;
