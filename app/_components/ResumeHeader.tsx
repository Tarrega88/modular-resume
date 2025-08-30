import { PersonalInfoProps } from "@/state/resumeSlice";
import DynamicInput from "./DynamicInput";
import HeaderDynamicInput from "./HeaderDynamicInput";
import UserLink from "./UserLink";
//TODO 8/23/2025: Consider using a separate component for the header instead of DynamicInput,
//since this info is generally more consistent.
function ResumeHeader({
  id,
  kind,
  fullName = "Full Name",
  email = "email@email.com",
  phoneNumber = "(123) 123-4567",
  location = "City, ST",
  link1,
  link2,
}: PersonalInfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-semibold">
        <HeaderDynamicInput>{fullName}</HeaderDynamicInput>
      </h1>
      <div className="grid grid-cols-[3fr_1fr]">
        <div className="grid grid-cols-[3fr_2fr_2fr]">
          <HeaderDynamicInput>{email}</HeaderDynamicInput>
          <HeaderDynamicInput>{phoneNumber}</HeaderDynamicInput>
          <HeaderDynamicInput>{location}</HeaderDynamicInput>
        </div>
        <div className="flex justify-end gap-8">
          <UserLink />
          <UserLink />
        </div>
      </div>
    </div>
  );
}

export default ResumeHeader;
