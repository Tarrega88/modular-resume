"use client";

import { useScale } from "../_context/ScaleContext";
import SideResumeInner from "./SideResumeInner";

export default function SideResume() {
  const { scale } = useScale();

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${850 * scale}px`,
        height: `${1100 * scale}px`,
      }}
    >
      <SideResumeInner />
    </div>
  );
}
