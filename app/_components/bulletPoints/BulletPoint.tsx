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
  // const { dragFromIndex, dragToIndex } = useSelector(
  //   (state: RootState) => state.resume
  // );

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
// import { useState } from "react";

// function BulletPoint({ id, text }: { id: string; text: string }) {
//   const [tempText, setTempText] = useState(text);
//   const [isInput, setIsInput] = useState(false);

//   function handleTurnOnInput() {
//     setIsInput(true);
//   }

//   function handleTurnOffInput() {
//     setIsInput(false);
//   }

//   return isInput ? (
//     <input
//       style={{ width: "100%", lineHeight: 1.4 }}
//       value={tempText}
//       autoFocus
//       onChange={(e) => setTempText(e.target.value)}
//       onKeyDown={(e) => {
//         if (e.key === "Enter") handleTurnOffInput();
//       }}
//       onBlur={handleTurnOffInput}
//     />
//   ) : (
//     <div onClick={handleTurnOnInput} style={{ width: "100%", lineHeight: 1.4 }}>
//       {tempText}
//     </div>
//   );
// }

// export default BulletPoint;
