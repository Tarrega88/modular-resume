import { SectionHeaderProps } from "@/state/types";
import DynamicInput from "./DynamicInput";
import DeleteElementButton from "./DeleteElementButton";

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
      <div className="relative">
        <div className="absolute left-[101%] group-hover:opacity-100 opacity-0 transition-all duration-150">
          <DeleteElementButton renderIndex={renderIndex} />
        </div>
      </div>
      <DynamicInput
        text={text}
        handleOnSubmit={handleOnSubmit}
        inputWidth="full"
      />
    </div>
  );
}

export default SectionHeader;
