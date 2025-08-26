import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../_lib/dexie/db";
import DynamicInput from "./DynamicInput";

function BulletPoint({ id, text }: { id: string; text: string }) {
  //TODO 8/23/2025: bullets should probably be passed in as a prop from higher up,
  //either a new component or SideResume.
  // The text will be a placeholder OR the text from the db bulletpoint
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
