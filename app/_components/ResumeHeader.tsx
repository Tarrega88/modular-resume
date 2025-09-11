import { UserInfoProps, UserLinkProps } from "@/state/types";
import UserLink from "./UserLink";

import { editUserInfo, locationDefault } from "@/state/resumeSlice";
import DeleteElementButton from "./DeleteElementButton";
import { widthWithoutMargin } from "./SideResumeInner";
import DynamicInput from "./DynamicInput";
import { useDispatch } from "react-redux";
function ResumeHeader({
  kind,
  fullName = "Full Name",
  email = "email@email.com",
  phoneNumber = "(123) 123-4567",
  location = locationDefault,
  link1,
  // link2,
  renderIndex,
}: UserInfoProps & {
  renderIndex: number;
  link1?: UserLinkProps /*link1?: UserLinkProps; link2?: UserLinkProps;*/;
}) {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div className="text-3xl font-semibold">
          <DynamicInput
            text={fullName}
            handleOnSubmit={(text: string) =>
              dispatch(editUserInfo({ text, field: "fullName" }))
            }
            inputWidth="full"
            placeholderText="Enter name"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <DynamicInput
          text={email}
          handleOnSubmit={(text: string) =>
            dispatch(editUserInfo({ text, field: "email" }))
          }
          inputWidth="full"
          placeholderText="Enter email"
        />
        <DynamicInput
          text={phoneNumber}
          handleOnSubmit={(text: string) =>
            dispatch(editUserInfo({ text, field: "phoneNumber" }))
          }
          inputWidth="full"
          placeholderText="Enter phone number"
        />
        <DynamicInput
          text={location}
          handleOnSubmit={(text: string) =>
            dispatch(editUserInfo({ text, field: "location" }))
          }
          inputWidth="full"
          placeholderText="Enter location"
        />
      </div>
    </div>
  );
}

export default ResumeHeader;
