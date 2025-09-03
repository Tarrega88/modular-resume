function MonthDropdown({
  selected,
  startOrEnd,
  monthDisplay,
}: {
  selected: number;
  startOrEnd: "start" | "end";
  monthDisplay: string[];
}) {
  function handleOnChange() {}

  //TODO 9/2/2025: Since these will be close to other dropdowns,
  //I might make a custom dropdown instead of using <select>

  return (
    <div className="absolute top-1/2 -translate-y-1/2 -right-6 text-base">
      {/* <select
        className="w-4 outline-none"
        value={monthDisplay[selected]}
        onChange={handleOnChange}
      >
        {monthDisplay.map((e, i) => (
          <option key={i} value={i}>
            {e}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default MonthDropdown;
