import { PersonalInfoProps } from "@/state/resumeSlice";
import DynamicInput from "./DynamicInput";
import HeaderDynamicInput from "./HeaderDynamicInput";
import UserLink from "./UserLink";

import { locationDefault } from "@/state/resumeSlice";
//TODO 8/23/2025: Consider using a separate component for the header instead of DynamicInput,
//since this info is generally more consistent.
function ResumeHeader({
  id,
  kind,
  fullName = "Full Name",
  email = "email@email.com",
  phoneNumber = "(123) 123-4567",
  location = locationDefault,
  link1,
  link2,
}: PersonalInfoProps) {
  return (
    <div>
      <div>
        <span className="text-3xl font-semibold">
          <HeaderDynamicInput text={fullName} />
        </span>
      </div>
      <div className="flex gap-4">
        <HeaderDynamicInput text={email} />
        <HeaderDynamicInput text={phoneNumber} />
        <HeaderDynamicInput text={location} />
      </div>
    </div>
  );
}

export default ResumeHeader;
