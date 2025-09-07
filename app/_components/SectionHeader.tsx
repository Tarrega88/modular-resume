import { SectionHeaderProps } from "@/state/types";
import DynamicInput from "./DynamicInput";

//TODO 9/6/2025: Consider whether to store section header data as oneoffs or allow
//multiple versions of each header type

function SectionHeader({ text, kind }: SectionHeaderProps) {
  function handleOnSubmit() {}

  return (
    <div className="text-xl font-semibold my-4">
      <DynamicInput
        text={text}
        handleOnSubmit={handleOnSubmit}
        inputWidth="full"
      />
    </div>
  );
}

export default SectionHeader;
