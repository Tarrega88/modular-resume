import { useState } from "react";

type Props = {
  text: string;
  handleOnSubmit(e: string): void;
};

function DynamicInput({ text, handleOnSubmit }: Props) {
  const [showInput, setShowInput] = useState(false);
  const [tempText, setTempText] = useState(text);

  function changeDisplay() {
    handleOnSubmit(tempText);
    setShowInput(false);
  }

  return showInput ? (
    <input
      autoFocus
      value={tempText}
      onChange={(e) => setTempText(e.target.value)}
      onBlur={changeDisplay}
      onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
      className="px-1"
      style={{ width: `${tempText.length + 1 || 1}ch` }}
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
