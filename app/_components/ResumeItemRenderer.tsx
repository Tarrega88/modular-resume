import { locationDefault, ResumeItemProps } from "@/state/resumeSlice";
import BulletPoint from "./bulletPoints/BulletPoint";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import JobSection from "./previousJob/JobSection";
import ResumeHeader from "./ResumeHeader";
import SectionHeader from "./SectionHeader";

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

  //TODO 9/4/2025: It will probably be necessary to tie BulletPoints to PrevJobs as {children} prop in order to appease ATS parsing
  //Likely solution will be tying bulletpoints to the specific job. Benefit to that will be more organization
  switch (kind) {
    case "personalInfo":
      const info = data?.personalInfo[elementId] || {
        id: elementId,
        kind: "personalInfo",
        fullName: "Full Name",
        email: "email@email.com",
        phoneNumber: "(123) 456-7890",
        location: locationDefault,
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
        location: locationDefault,
        monthStarted: 0,
        yearStarted: 2024,
        monthEnded: 11,
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
    case "experienceHeader": {
      const sectionHeaderData = data.sectionHeaders[elementId];
      return (
        <SectionHeader
          id={sectionHeaderData.id}
          text={sectionHeaderData.text}
          kind={sectionHeaderData.kind}
        />
      );
    }
    case "education":
      return;
  }
}

export default ResumeItemRenderer;
