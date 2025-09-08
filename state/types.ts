import { PayloadAction } from "@reduxjs/toolkit";


export type ID = string;
export type PrevJobEditable = Omit<PrevJobProps, "id" | "kind">;
export type PrevJobKey = keyof PrevJobEditable;

export type Kinds = "personalInfo" | "prevJob" | "education" | "bulletPoint" | "experienceHeader" | "sectionHeader" | "educationHeader" | "skillsHeader" | "projectsHeader" | "summaryHeader";

export type ResumeItemProps = {
    id: ID;
    kind: Kinds;
    elementId: ID;
}

export type TextEdit = PayloadAction<{ id: string; text: string; }>
export type JobSectionTextEdit = PayloadAction<{ id: string; text: string; field: "jobTitle" | "location" | "companyName"; }>

export type UserLinkProps = {
    id: string;
    text: string;
    url: string;
}

export type PersonalInfoProps = {
    id: string;
    kind: "personalInfo";
    fullName: string;
    email: string;
    phoneNumber: string;
    location: string;
    link1?: UserLinkProps;
    link2?: UserLinkProps;
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

export type ResumeState = {
    scale: number;
    currentResumeId: string;
    dragFromIndex: number;
    dragToIndex: number;
    dragHigher: boolean;
    monthType: "short" | "long",
    data: {
        userInfo: {
            fullName: string;
            email: string;
            phoneNumber: string;
            location: string;
            userLinks: UserLinkProps[];
        },
        sectionHeaders: {
            summaryHeader: SectionHeaderProps;
            experienceHeader: SectionHeaderProps;
            educationHeader: SectionHeaderProps;
            skillsHeader: SectionHeaderProps;
            projectsHeader: SectionHeaderProps;
        };
        prevJobs: Record<ID, PrevJobProps>;
        bulletPoints: Record<ID, BulletPointProps>;
        personalInfo: Record<ID, PersonalInfoProps>;
        education: Record<ID, EducationProps>;
        userLinks: Record<ID, UserLinkProps>
    };
    resumes: Record<ID, ResumeItemProps[]>;
}