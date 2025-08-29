import {
  dragResumeItem,
  setDragFromIndex,
  setDragHigher,
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
  const { dragFromIndex, dragToIndex, dragHigher } = useSelector(
    (state: RootState) => state.resume
  );

  const dispatch = useDispatch();

  const dragDirection = dragHigher
    ? dragToIndex < renderIndex
    : dragToIndex <= renderIndex;

  function handleDragStart() {
    dispatch(setDragFromIndex(renderIndex));
  }

  function handleDragEnd() {
    dispatch(dragResumeItem());
    dispatch(setDragFromIndex(-1));
    dispatch(setDragToIndex(-1));
  }

  function handleDragEnter() {
    dispatch(setDragHigher(renderIndex < dragFromIndex ? false : true));
    dispatch(setDragToIndex(renderIndex));
  }

  //if moving lower: dragToIndex <= renderIndex
  //if moving higher: dragToIndex < renderIndex

  const outerDragStyle =
    dragFromIndex === renderIndex ? "hover:opacity-25" : "hover:opacity-100";

  const dragStyle =
    dragFromIndex !== -1 && dragFromIndex !== renderIndex && dragDirection
      ? "translate-y-3"
      : "";

  return (
    <div
      draggable
      className={`${outerDragStyle} ${dragStyle} hover:outline-2 outline-sky-200 cursor-pointer rounded`}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
    >
      <div>{children}</div>
    </div>
  );
}

export default Draggable;
