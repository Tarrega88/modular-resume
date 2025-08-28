import DynamicInput from "./DynamicInput";
import HeaderDynamicInput from "./HeaderDynamicInput";
//TODO 8/23/2025: Consider using a separate component for the header instead of DynamicInput,
//since this info is generally more consistent.
function ResumeHeader() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">First Last</h1>
      {/* <div className="flex justify-between text-lg"> */}
      <div className="grid grid-cols-[3fr_1fr]">
        <div className="grid grid-cols-[3fr_2fr_2fr]">
          <HeaderDynamicInput>email@email.com</HeaderDynamicInput>
          {/* <div className="">email@email.com</div> */}
          {/* <input className="w-max min-w-0" value="email@email.com" /> */}
          <HeaderDynamicInput>(123) 123-4567</HeaderDynamicInput>
          <HeaderDynamicInput>City, ST</HeaderDynamicInput>
        </div>
        <div className="flex justify-end gap-8">
          <HeaderDynamicInput>Portfolio</HeaderDynamicInput>
          <HeaderDynamicInput>Github</HeaderDynamicInput>
        </div>
      </div>
    </div>
  );
}

export default ResumeHeader;
