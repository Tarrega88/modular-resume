"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  addBulletData,
  addPrevJobData,
  addResumeItem,
  createEmptyResume,
  prevJobDefault,
  setCurrentResume,
} from "@/state/resumeSlice";
import { RootState } from "@/state/store";
import { Kinds } from "@/state/types";

const newResumeRenderItems: Kinds[] = [
  "userInfo",
  "summaryHeader",
  "experienceHeader",
  // "sectionHeader",
  "prevJob",
  "bulletPoint",
  "bulletPoint",
  "bulletPoint",
  "educationHeader",
  "skillsHeader",
  "projectsHeader",
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
    for (const kind of newResumeRenderItems) {
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
            addBulletData({ id, kind, text: "Enter Bullet Point Text..." })
          );
          break;
        // case "summaryHeader":
        // case "experienceHeader":
        // case "educationHeader":
        // case "projectsHeader":
        // case "skillsHeader": {
        //   dispatch(
        //     addSectionHeaderData({
        //       text: kind[0].toUpperCase() + kind.slice(1, -6),
        //       kind,
        //     })
        //   );
        // }
      }

      dispatch(addResumeItem({ kind, elementId: id }));
    }

    router.push(`/builder/${newResumeId}`);
  }

  return <button onClick={handleClick}>Generate New Resume</button>;
}
