import { SkillProps } from "@/state/types";
import DynamicInput from "../DynamicInput";
import SkillDynamicInput from "./SkillDynamicInput";
import { useDispatch } from "react-redux";
import {
  dragSkill,
  editSkillCategory,
  editSkills,
  setShowCategory,
} from "@/state/resumeSlice";
import { useState } from "react";
import RelativeAbsRight from "../wrappers/RelativeAbsRight";
import DeleteElementButton from "../DeleteElementButton";
import RelativeAbsLeft from "../wrappers/RelativeAbsLeft";
import { MdLabel } from "react-icons/md";

//Also, I think I want to allow for creation of categories, like:
//Technologies, Software, etc.

//I don't know if there should be any special consideration for grouping those with skills in the data or not

function SkillSection({
  id,
  category,
  showCategory,
  kind,
  list,
  renderIndex,
}: SkillProps & { renderIndex: number }) {
  const dispatch = useDispatch();
  function handleOnSubmit(text: string) {
    dispatch(editSkills({ id, text }));
  }

  const text = list.join(", ");

  function handleCategorySubmit(catText: string) {
    dispatch(editSkillCategory({ id, text: catText }));
  }

  /*
          {showCategory ? (
          <li
            className="pr-2 font-semibold"
            onClick={(e) => e.stopPropagation()}
          >
            <DynamicInput
              text={categoryName}
              handleOnSubmit={(e) => setCategoryName(e)}
              inputWidth="char"
            />
          </li>
        ) : // <li className="pr-2 font-semibold">Technologies:</li>
        null}
  */

  return (
    <div className="group w-full">
      {/* <DynamicInput
        text={text}
        handleOnSubmit={handleOnSubmit}
        inputWidth="full"
        key={text}
      /> */}
      <RelativeAbsRight>
        <DeleteElementButton renderIndex={renderIndex} />
      </RelativeAbsRight>
      <RelativeAbsLeft hPosition="normal">
        <div className="text-lg">
          <button
            className="cursor-pointer text-sky-500"
            onClick={() =>
              dispatch(setShowCategory({ id, showCategory: !showCategory }))
            }
          >
            <MdLabel />
          </button>
        </div>
      </RelativeAbsLeft>
      <div className="flex gap-1">
        {showCategory ? (
          <div className="flex font-semibold">
            <DynamicInput
              text={category + ":"}
              handleOnSubmit={handleCategorySubmit}
              inputWidth="char"
              divWidth="max"
            />
          </div>
        ) : null}
        <SkillDynamicInput
          text={text}
          list={list}
          handleOnSubmit={handleOnSubmit}
          inputWidth="full"
          id={id}
          key={text}
        />
      </div>
    </div>
  );
}

export default SkillSection;
