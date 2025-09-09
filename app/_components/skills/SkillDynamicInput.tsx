import { dragSkill } from "@/state/resumeSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  text: string;
  handleOnSubmit(e: string): void;
  inputWidth: "char" | "full";
  list: string[];
  id: string;
};

//TODO 9/7/2025: might add a padding prop here

function SkillDynamicInput({
  text,
  list,
  handleOnSubmit,
  inputWidth,
  id,
}: Props) {
  const [showInput, setShowInput] = useState(false);

  const [dragFromIndex, setDragFromIndex] = useState(-1);
  const [dragToIndex, setDragToIndex] = useState(-1);

  const [tempText, setTempText] = useState(text);
  const isDragging = dragFromIndex > -1;

  const dispatch = useDispatch();

  function changeDisplay() {
    handleOnSubmit(tempText);
    setShowInput(false);
    //this works but I'm not a fan of mimicking the state - it violates the one source of truth concept
    // setTempText(
    //   tempText
    //     .split(",")
    //     .map((e) => e.trim())
    //     .join(", ")
    // );
  }

  const widths = {
    char: `${tempText.length || 1}ch`,
    full: "100%",
  };

  function handleOnKeyDown(e) {
    if (e.key === "Space" && tempText[tempText.length - 2] === " ")
      if (e.key === "Enter") changeDisplay();
  }

  function handleOnChange(e: any) {
    const sanitized = e.target.value.replace(/\s{2,}/g, " ");
    setTempText(sanitized);
  }

  function handleOnDragEnd(fromIndex: number, toIndex: number, id: string) {
    dispatch(dragSkill({ fromIndex, toIndex, id }));
    setDragToIndex(-1);
    setDragFromIndex(-1);
  }
  return showInput ? (
    <input
      style={{ width: widths[inputWidth] }}
      autoFocus
      value={tempText}
      onChange={handleOnChange}
      onBlur={changeDisplay}
      onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
    />
  ) : (
    <div
      className="hover:bg-sky-50 transition-all duration-150 w-full"
      onClick={() => setShowInput(true)}
    >
      <ul className="flex">
        {list.map((e, i) => (
          <li
            key={i}
            onDragEnter={() => setDragToIndex(i)}
            className={i === dragFromIndex ? "opacity-25" : ""}
          >
            {isDragging && dragToIndex === i && dragFromIndex > dragToIndex ? (
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ) : null}
            <span
              className={`transition-transform duration-150 outline-sky-400 hover:outline-1 rounded-sm`}
              draggable
              onDragStart={() => setDragFromIndex(i)}
              onDragEnd={() => handleOnDragEnd(i, dragToIndex, id)}
            >
              {e}
            </span>
            {isDragging && dragToIndex === i && dragFromIndex <= dragToIndex ? (
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ) : null}

            {i < list.length - 1 && <span>,&nbsp;</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillDynamicInput;
