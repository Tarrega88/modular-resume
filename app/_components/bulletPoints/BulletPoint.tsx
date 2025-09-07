import { useDispatch, useSelector } from "react-redux";
import { editBulletPoint } from "@/state/resumeSlice";
import { RootState } from "@/state/store";
import BPDisplayAndInput from "./BPDisplayAndInput";
import { BulletPointProps } from "@/state/types";

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
    <div className="flex">
      <span className="mx-2">•</span>
      <BPDisplayAndInput
        options={options}
        kind={kind}
        id={id}
        renderIndex={renderIndex}
        text={text}
        editData={editData}
      />
    </div>
  );
}

export default BulletPoint;
