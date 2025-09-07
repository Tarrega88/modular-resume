import { locationDefault } from "@/state/resumeSlice";
import BulletPoint from "./bulletPoints/BulletPoint";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import JobSection from "./previousJob/JobSection";
import ResumeHeader from "./ResumeHeader";
import SectionHeader from "./SectionHeader";
import { ResumeItemProps } from "@/state/types";

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
    case "summaryHeader": {
      const { summaryHeader } = data.sectionHeaders;
      return (
        <SectionHeader text={summaryHeader.text} kind={summaryHeader.kind} />
      );
    }
    case "experienceHeader": {
      const { experienceHeader } = data.sectionHeaders;
      return (
        <SectionHeader
          text={experienceHeader.text}
          kind={experienceHeader.kind}
        />
      );
    }
    case "educationHeader": {
      const { educationHeader } = data.sectionHeaders;
      return (
        <SectionHeader
          text={educationHeader.text}
          kind={educationHeader.kind}
        />
      );
    }
    case "projectsHeader": {
      const { projectsHeader } = data.sectionHeaders;
      return (
        <SectionHeader text={projectsHeader.text} kind={projectsHeader.kind} />
      );
    }
    case "skillsHeader": {
      const { skillsHeader } = data.sectionHeaders;
      return (
        <SectionHeader text={skillsHeader.text} kind={skillsHeader.kind} />
      );
    }
    case "education":
      return;
  }
}

export default ResumeItemRenderer;
