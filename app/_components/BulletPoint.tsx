import { useState } from "react";

function BulletPoint() {
  const [text, setText] = useState("Enter Bullet Text...");
  const [isInput, setIsInput] = useState(false);

  function handleTurnOnInput() {
    setIsInput(true);
  }

  function handleTurnOffInput() {
    setIsInput(false);
  }

  return isInput ? (
    <input
      value={text}
      autoFocus
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleTurnOffInput();
      }}
      onBlur={handleTurnOffInput}
    />
  ) : (
    <div onClick={handleTurnOnInput}>{text}</div>
  );
}

export default BulletPoint;
