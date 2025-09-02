import { useState } from "react";
import { useDispatch } from "react-redux";
import DropdownElement from "../DropdownElement";
import JobLocationDropdown from "./JobLocationDropdown";

function JobLocationInput({ id, text }: { id: string; text: string }) {
  const [tempText, setTempText] = useState(text);
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

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
      className="w-1/2 text-right"
      autoFocus
      value={tempText}
      onChange={(e) => setTempText(e.target.value)}
      onKeyDown={handleEnter}
      onBlur={handleBlur}
    />
  ) : (
    <div
      className="hover:bg-sky-50 w-1/2 text-right h-full relative"
      onClick={() => setShowInput(true)}
    >
      {tempText}
      <div className="absolute hover:opacity-100 h-full w-full top-1/2">
        <div className="absolute -right-6">
          <div
            className="flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <DropdownElement
              options={[
                { id: "0", text: "A" },
                { id: "1", text: "B" },
              ]}
              kind={"prevJob"}
              id={id}
              renderIndex={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobLocationInput;

{
  /*
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

    */
}
