import { PrevJobProps } from "@/state/resumeSlice";

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
}: PrevJobProps & { renderIndex?: number }) {
  return (
    <div>
      <div className="flex justify-between text-lg font-semibold">
        <div>{companyName}</div>
        <div>
          {monthStarted} {yearStarted} - {monthEnded} {yearEnded}
        </div>
      </div>
      <div className="flex justify-between">
        <div>{jobTitle}</div>
        <div>{location}</div>
      </div>
      {/* <div>Bullet Points would go here</div> */}
    </div>
  );
}

export default JobSection;
