//TODO 9/8/2025: Consider how input will work on this
//I might let users write skills in one input and have that separate them by comma into an array
//elements in the array would trim the white space, and the actual div display would be a re-rendering of the array with .join
//this would allow individual skills to be re-ordered

import { SkillProps } from "@/state/types";
import DynamicInput from "../DynamicInput";
import SkillDynamicInput from "./SkillDynamicInput";
import { useDispatch } from "react-redux";
import { dragSkill, editSkills } from "@/state/resumeSlice";
import { useState } from "react";

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

  return (
    <div className="w-full">
      {/* <DynamicInput
        text={text}
        handleOnSubmit={handleOnSubmit}
        inputWidth="full"
      /> */}
      <SkillDynamicInput
        list={list}
        handleOnSubmit={handleOnSubmit}
        inputWidth="full"
        id={id}
      />
    </div>
  );
}

export default SkillSection;
