import { useState } from "react";
import { useDispatch } from "react-redux";
import { Kinds } from "@/state/types";

type Props = {
  text: string;
  id?: string;
  kind?: Kinds;
};

function HeaderDynamicInput({ text, id, kind }: Props) {
  //TODO 8/29/2025: consider how to handle default generation of ids for newly created sections.
  const [tempText, setTempText] = useState(text);
  const [displayMode, setDisplayMode] = useState<"div" | "input">("div");

  const dispatch = useDispatch();

  function setDisplayToInput() {
    setDisplayMode("input");
  }

  function setDisplayToDiv() {
    setDisplayMode("div");
  }

  //TODO 9/6/2025: finish hooking up reducer:
  function handleEnter(e: any) {
    if (e.key === "Enter") {
      setDisplayMode("div");
    }
  }
  return displayMode === "div" ? (
    <div
      className="hover:bg-sky-50 transition-all duration-150 cursor-pointer w-full"
      onClick={setDisplayToInput}
    >
      <span>{tempText}</span>
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

export default HeaderDynamicInput;
