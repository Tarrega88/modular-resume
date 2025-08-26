import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ID = string;

export type ResumeItem = {
    id: ID;
    kind: string;
    elementId: string;
}

// type ResumeItem =
//     | { id: ID; kind: "bulletPoint"; elementId: ID }
//     | { id: ID; kind: "prevJob"; elementId: ID };

type ResumeState = {
    currentResume: ID;
    data: {
        prevJobs: Record<ID, PrevJob>;
        bulletPoints: Record<ID, BulletPoint>;
    };
    resumes: Record<ID, ResumeItem[]>;
}

type Link = {
    id: string;
    text: string;
    url: string;
}

type PersonalInfo = {
    id: string;
    kind: "personalInfo";
    fullName: string;
    email: string;
    phoneNumber: string;
    location: string;
    link1?: Link;
    link2?: Link;
    link3?: Link;
}

type PrevJob = {
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

type BulletPoint = { id: string; kind: "bulletPoint"; text: string; };

type Education = {
    id: string;
    kind: "education";
    schoolName: string;
    degree: string;
    fieldOfStudy: string;
    monthStarted?: number;
    yearStarted: number;
    monthEnded?: number;
    yearEnded?: number;
    location?: string;
    gpa?: string;
};



//data will store all data across multiple resumes - might add a "hidden" boolean to everything,
//which would start as false, but the user could mark anything to be hidden from not being an option to pick for that resume.
const initialState: ResumeState = {
    currentResume: "0", //might make this a UUID
    data: {
        prevJobs: {},
        bulletPoints: {
            1: { id: "0", kind: "bulletPoint", text: "ABC" },
            2: { id: "1", kind: "bulletPoint", text: "DEF" }
        }
    },
    resumes: {
        0: [{ id: "0", kind: "bulletPoint", elementId: "0" }, { id: "1", kind: "bulletPoint", elementId: "0" }],
        1: [], //the render order for resume1,
        2: [], //the render order of resume2
    }, //a series of objects each with a "type"
};

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        addBulletPoint(state, action: PayloadAction<string>) {
            const id = crypto.randomUUID();
            state.data.bulletPoints[id] = { id, kind: "bulletPoint", text: action.payload };
        }
    },
});

//export const {} = dbSlice.actions;
export default resumeSlice.reducer;
