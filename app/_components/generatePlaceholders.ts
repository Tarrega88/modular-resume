import { RootState } from "@/state/store";
import { Kinds } from "@/state/types";
import {
  BulletPointProps,
  EducationProps,
  SectionHeaderProps,
  PrevJobProps,
  SkillProps,
  UserInfoProps,
} from "@/state/types";
import { useSelector } from "react-redux";

function PlaceHolders(kind: Kinds) {

  const { data } = useSelector((state: RootState) => state.resume);
  const { userInfo, sectionHeaders } = data;
  const { educationHeader, experienceHeader, projectsHeader, skillsHeader, summaryHeader } = sectionHeaders;
  const id = crypto.randomUUID();

  switch (kind) {
    case "bulletPoint": return {
      id, kind, text: "Enter Bullet Point Text or select one from the dropdown"
    } as BulletPointProps;
    case "education": return { id, kind, schoolName: "University Name", degree: "Degree", fieldOfStudy: "Field of Study", monthStarted: 7, yearStarted: 2000, monthEnded: 4, yearEnded: 2004, location: "City, ST", gpa: "GPA" } as EducationProps;
    case "prevJob": return { id, kind, companyName: "Company Name", jobTitle: "Job Title", location: "City, ST", monthStarted: 0, yearStarted: 2024, monthEnded: 11, yearEnded: 2025 } as PrevJobProps;
    case "skill": return { id, kind, list: [], showCategory: true, category: "Category" } as SkillProps;
    case "userInfo": return { fullName: "Full Name", kind, email: "email@email.com", phoneNumber: "(123) 456-7890", location: "City, ST" } as UserInfoProps;
    // case "projectsHeader": return {} as SectionHeaderProps;
    // case "educationHeader":
    // case "experienceHeader":
    // case "skillsHeader":
    // case "summaryHeader":
  }
}

export default PlaceHolders;
