import { useState } from "react";

function BulletPoint({ id, text }: { id: string; text: string }) {
  const [tempText, setTempText] = useState(text);
  const [isInput, setIsInput] = useState(false);

  function handleTurnOnInput() {
    setIsInput(true);
  }

  function handleTurnOffInput() {
    setIsInput(false);
  }

  return isInput ? (
    <input
      value={tempText}
      autoFocus
      onChange={(e) => setTempText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleTurnOffInput();
      }}
      onBlur={handleTurnOffInput}
    />
  ) : (
    <div onClick={handleTurnOnInput}>{tempText}</div>
  );
}

export default BulletPoint;
