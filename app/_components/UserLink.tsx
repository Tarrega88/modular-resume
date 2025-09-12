import { RootState } from "@/state/store";
import { useState } from "react";
import { useSelector } from "react-redux";

type Props = {
  id: string;
  inputWidth: "char" | "full" | "max";
  divWidth?: "char" | "full" | "max";
  textAlign?: "left" | "center" | "right";
  placeholderText?: string;
};

function UserLink({
  id,
  inputWidth,
  divWidth,
  textAlign,
  placeholderText,
}: Props) {
  //TODO 8/29/2025
  //This will have:
  //1. Possibly dynamic div/input
  //2. Two inputs, one for the display text, one for the link

  const { userLinks } = useSelector((state: RootState) => state.resume.data);

  const { text, url } = userLinks[id];

  const [showInput, setShowInput] = useState(false);
  const [tempText, setTempText] = useState(text);
  const [tempUrl, setTempUrl] = useState(url);

  function changeDisplay() {
    // handleOnSubmit({ displayText: tempText, urlText: tempUrlText });
    setShowInput(false);
  }

  const maxLength = Math.max(tempText?.length, tempUrl?.length);

  const widths = {
    char: `${maxLength || 1}ch`,
    full: "100%",
    max: "max-content",
  };

  return showInput ? (
    <div className="relative">
      <div>
        <input
          autoFocus
          className="outline-1 rounded-xs"
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
          // onBlur={changeDisplay}
          placeholder="Enter Display Text"
          style={{ width: `${widths[inputWidth]}`, textAlign }}
        />
      </div>
      <div>
        <input
          type="url"
          className="absolute outline-1 rounded-xs"
          value={tempUrl}
          onChange={(e) => setTempUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
          // onBlur={changeDisplay}
          placeholder="Enter URL"
          style={{ width: `${widths[inputWidth]}`, textAlign }}
        />
      </div>
    </div>
  ) : (
    <a
      href={url}
      style={
        divWidth
          ? { width: `${widths[divWidth]}`, textAlign }
          : { width: "100%", textAlign }
      }
      className="group hover:bg-sky-50 transition-all duration-150"
      onClick={(e) => {
        e.preventDefault();
        setShowInput(true);
      }}
    >
      {text.length > 0 ? (
        text
      ) : (
        <span className="opacity-0 group-hover:opacity-75 transition-all duration-200">
          Enter Link Name...
        </span>
      )}
    </a>
  );
}

export default UserLink;

// import { RootState } from "@/state/store";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// type Props = {
//   id: string;
//   inputWidth: "char" | "full" | "max";
//   divWidth?: "char" | "full" | "max";
//   textAlign?: "left" | "center" | "right";
//   placeholderText?: string;
// };

// function UserLink({
//   id,
//   inputWidth,
//   divWidth,
//   textAlign,
//   placeholderText,
// }: Props) {
//   //TODO 8/29/2025
//   //This will have:
//   //1. Possibly dynamic div/input
//   //2. Two inputs, one for the display text, one for the link

//   const { userLinks } = useSelector((state: RootState) => state.resume.data);

//   const { text, url } = userLinks[id];

//   const [displayMode, setDisplayMode] = useState("div");
//   const [tempText, setTempText] = useState(text);
//   const [tempUrl, setTempUrl] = useState(url);

//   function changeDisplay() {
//     switch (displayMode) {
//       case "div":
//         setDisplayMode("textInput");
//         break;
//       case "textInput":
//         setDisplayMode("urlInput");
//         break;
//       case "urlInput":
//         setDisplayMode("div");
//         break;
//     }
//   }

//   // function changeDisplay() {
//   //   handleOnSubmit({ displayText: tempText, urlText: tempUrlText });
//   //   setShowInput(false);
//   // }

//   const widths = {
//     char: `${tempText?.length >= 12 ? tempText.length : 12}ch`,
//     full: "100%",
//     max: "max-content",
//   };

//   return displayMode === "textInput" ? (
//     <input
//       autoFocus
//       className="outline-1 rounded-xs"
//       value={tempText}
//       onChange={(e) => setTempText(e.target.value)}
//       onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
//       onBlur={() => setDisplayMode("div")}
//       placeholder="Enter Display Text"
//       style={{ width: `${widths[inputWidth]}`, textAlign }}
//     />
//   ) : displayMode === "urlInput" ? (
//     <input
//       autoFocus
//       className="outline-1 rounded-xs"
//       value={tempUrl}
//       onChange={(e) => setTempUrl(e.target.value)}
//       onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
//       onBlur={() => setDisplayMode("div")}
//       placeholder="Enter URL"
//       style={{ width: `${widths[inputWidth]}`, textAlign }}
//     />
//   ) : (
//     <div
//       style={
//         divWidth
//           ? { width: `${widths[divWidth]}`, textAlign }
//           : { width: "100%", textAlign }
//       }
//       className="group hover:bg-sky-50 transition-all duration-150"
//       onClick={() => changeDisplay()}
//     >
//       {text.length > 0 ? (
//         text
//       ) : (
//         <span className="opacity-0 group-hover:opacity-75 transition-all duration-200">
//           Enter Link Name...
//         </span>
//       )}
//     </div>
//   );
// }

// export default UserLink;
