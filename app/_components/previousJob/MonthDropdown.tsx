import { useState } from "react";

function MonthDropdown({
  month,
  monthDisplay,
  handleOnChange,
  showDropdown,
  handleShowDropdown,
}: {
  month: number;
  monthDisplay: string[];
  handleOnChange(e: any): void;
  showDropdown: boolean;
  handleShowDropdown(e: boolean): void;
}) {
  //TODO 9/2/2025: Since these will be close to other dropdowns,
  //I might make a custom dropdown instead of using <select>

  return showDropdown ? (
    <div>
      <select
        className="outline-none"
        value={month}
        onChange={(e) => handleOnChange(e.target.value)}
        onMouseLeave={() => handleShowDropdown(false)}
      >
        {monthDisplay.map((e, i) => (
          <option key={i} value={i}>
            {e}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <div onMouseEnter={() => handleShowDropdown(true)}>
      {monthDisplay[month]}
    </div>
  );
}

export default MonthDropdown;
