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
  const [displayMode, setDisplayMode] = useState("div");
  const [tempText, setTempText] = useState(text);
  const [tempUrl, setTempUrl] = useState(url);

  function changeDisplay() {
    switch (displayMode) {
      case "div":
        setDisplayMode("textInput");
        break;
      case "textInput":
        setDisplayMode("urlInput");
        break;
      case "urlInput":
        setDisplayMode("div");
        break;
    }
  }

  // function changeDisplay() {
  //   handleOnSubmit({ displayText: tempText, urlText: tempUrlText });
  //   setShowInput(false);
  // }

  // const widths = {
  //   char: `${tempText?.length || 1}ch`,
  //   full: "100%",
  //   max: "max-content",
  // };

  return displayMode === "textInput" ? (
    <input
      autoFocus
      value={tempText}
      onChange={(e) => setTempText(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
      onBlur={changeDisplay}
      // style={{ width: `${widths[inputWidth]}`, textAlign }}
    />
  ) : displayMode === "urlInput" ? (
    <input
      autoFocus
      value={tempUrl}
      onChange={(e) => setTempUrl(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && changeDisplay()}
      onBlur={changeDisplay}
      // style={{ width: `${widths[inputWidth]}`, textAlign }}
    />
  ) : (
    <div
      // style={
      //   divWidth
      //     ? { width: `${widths[divWidth]}`, textAlign }
      //     : { width: "100%", textAlign }
      // }
      className="group hover:bg-sky-50 transition-all duration-150"
      onClick={() => changeDisplay()}
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
