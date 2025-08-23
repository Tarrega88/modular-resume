import { useState } from "react";

function BulletPoint({
  id,
  text,
  scale,
}: {
  id: string;
  text: string;
  scale: number;
}) {
  const [tempText, setTempText] = useState(text);
  const [isInput, setIsInput] = useState(false);

  const fullFontSize = 16;

  const displayFontSize = fullFontSize * scale;

  function handleTurnOnInput() {
    setIsInput(true);
  }

  function handleTurnOffInput() {
    setIsInput(false);
  }

  console.log(displayFontSize);

  return isInput ? (
    <input
      style={{ fontSize: `${displayFontSize}px` }}
      value={tempText}
      autoFocus
      onChange={(e) => setTempText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleTurnOffInput();
      }}
      onBlur={handleTurnOffInput}
    />
  ) : (
    <div
      onClick={handleTurnOnInput}
      style={{ fontSize: `${displayFontSize}px` }}
    >
      {tempText}
    </div>
  );
}

export default BulletPoint;
