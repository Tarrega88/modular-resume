import { useState } from "react";
import { useDispatch } from "react-redux";
import { editJobSection, editJobTitle } from "@/state/resumeSlice";

function JobSectionInput({
  id,
  text,
  field,
  textAlign,
}: {
  id: string;
  text: string;
  field: "jobTitle" | "location" | "companyName";
  textAlign: "left" | "right" | "center";
}) {
  const [tempText, setTempText] = useState(text);
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

  function handleEnter(e: any) {
    if (e.key === "Enter") {
      dispatch(editJobSection({ id, text: tempText, field }));
      setShowInput(false);
    }
  }

  function handleBlur() {
    dispatch(editJobSection({ id, text: tempText, field }));
    setShowInput(false);
  }

  return showInput ? (
    <input
      style={{ textAlign }}
      className="w-1/2"
      autoFocus
      value={tempText}
      onChange={(e) => setTempText(e.target.value)}
      onKeyDown={handleEnter}
      onBlur={handleBlur}
    />
  ) : (
    <div
      style={{ textAlign }}
      className="hover:bg-sky-50 w-1/2"
      onClick={() => setShowInput(true)}
    >
      {tempText}
    </div>
  );
}

export default JobSectionInput;
