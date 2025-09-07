import { SectionHeaderProps } from "@/state/types";
import DynamicInput from "./DynamicInput";
import DeleteElementButton from "./DeleteElementButton";
import { widthWithoutMargin } from "./SideResumeInner";
import RelativeAbsLeft from "./wrappers/RelativeAbsLeft";
import RelativeAbsRight from "./wrappers/RelativeAbsRight";

//TODO 9/6/2025: Consider whether to store section header data as oneoffs or allow
//multiple versions of each header type

function SectionHeader({
  text,
  kind,
  renderIndex,
}: SectionHeaderProps & { renderIndex: number }) {
  function handleOnSubmit() {}

  return (
    <div className="group text-xl font-semibold my-4">
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
