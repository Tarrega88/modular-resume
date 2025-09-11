import { CustomHeaderProps, SectionHeaderProps } from "@/state/types";
import DynamicInput from "./DynamicInput";
import DeleteElementButton from "./DeleteElementButton";
import { widthWithoutMargin } from "./SideResumeInner";
import { useDispatch } from "react-redux";
import { editSectionHeader } from "@/state/resumeSlice";

//TODO 9/10/2025: Add a few of these in the slice and type that are something like userHeader1 (2, 3, 4, etc.)

type Props = {
  text: string;
  kind: "sectionHeader";
  renderIndex: number;
  id: string;
};

function SectionHeader({ text, kind, id }: Props) {
  const dispatch = useDispatch();
  function handleOnSubmit(text: string) {
    // if (kind === "customHeader") {
    //   if (id !== undefined) {
    //     dispatch(editCustomHeader({ text, kind: "customHeader", id }));
    //   }
    // } else {
    //   dispatch(editSectionHeader({ text, kind }));
    // }
  }

  return (
    <div className="text-xl font-semibold mt-5">
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
