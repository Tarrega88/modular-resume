"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  addBulletData,
  addPrevJobData,
  addResumeItem,
  addSectionHeaderData,
  addSummaryData,
  createEmptyResume,
  prevJobDefault,
  setCurrentResume,
} from "@/state/resumeSlice";
import { RootState } from "@/state/store";
import { Kinds } from "@/state/types";

type RenderProps = {
  kind: Kinds;
  text?: string;
};

const newResumeRenderItems: RenderProps[] = [
  { kind: "userInfo" },
  { kind: "sectionHeader", text: "Summary" },
  { kind: "sectionHeader", text: "Experience" },
  { kind: "prevJob" },
  { kind: "bulletPoint" },
  { kind: "bulletPoint" },
  { kind: "bulletPoint" },
  { kind: "sectionHeader", text: "Education" },
  { kind: "sectionHeader", text: "Skills" },
  { kind: "sectionHeader", text: "Projects" },
];

export default function GenerateResumeButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const state = useSelector((state: RootState) => state.resume.data);

  const { userInfo } = state;

  const { fullName, email, location, phoneNumber } = userInfo;

  function handleClick() {
    const newResumeId = crypto.randomUUID();
    dispatch(setCurrentResume(newResumeId));
    dispatch(createEmptyResume());

    //TODO 9/2/2025: create a file of defaults instead of using the strings for the fallbacks
    for (const item of newResumeRenderItems) {
      const kind = item.kind;
      const id = crypto.randomUUID();

      switch (kind) {
        case "prevJob":
          dispatch(
            addPrevJobData({
              id,
              kind,
              companyName: "Company Name",
              jobTitle: "Job Title",
              location: location || "City, ST",
              monthStarted: 0,
              monthEnded: 11,
              yearStarted: 2024,
              yearEnded: 2025,
            })
          );
          break;
        case "bulletPoint":
          dispatch(
            addBulletData({ id, kind, text: "Enter bullet point Text..." })
          );
          break;
        case "sectionHeader":
          dispatch(
            addSectionHeaderData({
              id,
              kind: "sectionHeader",
              text: item.text || "",
            })
          );
          break;

        case "summary":
          dispatch(addSummaryData({ id, kind, text: "Enter summary text..." }));
      }

      dispatch(addResumeItem({ kind, elementId: id }));
    }

    router.push(`/builder/${newResumeId}`);
  }

  return <button onClick={handleClick}>Generate New Resume</button>;
}
