"use client";

import BuilderColumn from "@/app/_components/BuilderColumn";
import SideResume from "@/app/_components/SideResume";
import { useScale } from "@/app/_context/ScaleContext";
import { Metadata } from "next";

//TODO 8/29/2025:
//In the left column, a filter section that applies to data
//Something like this:
/*
Bullets - Jobs - Skills - Education (These are buttons in a row)

Clicking on one of them would show filtering options.
Could be written out in plain English.

Something like this, if Bullets were selected:

"The only bullet points I want to see are from [particular job] or [particular job]"

*/

//TODO 8/29/2025: this will not work in client components.
//this component is only using useScale - will rework where the scaling is happening later
// export const metadata: Metadata = {
//   title: "Modular Builder",
// };

export default function Page() {
  const { scale } = useScale();
  return (
    <div className="flex h-dvh w-full">
      <BuilderColumn />
      <div className="flex-1 overflow-auto w-full bg-gray-500 pt-5 px-5 grid items-start justify-items-center">
        <SideResume scale={scale} />
      </div>
    </div>
  );
}
