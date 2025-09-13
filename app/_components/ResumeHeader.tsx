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
  professionTitle,
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

  const gridClass =
    showLink1 && showLink2
      ? "grid-cols-[8fr_5fr_5fr_1fr_1fr]"
      : showLink1 || showLink2
      ? ""
      : "";
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
        <div className="flex gap-4 text-nowrap">
          {showLink1 ? (
            <UserLink
              id={userLink1}
              inputWidth="char"
              divWidth="full"
              textAlign="right"
            />
          ) : null}
          {showLink2 ? (
            <UserLink
              id={userLink2}
              inputWidth="char"
              divWidth="full"
              textAlign="right"
            />
          ) : null}
        </div>
      </div>
      <div className="font-semibold border-b-1 pb-1">
        <DynamicInput
          text={professionTitle}
          handleOnSubmit={(text: string) =>
            dispatch(editUserInfo({ text, field: "professionTitle" }))
          }
          inputWidth="full"
          placeholderText="Profession"
        />
      </div>
      {/* <div className="flex mt-2 justify-between"> */}
      <div className="flex justify-between gap-4 mt-2">
        <DynamicInput
          text={email}
          handleOnSubmit={(text: string) =>
            dispatch(editUserInfo({ text, field: "email" }))
          }
          inputWidth="full"
          divWidth="full"
          placeholderText="Enter email"
        />
        <DynamicInput
          text={phoneNumber}
          handleOnSubmit={(text: string) =>
            dispatch(editUserInfo({ text, field: "phoneNumber" }))
          }
          inputWidth="full"
          divWidth="full"
          placeholderText="Enter phone number"
        />
        <DynamicInput
          text={location}
          handleOnSubmit={(text: string) =>
            dispatch(editUserInfo({ text, field: "location" }))
          }
          inputWidth="full"
          divWidth="full"
          placeholderText="Enter location"
        />

        {/* {showLink1 ? (
          <UserLink
            id={userLink1}
            inputWidth="char"
            divWidth="full"
            textAlign="right"
          />
        ) : null}
        {showLink2 ? (
          <UserLink
            id={userLink2}
            inputWidth="char"
            divWidth="full"
            textAlign="right"
          />
        ) : null} */}
      </div>
    </div>
  );
}

export default ResumeHeader;
