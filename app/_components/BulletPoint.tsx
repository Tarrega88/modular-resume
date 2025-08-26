import { useSelector } from "react-redux";
import DynamicInput from "./DynamicInput";
import { BulletPointProps, ResumeItemProps } from "@/state/resumeSlice";
import { RootState } from "@/state/store";

function BulletPoint({ id, text }: BulletPointProps) {
  //  const bullets = useSelector(
  //   (state: RootState) => state.resume.data.bulletPoints
  // );
  return <DynamicInput options={[]}>{text}</DynamicInput>;
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
