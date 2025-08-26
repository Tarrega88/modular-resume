import { ResumeItemProps, Kinds } from "@/state/resumeSlice";
import BulletPoint from "./BulletPoint";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import JobSection from "./JobSection";

function ResumeItemRenderer({ id, kind, elementId }: ResumeItemProps) {
  const { data } = useSelector((state: RootState) => state.resume);

  // console.log("Element ID");
  // console.log(elementId);
  // console.log("data");
  // console.log(data);

  // const kindString = kind.toString();
  //TODO 8/26/2025: Probably don't need kind on these - maybe remove from the Props, or if it's needed there then make a new Props type for these?
  switch (kind) {
    case "personalInfo":
      return;
    case "bulletPoints":
      const bp = data.bulletPoints[elementId];

      return <BulletPoint id={bp.id} kind={bp.kind} text={bp.text} />;
    case "education":
      return;
    case "prevJobs":
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
      } = data.prevJobs[elementId];

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
        />
      );
  }
}

export default ResumeItemRenderer;
