import { UserInfoProps } from "@/state/types";
import UserLink from "./UserLink";

import {
  editShowUserLink,
  editUserInfo,
  locationDefault,
} from "@/state/resumeSlice";
import { widthWithoutMargin } from "./SideResumeInner";
import DynamicInput from "./DynamicInput";
import { useDispatch, useSelector } from "react-redux";
import RelativeAbsRight from "./wrappers/RelativeAbsRight";
import SideLinkButton from "./SideLinkButton";

function ResumeHeader({
  kind,
  fullName = "Full Name",
  email = "email@email.com",
  phoneNumber = "(123) 123-4567",
  location = locationDefault,
  renderIndex,
  userLink1,
  userLink2,
  showLink1,
  showLink2,
}: // children,
UserInfoProps & {
  renderIndex: number;
}) {
  const dispatch = useDispatch();

  function handleShowLink({
    field,
    show,
  }: {
    field: "showLink1" | "showLink2";
    show: boolean;
  }) {
    dispatch(editShowUserLink({ field, show }));
  }
  //TODO 9/12/2025: add in absolutely positioned buttons on the right to switch the links on/off
  return (
    <div className="mb-8 group">
      <RelativeAbsRight vPosition="low" hPosition="normal">
        <SideLinkButton
          id={userLink1}
          handleOnClick={() =>
            handleShowLink({ field: "showLink1", show: !showLink1 })
          }
          active={showLink1}
        />
        <SideLinkButton
          id={userLink2}
          handleOnClick={() =>
            handleShowLink({ field: "showLink2", show: !showLink2 })
          }
          active={showLink2}
        />
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
          {showLink1 ? (
            <UserLink
              id={userLink1}
              inputWidth="char"
              divWidth="max"
              textAlign="left"
            />
          ) : null}
          {showLink2 ? (
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
