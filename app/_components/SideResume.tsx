"use client";

import { useState } from "react";

function SideResume() {
  //80 dpi letter: 680 width, 880 height
  const [pageStyle, setPageStyle] = useState("letter");
  const width = pageStyle === "letter" ? "w-[680px]" : "w-[0px]";
  const height = pageStyle === "letter" ? "min-h-[880px]" : "min-h-[0px]";

  return (
    <div className="bg-gray-600 h-full p-8 w-full overflow-auto">
      <div className={`bg-white overflow-auto ${height} ${width} mx-auto`}>
        <div className="text-3xl">Test</div>
      </div>
    </div>
  );
}

export default SideResume;
