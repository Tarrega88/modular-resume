import { SkillProps } from "@/state/types";
import DynamicInput from "../DynamicInput";
import SkillDynamicInput from "./SkillDynamicInput";
import { useDispatch } from "react-redux";
import { dragSkill, editSkills } from "@/state/resumeSlice";
import { useState } from "react";
import RelativeAbsRight from "../wrappers/RelativeAbsRight";
import DeleteElementButton from "../DeleteElementButton";
import RelativeAbsLeft from "../wrappers/RelativeAbsLeft";

//Also, I think I want to allow for creation of categories, like:
//Technologies, Software, etc.

//I don't know if there should be any special consideration for grouping those with skills in the data or not

function SkillSection({
  id,
  kind,
  list,
  renderIndex,
}: SkillProps & { renderIndex: number }) {
  const dispatch = useDispatch();
  function handleOnSubmit(text: string) {
    dispatch(editSkills({ id, text }));
  }

  const text = list.join(", ");

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
      <RelativeAbsLeft position="normal">
        <div>B</div>
      </RelativeAbsLeft>
      <SkillDynamicInput
        text={text}
        list={list}
        handleOnSubmit={handleOnSubmit}
        inputWidth="full"
        id={id}
        key={text}
      />
    </div>
  );
}

export default SkillSection;
