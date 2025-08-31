"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import type { RootState } from "@/state/store";
import { generateNewResume } from "../_lib/utils/generateNewResume";

export default function GenerateResumeButton() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo } = useSelector((s: RootState) => s.resume);

  const handleClick = () => {
    const newResumeId = generateNewResume(dispatch, userInfo);
    router.push(`/builder/${newResumeId}`);
  };

  return <button onClick={handleClick}>Generate New Resume</button>;
}
