import { PersonalInfoProps } from "@/state/types";
import HeaderDynamicInput from "./HeaderDynamicInput";
import UserLink from "./UserLink";

import { locationDefault } from "@/state/resumeSlice";
import DeleteElementButton from "./DeleteElementButton";
import { widthWithoutMargin } from "./SideResumeInner";
function ResumeHeader({
  id,
  kind,
  fullName = "Full Name",
  email = "email@email.com",
  phoneNumber = "(123) 123-4567",
  location = locationDefault,
  link1,
  link2,
  renderIndex,
}: PersonalInfoProps & { renderIndex: number }) {
  return (
    <div className="group">
      <div className="relative">
        <div className="absolute left-[101%] group-hover:opacity-100 opacity-0 transition-all duration-150">
          <DeleteElementButton renderIndex={renderIndex} />
        </div>
      </div>
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
