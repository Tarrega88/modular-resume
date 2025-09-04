import { useState } from "react";
import MonthDropdown from "./MonthDropdown";
import { longMonths, months } from "@/app/_lib/utils/months";
import { useDispatch } from "react-redux";
import { setStartMonth } from "@/state/resumeSlice";

function JobStart({
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
    dispatch(setStartMonth({ id, month }));
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

export default JobStart;
