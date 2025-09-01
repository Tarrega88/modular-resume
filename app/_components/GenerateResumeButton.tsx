"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  addResumeItem,
  createEmptyResume,
  Kinds,
  setCurrentResume,
} from "@/state/resumeSlice";

const newResumeRenderItems: Kinds[] = [
  "personalInfo",
  "prevJob",
  "bulletPoint",
  "bulletPoint",
  "bulletPoint",
];

export default function GenerateResumeButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  function handleClick() {
    const newResumeId = crypto.randomUUID();
    dispatch(setCurrentResume(newResumeId));
    dispatch(createEmptyResume());

    for (const kind of newResumeRenderItems) {
      dispatch(addResumeItem({ kind, elementId: null }));
    }

    router.push(`/builder/${newResumeId}`);
  }

  return <button onClick={handleClick}>Generate New Resume</button>;
}
