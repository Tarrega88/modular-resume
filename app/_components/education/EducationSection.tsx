import { EducationProps } from "@/state/types";
import DynamicInput from "../DynamicInput";
import EducationDate from "./EducationDate";
import { useDispatch } from "react-redux";
import { editEducationString } from "@/state/resumeSlice";

function EducationSection({
  id,
  kind,
  schoolName,
  degree,
  monthEnded,
  yearEnded,
  location,
  gpa,
}: EducationProps) {
  function handleOnSubmit() {
    //temp
  }

  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <DynamicInput
          text={schoolName}
          handleOnSubmit={(text: string) =>
            dispatch(editEducationString({ id, field: "schoolName", text }))
          }
          inputWidth="full"
        />
        <DynamicInput
          text={location}
          handleOnSubmit={(text: string) =>
            dispatch(editEducationString({ id, field: "location", text }))
          }
          inputWidth="full"
          textAlign="right"
        />
      </div>
      <div className="flex justify-between">
        <DynamicInput
          text={degree}
          handleOnSubmit={(text: string) =>
            dispatch(editEducationString({ id, field: "degree", text }))
          }
          inputWidth="full"
        />
        <div>
          <EducationDate
            id={id}
            monthEnded={monthEnded}
            yearEnded={yearEnded}
          />
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
