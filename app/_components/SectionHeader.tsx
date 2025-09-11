import DynamicInput from "./DynamicInput";
import { widthWithoutMargin } from "./SideResumeInner";
import { useDispatch } from "react-redux";
import { editSectionHeader } from "@/state/resumeSlice";

type Props = {
  text: string;
  kind: "sectionHeader";
  renderIndex: number;
  id: string;
};

function SectionHeader({ text, kind, id }: Props) {
  const dispatch = useDispatch();
  function handleOnSubmit(text: string) {
    dispatch(editSectionHeader({ id, text }));
  }

  return (
    <div className="text-xl font-semibold mt-4 mb-2">
      <DynamicInput
        text={text}
        handleOnSubmit={handleOnSubmit}
        inputWidth="full"
        placeholderText={"Enter Header Text"}
      />
    </div>
  );
}

export default SectionHeader;
