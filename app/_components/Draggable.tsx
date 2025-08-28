import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

function Draggable({ children }: { children: React.ReactNode }) {
  const { dragFromIndex, dragToIndex } = useSelector(
    (state: RootState) => state.resume
  );

  return <div draggable>{children}</div>;
}

export default Draggable;
