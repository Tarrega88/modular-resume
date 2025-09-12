import { UserInfoProps } from "@/state/types";
import UserLink from "./UserLink";

import { editUserInfo, locationDefault } from "@/state/resumeSlice";
import DeleteElementButton from "./DeleteElementButton";
import { widthWithoutMargin } from "./SideResumeInner";
import DynamicInput from "./DynamicInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
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

  function handleUrlTextSubmit() {}
  function handleUrlSubmit() {}

  return (
    <div className="mb-8">
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
              divWidth="full"
              textAlign="right"
            />
          ) : null}
          {showLinks === 2 ? (
            <UserLink
              id={userLink2}
              inputWidth="char"
              divWidth="full"
              textAlign="right"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ResumeHeader;
