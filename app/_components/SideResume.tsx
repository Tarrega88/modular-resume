"use client";

import SideResumeInner from "./SideResumeInner";

export default function SideResume({ scale }: { scale: number }) {
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
