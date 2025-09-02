import { PrevJobProps } from "@/state/resumeSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import JobTitleInput from "./JobTitleInput";
import JobLocationInput from "./JobLocationInput";

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

  return (
    <div>
      <div className="flex justify-between text-lg font-semibold">
        <div>{companyName}</div>
        <div>
          {monthStarted} {yearStarted} - {monthEnded} {yearEnded}
        </div>
      </div>
      <div className="flex justify-between">
        <JobTitleInput text={jobTitle} id={id} />
        <JobLocationInput text={location} id={id} renderIndex={renderIndex} />
      </div>
      {/* <div>Bullet Points would go here</div> */}
    </div>
  );
}

export default JobSection;
