import { PayloadAction } from "@reduxjs/toolkit";


export type ID = string;
export type PrevJobEditable = Omit<PrevJobProps, "id" | "kind">;
export type PrevJobKey = keyof PrevJobEditable;

export type Kinds = "prevJob" | "education" | "bulletPoint" | "experienceHeader" | "educationHeader" | "skillsHeader" | "projectsHeader" | "summaryHeader" | "skill" | "userInfo" | "customHeader";

export type ResumeItemProps = {
    id: ID;
    kind: Kinds;
    elementId: ID;
}

export type TextEdit = PayloadAction<{ id: string; text: string; }>
export type JobSectionTextEdit = PayloadAction<{ id: string; text: string; field: "jobTitle" | "location" | "companyName"; }>

export type UserLinkProps = {
    text: string;
    url: string;
}

export type PrevJobProps = {
    id: string;
    kind: "prevJob";
    companyName: string;
    jobTitle: string;
    location: string;
    monthStarted: number;
    yearStarted: number;
    monthEnded: number;
    yearEnded: number;
};

export type BulletPointProps = { id: string; kind: "bulletPoint"; text: string; };

export type EducationProps = {
    id: string;
    kind: "education";
    schoolName: string;
    degree: string;
    fieldOfStudy: string;
    monthStarted?: number;
    yearStarted?: number;
    monthEnded?: number;
    yearEnded?: number;
    location?: string;
    gpa?: string;
};

export type SectionHeaderProps = {
    text: string;
    kind: "summaryHeader" | "experienceHeader" | "educationHeader" | "skillsHeader" | "projectsHeader";
}

export type CustomHeaderProps = {
    id: string;
    text: string;
    kind: "customHeader";
}

export type UserInfoProps = {
    fullName: string;
    kind: "userInfo";
    email: string;
    phoneNumber: string;
    location: string;
}

export type SkillProps = {
    id: string;
    kind: "skill";
    list: string[];
    showCategory: boolean;
    category: string;
}

export type ResumeState = {
    scale: number;
    currentResumeId: string;
    dragFromIndex: number;
    dragToIndex: number;
    dragHigher: boolean;
    monthType: "short" | "long",
    data: {
        userInfo: UserInfoProps,
        userLink1?: UserLinkProps;
        userLink2?: UserLinkProps;
        sectionHeaders: {
            summaryHeader: SectionHeaderProps;
            experienceHeader: SectionHeaderProps;
            educationHeader: SectionHeaderProps;
            skillsHeader: SectionHeaderProps;
            projectsHeader: SectionHeaderProps;
        };
        prevJobs: Record<ID, PrevJobProps>;
        bulletPoints: Record<ID, BulletPointProps>;
        education: Record<ID, EducationProps>;
        skills: Record<ID, SkillProps>;
        customHeaders: Record<ID, CustomHeaderProps>;
    };
    resumes: Record<ID, ResumeItemProps[]>;
}