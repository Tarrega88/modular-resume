import { ResumeItemProps } from "@/state/resumeSlice";
import BulletPoint from "./BulletPoint";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import JobSection from "./JobSection";
import ResumeHeader from "./ResumeHeader";

function ResumeItemRenderer({
  id,
  kind,
  elementId,
  renderIndex,
}: ResumeItemProps & { renderIndex: number }) {
  const { data } = useSelector((state: RootState) => state.resume);

  // console.log(`RESUMES`);
  // console.log(resumes);

  // console.log("Element ID");
  // console.log(elementId);
  // console.log("data");
  // console.log(data);

  // const kindString = kind.toString();
  //TODO 8/26/2025: Probably don't need kind on these - maybe remove from the Props, or if it's needed there then make a new Props type for these?
  switch (kind) {
    case "personalInfo":
      const info = data?.personalInfo[elementId] || {
        id: elementId,
        kind: "personalInfo",
        fullName: "Full Name",
        email: "email@email.com",
        phoneNumber: "(123) 456-7890",
        location: "City, ST",
      };

      return (
        <ResumeHeader
          id={info.id}
          kind={info.kind}
          fullName={info.fullName}
          email={info.email}
          phoneNumber={info.phoneNumber}
          location={info.location}
        />
      );
    case "bulletPoint":
      const bp = data?.bulletPoints[elementId] || {
        id: elementId,
        kind: "bulletPoint",
        text: "Enter Bullet Point Text...",
      };
      return (
        <BulletPoint
          key={bp.text}
          id={bp.id}
          kind={bp.kind}
          text={bp.text}
          renderIndex={renderIndex}
        />
      );
    case "education":
      return;
    case "prevJob":
      const {
        companyName,
        id,
        jobTitle,
        kind,
        location,
        monthStarted,
        yearStarted,
        monthEnded,
        yearEnded,
      } = data?.prevJobs[elementId] || {
        id: elementId,
        companyName: "Company Name",
        jobTitle: "Job Title",
        kind: "prevJob",
        location: "City, ST",
        monthStarted: "Jan",
        yearStarted: 2024,
        monthEnded: "Dec",
        yearEnded: 2025,
      };

      return (
        <JobSection
          id={id}
          companyName={companyName}
          jobTitle={jobTitle}
          kind={kind}
          location={location}
          monthStarted={monthStarted}
          yearStarted={yearStarted}
          monthEnded={monthEnded}
          yearEnded={yearEnded}
          renderIndex={renderIndex}
        />
      );
  }
}

export default ResumeItemRenderer;
