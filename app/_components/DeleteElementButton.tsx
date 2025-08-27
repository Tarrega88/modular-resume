import { TiDelete } from "react-icons/ti";
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeResumeItem } from "@/state/resumeSlice";

function DeleteElementButton({ renderIndex }: { renderIndex: number }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeResumeItem({ renderIndex }));
  }
  return (
    <button
      className="text-red-600 text-xl cursor-pointer hover:text-red-800"
      onClick={handleRemove}
    >
      <TiDelete />
    </button>
  );
}

export default DeleteElementButton;
