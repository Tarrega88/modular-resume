import { useState } from "react";

type Props = {
  text: string;
  handleOnSubmit(e: string): void;
  inputWidth: "char" | "full";
};

//TODO 9/7/2025: might add a padding prop here

function DynamicInput({ text, handleOnSubmit, inputWidth }: Props) {
  const [showInput, setShowInput] = useState(false);
  const [tempText, setTempText] = useState(text);

  function changeDisplay() {
    handleOnSubmit(tempText);
    setShowInput(false);
  }

  const widths = {
    char: `${tempText.length || 1}ch`,
    full: "100%",
  };

  return showInput ? (
    <input
      autoFocus
      value={tempText}
      onChange={(e) => setTempText(e.target.value)}
      onBlur={changeDisplay}
      onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
      style={{ width: `${widths[inputWidth]}` }}
    />
  ) : (
    <div
      className="hover:bg-sky-50 transition-all duration-150"
      onClick={() => setShowInput(true)}
    >
      {tempText}
    </div>
  );
}

export default DynamicInput;
