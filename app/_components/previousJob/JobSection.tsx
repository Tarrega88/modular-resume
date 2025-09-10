import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import JobStart from "./JobStart";
import JobEnd from "./JobEnd";
import DynamicInput from "../DynamicInput";
import { PrevJobProps } from "@/state/types";
import { updatePrevJobField } from "@/state/resumeSlice";

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
  const state = useSelector((state: RootState) => state.resume);
  const { monthType } = state;

  const dispatch = useDispatch();

  return (
    <div className="mt-2 mb-1">
      <div className="flex font-semibold justify-between">
        <DynamicInput
          text={companyName}
          handleOnSubmit={(text: string) =>
            dispatch(
              updatePrevJobField({ id, field: "companyName", value: text })
            )
          }
          inputWidth="full"
        />
        <div className="flex w-max gap-1">
          <JobStart id={id} monthType={monthType} month={monthStarted} />
          <DynamicInput
            text={yearStarted.toString()}
            handleOnSubmit={(text: string) =>
              dispatch(
                updatePrevJobField({ id, field: "yearStarted", value: text })
              )
            }
            inputWidth="char"
          />
          <div> - </div>
          <JobEnd id={id} monthType={monthType} month={monthEnded} />
          <DynamicInput
            text={yearEnded.toString()}
            handleOnSubmit={(text: string) =>
              dispatch(
                updatePrevJobField({ id, field: "yearEnded", value: text })
              )
            }
            inputWidth="char"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <DynamicInput
          text={jobTitle}
          handleOnSubmit={(text: string) =>
            dispatch(updatePrevJobField({ id, field: "jobTitle", value: text }))
          }
          textAlign="left"
          inputWidth="full"
        />
        <DynamicInput
          text={location}
          handleOnSubmit={(text: string) =>
            dispatch(updatePrevJobField({ id, field: "location", value: text }))
          }
          textAlign="right"
          inputWidth="full"
        />
      </div>
    </div>
  );
}

export default JobSection;
