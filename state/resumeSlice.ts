import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Link = {
    id: string;
    text: string;
    url: string;
}

type PersonalInfo = {
    id: string;
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
    companyName: string;
    jobTitle: string;
    location: string;
    monthStarted: number;
    yearStarted: number;
    monthEnded: number;
    yearEnded: number;
};

type BulletPoint = { id: string; text: string; };

type Education = {
    id: string;
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

const initialState = {
    currentResume: 1,
    data: {
        prevJobs: [],
        bulletPoints: [{ id: "1", text: "ABC" }, { id: "2", text: "DEF" }],

    }
};

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        addBulletPoint(state, action: PayloadAction<BulletPoint>) {
            state.data.bulletPoints.push(action.payload)
        }
    },
});

//export const {} = dbSlice.actions;
export default resumeSlice.reducer;