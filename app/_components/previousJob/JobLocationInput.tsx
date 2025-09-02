import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownElement from "../DropdownElement";
import JobLocationDropdown from "./JobLocationDropdown";
import { RootState } from "@/state/store";

function JobLocationInput({
  id,
  text,
  renderIndex,
}: {
  id: string;
  text: string;
  renderIndex: number;
}) {
  const [tempText, setTempText] = useState(text);
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

  const { data } = useSelector((state: RootState) => state.resume);

  function handleEnter(e: any) {
    if (e.key === "Enter") {
      //   dispatch(editJobTitle({ id, text: tempText }));
      setShowInput(false);
    }
  }

  function handleBlur() {
    //   dispatch(editJobTitle({ id, text: tempText }));
    setShowInput(false);
  }

  return showInput ? (
    <input
      className="w-1/2 text-right pr-1"
      autoFocus
      value={tempText}
      onChange={(e) => setTempText(e.target.value)}
      onKeyDown={handleEnter}
      onBlur={handleBlur}
    />
  ) : (
    <div
      className="group relative w-1/2 text-right hover:bg-sky-50 h-full"
      onClick={() => setShowInput(true)}
    >
      <div>{tempText}</div>
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-5 opacity-0
       group-hover:opacity-100 hover:opacity-100
      transition-opacity
      pointer-events-none"
      >
        <div
          className="pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <DropdownElement
            options={[
              { id: "0", text: "A" },
              { id: "1", text: "B" },
            ]}
            kind={"prevJob"}
            id={id}
            renderIndex={renderIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default JobLocationInput;
