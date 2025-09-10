import { Kinds } from "@/state/types";
import { IoDuplicate, IoDuplicateSharp } from "react-icons/io5";
import { TbCircleLetterDFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";

function DuplicateButton({
  kind,
  renderIndex,
}: {
  kind: Kinds;
  renderIndex: number;
}) {
  const dispatch = useDispatch();

  return (
    <button className="text-xl cursor-pointer text-sky-600 transition-all duration-200 hover:text-sky-500">
      <IoDuplicate />
    </button>
  );
}

export default DuplicateButton;
