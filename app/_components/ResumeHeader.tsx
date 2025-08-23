import DynamicInput from "./DynamicInput";
//TODO 8/23/2025: Consider using a separate component for the header instead of DynamicInput,
//since this info is generally more consistent.
function ResumeHeader() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">First Last</h1>
      <div className="flex justify-between text-lg">
        <div>email@email.com</div>
        <div>(123) 123-4567</div>
        <div>City, ST</div>
        <div>Link</div>
        <div>Link</div>
        {/* <DynamicInput>email@email.com</DynamicInput>
        <DynamicInput>(123) 123-4567</DynamicInput>
        <DynamicInput>City, ST</DynamicInput>
        <DynamicInput>Link</DynamicInput>
        <DynamicInput>Link</DynamicInput> */}
      </div>
    </div>
  );
}

export default ResumeHeader;
