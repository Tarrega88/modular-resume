import { ResumeItemProps, Kinds } from "@/state/resumeSlice";
import BulletPoint from "./BulletPoint";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

function ResumeItemRenderer({ id, kind, elementId }: ResumeItemProps) {
  const { data } = useSelector((state: RootState) => state.resume);

  // console.log("Element ID");
  // console.log(elementId);
  // console.log("data");
  // console.log(data);

  // const kindString = kind.toString();
  //TODO 8/26/2025: Probably don't need kind on these - maybe remove from the Props, or if it's needed there then make a new Props type for these?
  switch (kind) {
    case "personalInfo":
      return;
    case "bulletPoints":
      const bp = data.bulletPoints[elementId];

      return <BulletPoint id={bp.id} kind={bp.kind} text={bp.text} />;
    case "education":
      return;
    case "prevJobs":
      return;
  }
}

export default ResumeItemRenderer;
