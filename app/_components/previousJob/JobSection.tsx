import { PrevJobProps } from "@/state/resumeSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import JobSectionInput from "./JobSectionInput";
import MonthDropdown from "./MonthDropdown";
import JobStart from "./JobStart";
import JobEnd from "./JobEnd";

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

  const state = useSelector((state: RootState) => state.resume);
  const { monthType } = state;

  // state.prevJobs[id]

  //TODO 9/4/2025: looks like the date will be correctly parsed by ATS like this.
  //Will put in a separate date component in place of 2024 and 2025.

  return (
    <div>
      <div className="flex justify-between font-semibold">
        <JobSectionInput
          text={companyName}
          id={id}
          field="companyName"
          textAlign="left"
        />
        <div className="flex gap-2">
          <JobStart id={id} monthType={monthType} month={monthStarted} />
          <div>2024</div>
          <div> - </div>
          <JobEnd id={id} monthType={monthType} month={monthEnded} />
          <div>2025</div>
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
