"use client";

import scaleUI from "../_lib/utils/scaleUI";
import { useScale } from "../_context/ScaleContext";

function SideResume() {
  const { scale, setScale } = useScale();
  //80 dpi pixel sizes:
  // const width = "w-[680px]";
  // const height = "min-h-[880px]";

  //100 dpi

  //TODO 8/21/2025: implent scalar that adapts sizes of all elements based on the sizing ratio of what I have listed below

  // const width = "w-[850px]";
  // const height = "min-h-[1100px]";

  const fullWidth = 850;
  const fullHeight = 1100;

  const scaledWidth = fullWidth * scale;
  const scaledHeight = fullHeight * scale;

  console.log(scale);

  return (
    <div
      className="bg-white overflow-auto"
      style={{
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
      }}
    >
      {Array.from({ length: 52 }, (_, i) => (
        <div key={i}>{String.fromCharCode((i % 26) + 97)}</div>
      ))}
    </div>
  );
}

export default SideResume;
