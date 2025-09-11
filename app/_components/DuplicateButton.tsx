import {
  addBulletData,
  addCustomHeaderData,
  addEducationData,
  addPrevJobData,
  addResumeItem,
  addSkillData,
  duplicateSection,
} from "@/state/resumeSlice";
import { Kinds } from "@/state/types";
import { IoDuplicate, IoDuplicateSharp } from "react-icons/io5";
import { TbCircleLetterDFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";

function DuplicateButton({
  kind,
  renderIndex,
}: {
  kind: Kinds;
  renderIndex: number;
}) {
  // const dispatch = useDispatch();

  const dispatch = useDispatch();
  function handleDuplicate() {
    const id = crypto.randomUUID();

    switch (kind) {
      case "bulletPoint":
        dispatch(
          addBulletData({
            id,
            kind,
            text: "Enter Bullet Point Text or select one from the dropdown",
          })
        );
        break;
      case "education":
        dispatch(
          addEducationData({
            id,
            kind,
            schoolName: "University Name",
            degree: "Degree",
            fieldOfStudy: "Field of Study",
            monthStarted: 7,
            yearStarted: 2000,
            monthEnded: 4,
            yearEnded: 2004,
            location: "City, ST",
            gpa: "GPA",
          })
        );
        break;
      case "prevJob":
        dispatch(
          addPrevJobData({
            id,
            kind,
            companyName: "Company Name",
            jobTitle: "Job Title",
            location: "City, ST",
            monthStarted: 0,
            yearStarted: 2024,
            monthEnded: 11,
            yearEnded: 2025,
          })
        );
        break;
      case "skill":
        dispatch(
          addSkillData({
            id,
            kind,
            list: ["List skills here and separate them with commas"],
            showCategory: true,
            category: "Category",
          })
        );
        break;

      case "projectsHeader":
      case "educationHeader":
      case "experienceHeader":
      case "skillsHeader":
      case "summaryHeader":
      case "customHeader":
        dispatch(
          addCustomHeaderData({
            id,
            text: "Custom Header",
            kind: "customHeader",
          })
        );

      default:
        break;
    }

    let duplicationKind = kind.endsWith("Header") ? "customHeader" : kind;

    dispatch(
      duplicateSection({
        kind: duplicationKind,
        elementId: id,
        index: renderIndex,
      })
    );
    // dispatch(addResumeItem({ kind, elementId: id }));
  }

  return (
    <button
      onClick={handleDuplicate}
      className="text-xl cursor-pointer text-sky-600 transition-all duration-200 hover:text-sky-500"
    >
      <IoDuplicate />
    </button>
  );
}

export default DuplicateButton;
