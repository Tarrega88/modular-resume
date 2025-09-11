import { SummaryProps } from "@/state/types";
import DynamicTextArea from "../DynamicTextArea";
import { useDispatch } from "react-redux";
import { editSummary } from "@/state/resumeSlice";

function Summary({ id, text }: SummaryProps) {
  const dispatch = useDispatch();
  function handleOnSubmit(e: string) {
    dispatch(editSummary({ id, text: e }));
  }

  //TODO 9/11/2025: consider string literal interpretation of summary.

  return (
    <DynamicTextArea
      text={text}
      handleOnSubmit={handleOnSubmit}
      inputWidth="full"
    />
  );
}

export default Summary;
