import BuilderColumn from "@/app/_components/BuilderColumn";
import SideResume from "@/app/_components/SideResume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modular Resume",
};

export default function Page() {
  return (
    <div className="flex h-dvh w-full">
      <BuilderColumn />
      <div className="flex-1 overflow-auto w-full bg-gray-500 pt-5 px-5 grid items-start justify-items-center">
        <SideResume />
      </div>
    </div>
  );
}

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
