import { useState } from "react";

type Props = {
  text?: string;
  id?: string;
};

function DynamicInput({ text, id }: Props) {
  const [tempText, setTempText] = useState<string>(text ?? "");
  const [displayMode, setDisplayMode] = useState<"div" | "input" | "select">(
    "div"
  );

  return displayMode === "div" ? (
    <div></div>
  ) : displayMode === "input" ? (
    <input />
  ) : (
    <select></select>
  );
}

export default DynamicInput;
