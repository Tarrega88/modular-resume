import { UserInfoProps } from "@/state/types";
import UserLink from "./UserLink";

import {
  toggleUserBool,
  editUserInfo,
  locationDefault,
} from "@/state/resumeSlice";
import { widthWithoutMargin } from "./SideResumeInner";
import DynamicInput from "./DynamicInput";
import { useDispatch, useSelector } from "react-redux";
import RelativeAbsRight from "./wrappers/RelativeAbsRight";
import SideLinkButton from "./SideLinkButton";
import IconWrapper from "./wrappers/IconWrapper";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaLocationPin } from "react-icons/fa6";
import { FiUnderline } from "react-icons/fi";
import RelativeAbsLeft from "./wrappers/RelativeAbsLeft";
import { MdOutlineTitle } from "react-icons/md";

function ResumeHeader({
  kind,
  fullName = "Full Name",
  professionTitle,
  showProfession,
  hasUnderline,
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
    dispatch(toggleUserBool({ field, show }));
  }

  const underlineStyle = hasUnderline ? "border-b" : "";

  const underlineButtonStyle = hasUnderline
    ? "text-slate-800 hover:text-slate-600"
    : "text-gray-400 hover:text-slate-500";

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
      <RelativeAbsLeft hPosition="normal" vPosition="med">
        <MdOutlineTitle
          className="text-xl"
          onClick={() =>
            dispatch(
              toggleUserBool({ field: "showProfession", show: !showProfession })
            )
          }
        />
      </RelativeAbsLeft>
      <RelativeAbsLeft hPosition="normal" vPosition="low">
        <FiUnderline
          className={`text-xl translate-y-0.5 ${underlineButtonStyle}`}
          onClick={() =>
            dispatch(
              toggleUserBool({ field: "hasUnderline", show: !hasUnderline })
            )
          }
        />
      </RelativeAbsLeft>
      <div className="flex justify-between">
        <div className="text-3xl font-semibold w-full">
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
      <div
        className={`font-semibold ${underlineStyle} border-b-neutral-400 pb-1`}
      >
        {showProfession ? (
          <DynamicInput
            text={professionTitle}
            handleOnSubmit={(text: string) =>
              dispatch(editUserInfo({ text, field: "professionTitle" }))
            }
            inputWidth="full"
            placeholderText="Profession"
          />
        ) : null}
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex w-full">
          <IconWrapper>
            <CiMail className="text-xl" />
          </IconWrapper>
          <DynamicInput
            text={email}
            handleOnSubmit={(text: string) =>
              dispatch(editUserInfo({ text, field: "email" }))
            }
            inputWidth="full"
            divWidth="full"
            placeholderText="Enter email"
          />
        </div>
        <div className="flex w-full">
          <IconWrapper>
            <FaPhone />
          </IconWrapper>
          <DynamicInput
            text={phoneNumber}
            handleOnSubmit={(text: string) =>
              dispatch(editUserInfo({ text, field: "phoneNumber" }))
            }
            inputWidth="full"
            divWidth="full"
            placeholderText="Enter phone number"
          />
        </div>
        <div className="flex w-full">
          <IconWrapper>
            <CiLocationOn className="text-xl" />
          </IconWrapper>
          <DynamicInput
            text={location}
            handleOnSubmit={(text: string) =>
              dispatch(editUserInfo({ text, field: "location" }))
            }
            inputWidth="full"
            divWidth="full"
            placeholderText="Enter location"
          />
        </div>
      </div>
    </div>
  );
}

export default ResumeHeader;
