import { useState } from "react";
import { editBulletPoint, Kinds } from "@/state/resumeSlice";
import { useDispatch } from "react-redux";

type Props = {
  text?: string;
  id?: string;
  children: React.ReactNode;
  kind?: Kinds;
};

function HeaderDynamicInput({ text, id, children, kind }: Props) {
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
    }
  }
  return displayMode === "div" ? (
    <div
      className="relative hover:bg-sky-50 transition-all duration-150 cursor-pointer w-full"
      onClick={setDisplayToInput}
    >
      <div className="wrap-break-word">{tempText}</div>
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
