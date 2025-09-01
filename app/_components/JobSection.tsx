import { editJobTitle, PrevJobProps } from "@/state/resumeSlice";
import DynamicInput from "./DynamicInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";

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
  const dispatch = useDispatch();
  function handleEditJobTitle(id: string, text: string) {
    dispatch(editJobTitle({ id, text }));
  }

  const { data, resumes, currentResumeId } = useSelector(
    (state: RootState) => state.resume
  );

  return (
    <div>
      <div className="flex justify-between text-lg font-semibold">
        <div>{companyName}</div>
        <div>
          {monthStarted} {yearStarted} - {monthEnded} {yearEnded}
        </div>
      </div>
      <div className="flex justify-between">
        <DynamicInput
          id={id}
          kind={kind}
          text={jobTitle}
          renderIndex={renderIndex}
          editData={handleEditJobTitle}
        />
        {/* <div>{jobTitle}</div> */}
        <div>{location}</div>
      </div>
      {/* <div>Bullet Points would go here</div> */}
    </div>
  );
}

export default JobSection;
