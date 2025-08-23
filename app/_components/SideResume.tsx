"use client";

import scaleUI from "../_lib/utils/scaleUI";
import BulletPoint from "./BulletPoint";

function SideResume({
  mode = "builder",
  scale,
}: {
  mode: "builder" | "print";
  scale: number;
}) {
  // const { scale, setScale } = useScale();
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

  const tempFontSize = scale * 16;

  const styles =
    mode === "builder"
      ? {
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`,
          overflow: "auto" as const,
        }
      : {
          width: `${fullWidth}px`,
          height: "auto",
          overflow: "visible" as const,
        };

  return (
    <div className="bg-white overflow-auto" style={styles}>
      {/* <BulletPoint
        id="32b166b8-4243-473d-b98c-1f5ceba95160"
        text="1"
        scale={scale}
      />
      <BulletPoint
        id="48fec010-b1d4-41f5-b17b-218c1b9b5d51"
        text="2"
        scale={scale}
      />
      <BulletPoint
        id="33a7d38d-e343-49e1-8fc3-152c530ca7b8"
        text="3"
        scale={scale}
      /> */}

      {Array.from({ length: 52 }, (_, i) => (
        <div style={{ fontSize: `${tempFontSize}px` }} key={i}>
          {String.fromCharCode((i % 26) + 97)}
        </div>
      ))}
    </div>
  );
}

export default SideResume;
