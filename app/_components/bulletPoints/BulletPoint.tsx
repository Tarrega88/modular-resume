import { useDispatch, useSelector } from "react-redux";
import DynamicInput from "../DynamicInput";
import { BulletPointProps, editBulletPoint } from "@/state/resumeSlice";
import { RootState } from "@/state/store";

function BulletPoint({
  id,
  text,
  kind,
  renderIndex,
}: BulletPointProps & { renderIndex: number }) {
  const dispatch = useDispatch();

  const options = Object.values(
    useSelector((state: RootState) => state.resume.data.bulletPoints)
  );

  function editData(id: string, text: string) {
    dispatch(editBulletPoint({ id, text }));
  }

  return (
    <DynamicInput
      options={options}
      kind={kind}
      id={id}
      renderIndex={renderIndex}
      text={text}
      editData={editData}
    />
  );
}

export default BulletPoint;
