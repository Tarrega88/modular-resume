import { PrevJobProps } from "@/state/resumeSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import JobSectionInput from "./JobSectionInput";
import MonthDropdown from "./MonthDropdown";
import JobStart from "./JobStart";
import JobEnd from "./JobEnd";
import DynamicInput from "../DynamicInput";

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

  //TODO 9/6/2025: finish handleOnSubmit:
  function handleOnSubmit(e: string) {
    console.log(e);
  }

  return (
    <div>
      <div className="flex font-semibold justify-between">
        <JobSectionInput
          text={companyName}
          id={id}
          field="companyName"
          textAlign="left"
        />
        <div className="flex w-max gap-1">
          <JobStart id={id} monthType={monthType} month={monthStarted} />
          <DynamicInput
            text={yearStarted.toString()}
            handleOnSubmit={handleOnSubmit}
          />
          <div> - </div>
          <JobEnd id={id} monthType={monthType} month={monthEnded} />
          <DynamicInput
            text={yearEnded.toString()}
            handleOnSubmit={handleOnSubmit}
          />
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
      {/* <ul>
        <li className="pl-1">• Built and designed software</li>
        <li className="pl-1">• Mentored team of customer support agents</li>
        <li className="pl-1">
          • Collaborated across multiple teams to ensure timely delivery of
          product
        </li>
      </ul> */}
    </div>
  );
}

export default JobSection;
