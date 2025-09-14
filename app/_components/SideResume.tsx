"use client";

import { useDispatch, useSelector } from "react-redux";
import SideResumeInner from "./SideResumeInner";
import { RootState } from "@/state/store";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { setCurrentResume } from "@/state/resumeSlice";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function SideResume() {
  const state = useSelector((state: RootState) => state.resume);
  const { scale } = state;

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const { data, resumes, currentResumeId } = state;

  const { resumeId } = useParams<{ resumeId: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (resumeId) dispatch(setCurrentResume(resumeId));
  }, [resumeId, dispatch]);

  console.log("RESUME");
  console.log(resumes[currentResumeId]);
  console.log("DATA");
  console.log(data);

  const decimalScale = scale / 100;

  return (
    <div
      style={{
        transform: `scale(${decimalScale})`,
        transformOrigin: "top left",
        width: `${850 * decimalScale}px`,
        height: `${1100 * decimalScale}px`,
      }}
    >
      <button onClick={reactToPrintFn}>Print</button>
      <div ref={contentRef}>
        <SideResumeInner />
      </div>
    </div>
  );
}
