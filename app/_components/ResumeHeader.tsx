import { UserInfoProps } from "@/state/types";
import UserLink from "./UserLink";

import { editUserInfo, locationDefault } from "@/state/resumeSlice";
import { widthWithoutMargin } from "./SideResumeInner";
import DynamicInput from "./DynamicInput";
import { useDispatch, useSelector } from "react-redux";
import RelativeAbsRight from "./wrappers/RelativeAbsRight";
import LinkCountButton from "./LinkCountButton";

function ResumeHeader({
  kind,
  fullName = "Full Name",
  email = "email@email.com",
  phoneNumber = "(123) 123-4567",
  location = locationDefault,
  renderIndex,
  userLink1,
  userLink2,
  showLinks,
}: // children,
UserInfoProps & {
  renderIndex: number;
}) {
  const dispatch = useDispatch();
  //TODO 9/12/2025: add in absolutely positioned buttons on the right to switch the links on/off
  return (
    <div className="mb-8 group">
      <RelativeAbsRight vPosition="low" hPosition="normal">
        <LinkCountButton min={0} max={2} count={showLinks} />
      </RelativeAbsRight>
      <div className="flex justify-between">
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

        <div className="flex gap-4">
          {showLinks > 0 ? (
            <UserLink
              id={userLink1}
              inputWidth="char"
              divWidth="max"
              textAlign="left"
            />
          ) : null}
          {showLinks === 2 ? (
            <UserLink
              id={userLink2}
              inputWidth="char"
              divWidth="max"
              textAlign="right"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ResumeHeader;
