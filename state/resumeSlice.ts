import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ID = string;

export type Kinds = "personalInfo" | "prevJobs" | "education" | "bulletPoints";

export type ResumeItemProps = {
    id: ID;
    kind: Kinds;
    elementId: ID;
}


// type ResumeItem =
//     | { id: ID; kind: "bulletPoint"; elementId: ID }
//     | { id: ID; kind: "prevJob"; elementId: ID };

type ResumeState = {
    data: {
        prevJobs: Record<ID, PrevJobProps>;
        bulletPoints: Record<ID, BulletPointProps>;
        personalInfo: Record<ID, PersonalInfoProps>;
        education: Record<ID, EducationProps>;
    };
    resumes: Record<ID, ResumeItemProps[]>;
}

type LinkProps = {
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
    link1?: LinkProps;
    link2?: LinkProps;
    link3?: LinkProps;
}

export type PrevJobProps = {
    id: string;
    kind: "prevJobs";
    companyName: string;
    jobTitle: string;
    location: string;
    monthStarted: string;
    yearStarted: number;
    monthEnded: string;
    yearEnded: number;
};

export type BulletPointProps = { id: string; kind: "bulletPoints"; text: string; };

export type EducationProps = {
    id: string;
    kind: "education";
    schoolName: string;
    degree: string;
    fieldOfStudy: string;
    monthStarted?: string;
    yearStarted?: number;
    monthEnded?: string;
    yearEnded?: number;
    location?: string;
    gpa?: string;
};



//data will store all data across multiple resumes - might add a "hidden" boolean to everything,
//which would start as false, but the user could mark anything to be hidden from not being an option to pick for that resume.

//NOTE: id and object key will match except in the resumes object.
const initialState: ResumeState = {
    data: {
        prevJobs: {
            0: {
                id: "0",
                kind: "prevJobs",
                companyName: "Company Name",
                jobTitle: "Your Job Title",
                location: "City, ST",
                monthStarted: "Jan",
                yearStarted: 2024,
                monthEnded: "Dec",
                yearEnded: 2025
            }
        },
        bulletPoints: {
            0: { id: "0", kind: "bulletPoints", text: "ABC" },
            1: { id: "1", kind: "bulletPoints", text: "DEF" }
        },
        personalInfo: {},
        education: {},
    },
    resumes: {
        0: [{ id: "3", kind: "prevJobs", elementId: "0" }, { id: "0", kind: "bulletPoints", elementId: "0" }, { id: "1", kind: "bulletPoints", elementId: "0" }],
        1: [], //the render order for resume1,
        2: [], //the render order of resume2
    }, //a series of objects each with a "type"
};

//.data.bulletPoints

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        addBulletPoint(state, action: PayloadAction<string>) {
            const id = crypto.randomUUID();
            state.data.bulletPoints[id] = { id, kind: "bulletPoints", text: action.payload };
        }
    },
});

//export const {} = dbSlice.actions;
export default resumeSlice.reducer;
