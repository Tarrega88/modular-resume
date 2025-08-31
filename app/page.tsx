"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/state/store";
import { generateNewResume } from "./_lib/utils/generateNewResume";

export default function HomePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, resumes } = useSelector((state: RootState) => state.resume);

  const handleClick = () => {
    const newResumeId = generateNewResume(dispatch, userInfo);

    router.push(`/builder/${newResumeId}`);
  };

  return <button onClick={handleClick}>Generate New Resume</button>;
}
