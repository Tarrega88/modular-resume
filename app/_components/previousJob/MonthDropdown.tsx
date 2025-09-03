import { months } from "@/app/_lib/utils/months";

function MonthDropdown({
  selected,
  monthType,
}: {
  selected: number;
  monthType: "start" | "end";
}) {
  function handleOnChange() {}

  return (
    <select value={months[selected]} onChange={handleOnChange}>
      {months.map((e, i) => (
        <option key={i} value={i}>
          {e}
        </option>
      ))}
    </select>
  );
}

export default MonthDropdown;
