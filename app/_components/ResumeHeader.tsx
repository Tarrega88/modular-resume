import { UserInfo, UserLinkProps } from "@/state/types";
import UserLink from "./UserLink";

import { locationDefault } from "@/state/resumeSlice";
import DeleteElementButton from "./DeleteElementButton";
import { widthWithoutMargin } from "./SideResumeInner";
import RelativeAbsRight from "./wrappers/RelativeAbsRight";
import DynamicInput from "./DynamicInput";
function ResumeHeader({
  kind,
  fullName = "Full Name",
  email = "email@email.com",
  phoneNumber = "(123) 123-4567",
  location = locationDefault,
  // link1,
  // link2,
  renderIndex,
}: UserInfo & {
  renderIndex: number /*link1?: UserLinkProps; link2?: UserLinkProps;*/;
}) {
  //TODO 9/7/2026: hook up reducer:
  function handleOnSubmit() {}

  return (
    <div className="group">
      <RelativeAbsRight>
        <DeleteElementButton renderIndex={renderIndex} />
      </RelativeAbsRight>
      <div>
        <div className="text-3xl font-semibold">
          <DynamicInput
            text={fullName}
            handleOnSubmit={handleOnSubmit}
            inputWidth="full"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <DynamicInput
          text={email}
          handleOnSubmit={handleOnSubmit}
          inputWidth="full"
        />
        <DynamicInput
          text={phoneNumber}
          handleOnSubmit={handleOnSubmit}
          inputWidth="full"
        />
        <DynamicInput
          text={location}
          handleOnSubmit={handleOnSubmit}
          inputWidth="full"
        />
      </div>
    </div>
  );
}

export default ResumeHeader;
