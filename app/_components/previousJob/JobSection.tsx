import { PrevJobProps } from "@/state/resumeSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import JobSectionInput from "./JobSectionInput";

function JobSection({
  id,
  kind,
  companyName,
  jobTitle,
  location,
  monthStarted,
  yearStarted,
  monthEnded,
  yearEnded,
  renderIndex,
}: PrevJobProps & { renderIndex: number }) {
  // const { data, resumes, currentResumeId } = useSelector(
  //   (state: RootState) => state.resume
  // );

  const state = useSelector((state: RootState) => state.resume.data);

  console.log("PREVJOBS");
  console.log(state.prevJobs);

  return (
    <div>
      <div className="flex justify-between text-lg font-semibold">
        <JobSectionInput
          text={companyName}
          id={id}
          field="companyName"
          textAlign="left"
        />
        <div>
          {monthStarted} {yearStarted} - {monthEnded} {yearEnded}
        </div>
      </div>
      <div className="flex justify-between">
        <JobSectionInput
          text={jobTitle}
          id={id}
          field="jobTitle"
          textAlign="left"
        />
        <JobSectionInput
          text={location}
          id={id}
          field="location"
          textAlign="right"
        />
      </div>
    </div>
  );
}

export default JobSection;
