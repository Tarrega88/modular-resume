import { UserLinkProps } from "@/state/types";
import { useState } from "react";

type Props = {
  id: string;
  text: string;
  url: string;
  placeholderText?: string;
  handleOnSubmit({
    displayText,
    urlText,
  }: {
    displayText: string;
    urlText: string;
  }): void;
};

function UserLink({ id, text, url, handleOnSubmit, placeholderText }: Props) {
  //TODO 8/29/2025
  //This will have:
  //1. Possibly dynamic div/input
  //2. Two inputs, one for the display text, one for the link
  const [showInput, setShowInput] = useState(false);
  const [tempText, setTempText] = useState(text);

  const [tempUrlText, setTempUrlText] = useState(url);

  function changeDisplay() {
    handleOnSubmit({ displayText: tempText, urlText: tempUrlText });
    setShowInput(false);
  }

  // const widths = {
  //   char: `${tempText?.length || 1}ch`,
  //   full: "100%",
  //   max: "max-content",
  // };

  return showInput ? (
    <div>
      <input
        autoFocus
        value={tempText}
        onChange={(e) => setTempText(e.target.value)}
        onBlur={changeDisplay}
        onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
        // style={{ width: `${widths[inputWidth]}`, textAlign }}
      />
      <input
        autoFocus
        value={tempText}
        onChange={(e) => setTempUrlText(e.target.value)}
        onBlur={changeDisplay}
        onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
        // style={{ width: `${widths[inputWidth]}`, textAlign }}
      />
    </div>
  ) : (
    <div
      // style={
      //   divWidth
      //     ? { width: `${widths[divWidth]}`, textAlign }
      //     : { width: "100%", textAlign }
      // }
      className="group hover:bg-sky-50 transition-all duration-150"
      onClick={() => setShowInput(true)}
    >
      {text.length > 0 ? (
        text
      ) : (
        <span className="opacity-0 group-hover:opacity-75 transition-all duration-200">
          {placeholderText ? placeholderText : "..."}
        </span>
      )}
    </div>
  );
  return <div></div>;
}

export default UserLink;
