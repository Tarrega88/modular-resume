import { useState } from "react";
import MonthDropdown from "./MonthDropdown";
import { longMonths, months } from "@/app/_lib/utils/months";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

function JobStart({
  id,
  monthType,
  month,
}: {
  id: string;
  monthType: "short" | "long";
  month: number;
}) {
  //   const [showDropdown, setShowDropdown] = useState(true);

  const monthDisplay = monthType === "short" ? months : longMonths;

  return (
    <div className="w-full hover:bg-sky-100 text-right">
      {/* <div>{monthDisplay[0]}</div> */}

      <MonthDropdown
        selected={month}
        startOrEnd="start"
        monthDisplay={monthDisplay}
      />
    </div>
  );
}

export default JobStart;
