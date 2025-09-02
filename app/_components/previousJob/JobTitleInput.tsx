import { editJobTitle } from "@/state/resumeSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function JobTitleInput({ id, text }: { id: string; text: string }) {
  const [tempText, setTempText] = useState(text);
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

  function handleEnter(e: any) {
    if (e.key === "Enter") {
      dispatch(editJobTitle({ id, text: tempText }));
      setShowInput(false);
    }
  }

  function handleBlur() {
    dispatch(editJobTitle({ id, text: tempText }));
    setShowInput(false);
  }

  return showInput ? (
    <input
      className="w-1/2"
      autoFocus
      value={tempText}
      onChange={(e) => setTempText(e.target.value)}
      onKeyDown={handleEnter}
      onBlur={handleBlur}
    />
  ) : (
    <div className="hover:bg-sky-50 w-1/2" onClick={() => setShowInput(true)}>
      {tempText}
    </div>
  );
}

export default JobTitleInput;
