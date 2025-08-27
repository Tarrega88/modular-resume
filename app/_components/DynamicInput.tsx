import { useState } from "react";
import DeleteElementButton from "./DeleteElementButton";
import DropdownElement from "./DropdownElement";
import { editBulletPoint, Kinds } from "@/state/resumeSlice";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

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
  return displayMode === "div" ? (
    <div
      className="relative hover:bg-gray-200 transition-all duration-150 cursor-pointer w-full"
      onClick={setDisplayToInput}
    >
      <div className="wrap-break-word">{tempText}</div>
      <div className="absolute top-0 hover:opacity-100 h-full opacity-0 w-full">
        <div className="absolute right-0">
          <div
            className="flex items-center bg-white gap-2 rounded-md w-14 justify-center border"
            onClick={(e) => e.stopPropagation()}
          >
            <DropdownElement
              options={options}
              kind={kind}
              id={id}
              renderIndex={renderIndex}
            />
            <DeleteElementButton renderIndex={renderIndex} />
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
