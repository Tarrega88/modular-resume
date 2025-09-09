import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import JobSectionInput from "./JobSectionInput";
import JobStart from "./JobStart";
import JobEnd from "./JobEnd";
import DynamicInput from "../DynamicInput";
import { PrevJobProps } from "@/state/types";
import RelativeAbsRight from "../wrappers/RelativeAbsRight";
import DeleteElementButton from "../DeleteElementButton";

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
    <div className="group">
      <RelativeAbsRight>
        <DeleteElementButton renderIndex={renderIndex} />
      </RelativeAbsRight>
      <div className="flex font-semibold justify-between pt-2">
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
            inputWidth="char"
          />
          <div> - </div>
          <JobEnd id={id} monthType={monthType} month={monthEnded} />
          <DynamicInput
            text={yearEnded.toString()}
            handleOnSubmit={handleOnSubmit}
            inputWidth="char"
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
    </div>
  );
}

export default JobSection;
