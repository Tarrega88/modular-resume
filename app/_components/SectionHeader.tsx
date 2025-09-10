import { SectionHeaderProps } from "@/state/types";
import DynamicInput from "./DynamicInput";
import DeleteElementButton from "./DeleteElementButton";
import { widthWithoutMargin } from "./SideResumeInner";
import RelativeAbsRight from "./wrappers/RelativeAbsRight";
import { useDispatch } from "react-redux";
import { editSectionHeader } from "@/state/resumeSlice";

//TODO 9/6/2025: Consider whether to store section header data as oneoffs or allow
//multiple versions of each header type

function SectionHeader({
  text,
  kind,
  renderIndex,
}: SectionHeaderProps & { renderIndex: number }) {
  const dispatch = useDispatch();
  function handleOnSubmit(text: string) {
    dispatch(editSectionHeader({ text, kind }));
  }

  return (
    <div className="group text-xl font-semibold mt-5">
      <RelativeAbsRight>
        <DeleteElementButton renderIndex={renderIndex} />
      </RelativeAbsRight>
      <DynamicInput
        text={text}
        handleOnSubmit={handleOnSubmit}
        inputWidth="full"
      />
    </div>
  );
}

export default SectionHeader;
