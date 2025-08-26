import { ResumeItemProps, Kinds } from "@/state/resumeSlice";
import BulletPoint from "./BulletPoint";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

function ResumeItemRenderer({ id, kind, elementId }: ResumeItemProps) {
  const { data } = useSelector((state: RootState) => state.resume);

  console.log("Element ID");
  console.log(elementId);
  console.log("data");
  console.log(data);
  // const kindString = kind.toString();

  switch (kind) {
    case "personalInfo":
      return;
    case "bulletPoints":
      const bp = data.bulletPoints[elementId];
      console.log("---bp---");
      console.log(bp);
      return <BulletPoint id={bp.id} kind={bp.kind} text={bp.text} />;
    case "education":
      return;
    case "prevJobs":
      return;
  }
}

export default ResumeItemRenderer;
