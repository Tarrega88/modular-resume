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

//TODO 8/31/2025: After decoupling and seeing how this looks on other parts of the resume,
// I realized this might just be best suited for bullet points.
//So I think I'm going to make other types of DynamicInputs,
// otherwise this will start taking in more props and getting needlessly complex
//Which means... maybe the component BulletPoint should eat this component at some point.

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
      className="group hover:bg-sky-50 transition-all duration-150 cursor-pointer w-full flex"
      onClick={setDisplayToInput}
    >
      <p>
        <span className="px-2">•</span>
        <span className="transition-all duration-200">{tempText}</span>
      </p>
      <div className="absolute w-full">
        <div className="relative">
          <div className="absolute h-full right-[96px]">
            <div
              className="flex bg-white gap-2 rounded-md w-14 justify-center items-center border h-5 group-hover:opacity-100 opacity-0"
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
