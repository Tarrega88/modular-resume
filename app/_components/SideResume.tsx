"use client";

import { useDispatch, useSelector } from "react-redux";
import SideResumeInner from "./SideResumeInner";
import { RootState } from "@/state/store";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { setCurrentResume } from "@/state/resumeSlice";

export default function SideResume() {
  const state = useSelector((state: RootState) => state.resume);
  const { scale } = state;

  const { data, resumes, currentResumeId } = state;

  const { resumeId } = useParams<{ resumeId: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (resumeId) dispatch(setCurrentResume(resumeId));
  }, [resumeId, dispatch]);

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
      <SideResumeInner />
    </div>
  );
}
