import { useState } from "react";
import MonthDropdown from "./MonthDropdown";
import { longMonths, months } from "@/app/_lib/utils/months";
import { useDispatch } from "react-redux";
import { updatePrevJobField } from "@/state/resumeSlice";

function JobEnd({
  id,
  monthType,
  month,
}: {
  id: string;
  monthType: "short" | "long";
  month: number;
}) {
  const monthDisplay = monthType === "short" ? months : longMonths;
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  function handleOnChange(month: number) {
    setShowDropdown(false);
    dispatch(updatePrevJobField({ id, field: "monthEnded", value: month }));
  }

  function handleShowDropdown(bool: boolean) {
    setShowDropdown(bool);
  }

  return (
    <div className="w-full hover:bg-sky-100 text-right">
      <MonthDropdown
        month={month}
        monthDisplay={monthDisplay}
        handleOnChange={handleOnChange}
        showDropdown={showDropdown}
        handleShowDropdown={handleShowDropdown}
      />
    </div>
  );
}

export default JobEnd;
