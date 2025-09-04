"use client";

import { useSelector } from "react-redux";
import { useScale } from "../_context/ScaleContext";
import SideResumeInner from "./SideResumeInner";
import { RootState } from "@/state/store";

export default function SideResume() {
  const { scale } = useScale();

  const state = useSelector((state: RootState) => state.resume);

  const { resumes, currentResumeId } = state;

  console.log(resumes[currentResumeId]);

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
