import {
  dragResumeItem,
  setDragFromIndex,
  setDragToIndex,
} from "@/state/resumeSlice";
import { RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";

function Draggable({
  children,
  renderIndex,
}: {
  children: React.ReactNode;
  renderIndex: number;
}) {
  const dispatch = useDispatch();

  const { dragFromIndex, dragToIndex, currentResumeId, resumes } = useSelector(
    (state: RootState) => state.resume
  );

  function handleDragStart() {
    dispatch(setDragFromIndex(renderIndex));
  }

  function handleDragEnd() {
    dispatch(dragResumeItem());
    dispatch(setDragFromIndex(-1));
  }

  function handleDragEnter(num: number) {
    dispatch(setDragToIndex(num));
  }

  const dragStyle =
    dragFromIndex !== -1 && dragToIndex <= renderIndex ? "translate-y-3" : "";

  const outerDragStyle =
    dragFromIndex === renderIndex ? "hover:opacity-50" : "hover:opacity-100";

  return (
    <div
      draggable
      className={`${dragStyle} ${outerDragStyle}`}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={() => handleDragEnter(renderIndex)}
    >
      {children}
    </div>
  );
}

export default Draggable;

{
  /*
         <div
        // onDragEnter={() => handleDragEnter(renderIndex - 1)}
        className="absolute bg-blue-400 h-1/2 w-full opacity-25 top-0 z-10"
      ></div>
      <div
        // onDragEnter={() => handleDragEnter(renderIndex)}
        className="absolute bg-emerald-600 h-1/2 w-full opacity-25 bottom-0 z-10"
      ></div>
    */
}
