"use client";

import { ScaleProvider } from "@/app/_context/ScaleContext";
import { setCurrentResume } from "@/state/resumeSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resumeId } = useParams<{ resumeId: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (resumeId) dispatch(setCurrentResume(resumeId));
  }, [resumeId, dispatch]);

  return <ScaleProvider>{children}</ScaleProvider>;
}
