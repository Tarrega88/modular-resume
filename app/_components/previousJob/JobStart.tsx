import { useState } from "react";
import MonthDropdown from "./MonthDropdown";
import { longMonths, months } from "@/app/_lib/utils/months";

function JobStart({
  id,
  monthType,
}: {
  id: string;
  monthType: "short" | "long";
}) {
  //   const [showDropdown, setShowDropdown] = useState(true);

  const monthDisplay = monthType === "short" ? months : longMonths;

  return (
    <div className="w-max hover:bg-sky-100 text-right">
      <div className="relative">
        <div>{monthDisplay[0]}</div>
        <div
          className="opacity-0 hover:opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          <MonthDropdown
            selected={0}
            startOrEnd="start"
            monthDisplay={monthDisplay}
          />
        </div>
      </div>
    </div>
  );
}

export default JobStart;
