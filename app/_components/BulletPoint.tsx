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
      style={{ width: "100%", lineHeight: 1.4 }}
      value={tempText}
      autoFocus
      onChange={(e) => setTempText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleTurnOffInput();
      }}
      onBlur={handleTurnOffInput}
    />
  ) : (
    <div onClick={handleTurnOnInput} style={{ width: "100%", lineHeight: 1.4 }}>
      {tempText}
    </div>
  );
}

export default BulletPoint;
