import { useState } from "react";
import MonthDropdown from "./MonthDropdown";

function JobStart({ id }: { id: string }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return showDropdown ? (
    <MonthDropdown selected={0} monthType="start" />
  ) : (
    <div></div>
  );
}

export default JobStart;
