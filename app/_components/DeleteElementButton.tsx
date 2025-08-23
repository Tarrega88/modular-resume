import { TiDelete } from "react-icons/ti";
import { TiDeleteOutline } from "react-icons/ti";

function DeleteElementButton() {
  return (
    <button className="text-red-600 text-xl cursor-pointer hover:text-red-900">
      <TiDelete />
    </button>
  );
}

export default DeleteElementButton;
