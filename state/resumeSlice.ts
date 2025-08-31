import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ID = string;

export type Kinds = "personalInfo" | "prevJob" | "education" | "bulletPoint";

export type ResumeItemProps = {
    id: ID;
    kind: Kinds;
    elementId: ID;
}

export type UserLinkProps = {
    id: string;
    text: string;
    url: string;
}
// type ResumeItem =
//     | { id: ID; kind: "bulletPoint"; elementId: ID }
//     | { id: ID; kind: "prevJob"; elementId: ID };

type ResumeState = {
    currentResumeId: string;
    dragFromIndex: number;
    dragToIndex: number;
    dragHigher: boolean;
    userInfo: {
        fullName: string;
        email: string;
        phoneNumber: string;
        location: string;
        userLinks: UserLinkProps[];
    },
    data: {
        prevJobs: Record<ID, PrevJobProps>;
        bulletPoints: Record<ID, BulletPointProps>;
        personalInfo: Record<ID, PersonalInfoProps>;
        education: Record<ID, EducationProps>;
        userLinks: Record<ID, UserLinkProps>
    };
    resumes: Record<ID, ResumeItemProps[]>;
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
    monthStarted: string;
    yearStarted: number;
    monthEnded: string;
    yearEnded: number;
};

export type BulletPointProps = { id: string; kind: "bulletPoint"; text: string; };

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
    currentResumeId: "0",
    dragFromIndex: -1,
    dragToIndex: -1,
    dragHigher: true,
    userInfo: {
        fullName: "Full Name",
        email: "email@email.com",
        phoneNumber: "(123) 456-7890",
        location: "City, ST",
        userLinks: []
    },
    data: {
        prevJobs: {
            0: {
                id: "0",
                kind: "prevJob",
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
            0: { id: "0", kind: "bulletPoint", text: "Built software for ABC company" },
            1: { id: "1", kind: "bulletPoint", text: "Developed an internal application to reduce user friction" },
            2: { id: "2", kind: "bulletPoint", text: "Wrote and used automated tests in Jest" },
            3: { id: "3", kind: "bulletPoint", text: "Collaborated with cross-functional teams to launch new features" },
            4: { id: "4", kind: "bulletPoint", text: "Optimized React components for faster load times" },
            5: { id: "5", kind: "bulletPoint", text: "Created RESTful APIs to support front-end functionality" },
            6: { id: "6", kind: "bulletPoint", text: "Implemented Redux for scalable state management" },
            7: { id: "7", kind: "bulletPoint", text: "Reviewed code and mentored junior developers" },
            8: { id: "8", kind: "bulletPoint", text: "Integrated third-party authentication services" },
            9: { id: "9", kind: "bulletPoint", text: "Designed responsive UI components using Tailwind CSS" },

        },
        personalInfo: {
            0: { id: "0", kind: "personalInfo", fullName: "Full Name", email: "email@email.com", phoneNumber: "(123) 456-7890", location: "City, ST" }
        },
        education: {},
        userLinks: { 0: { id: "0", text: "Portfolio", url: "https://michaelthedev.com/" } },
    },
    resumes: {
        0: [{ id: "99", kind: "personalInfo", elementId: "0" }, { id: "100", kind: "prevJob", elementId: "0" },
        { id: "101", kind: "bulletPoint", elementId: "0" },
        { id: "102", kind: "bulletPoint", elementId: "1" },
        { id: "103", kind: "bulletPoint", elementId: "2" },

        { id: "104", kind: "prevJob", elementId: "0" },
        { id: "105", kind: "bulletPoint", elementId: "3" },
        { id: "106", kind: "bulletPoint", elementId: "4" },
        { id: "107", kind: "bulletPoint", elementId: "5" },

        { id: "108", kind: "prevJob", elementId: "0" },
        { id: "109", kind: "bulletPoint", elementId: "6" },
        { id: "110", kind: "bulletPoint", elementId: "7" },
        { id: "111", kind: "bulletPoint", elementId: "8" },

        { id: "112", kind: "prevJob", elementId: "0" },
        { id: "113", kind: "bulletPoint", elementId: "9" },],
        1: [], //the render order for resume1,
        2: [], //the render order of resume2
    },

};

//.data.bulletPoints

//TODO 8/31/2025: Any future editing actions will need to take into account whether or not the id exists yet (Since I've allowed render items to not exist in the data object yet)

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        setCurrentResume(state, action: PayloadAction<string>) {
            state.currentResumeId = action.payload;
        },
        createEmptyResume(state) {
            const { currentResumeId } = state;
            state.resumes[currentResumeId] = [];
        },
        addResumeItem(state, action: PayloadAction<{ kind: Kinds, elementId: string | null }>) {
            const { currentResumeId } = state;
            const { kind, elementId } = action.payload;

            if (elementId === null) {
                state.resumes[currentResumeId].push({ id: crypto.randomUUID(), kind, elementId: crypto.randomUUID() })
            } else {
                state.resumes[currentResumeId].push({ id: crypto.randomUUID(), kind, elementId })
            }

        },
        addPersonalInfoData(state, action: PayloadAction<PersonalInfoProps>) {
            const { id } = action.payload;
            state.data.personalInfo[id] = action.payload;
        },
        addBulletData(state, action: PayloadAction<BulletPointProps>) {
            const { id } = action.payload;
            state.data.bulletPoints[id] = action.payload;
        },
        addPrevJobData(state, action: PayloadAction<PrevJobProps>) {
            const { id } = action.payload;
            state.data.prevJobs[id] = action.payload;
        },
        addEducationData(state, action: PayloadAction<EducationProps>) {
            const { id } = action.payload;
            state.data.education[id] = action.payload;
        },
        editBulletPoint(state, action: PayloadAction<{ id: string; text: string; }>) {
            const { id, text } = action.payload;
            if (id in state.data.bulletPoints) {
                state.data.bulletPoints[id].text = text;
            } else {
                state.data.bulletPoints[id] = { id, kind: "bulletPoint", text }
            }
        },
        changeBulletPoint(state, action: PayloadAction<{ renderIndex: number; id: string; }>) {
            const currentResume = state.currentResumeId;
            const { renderIndex, id } = action.payload;
            state.resumes[currentResume][renderIndex] = { id: crypto.randomUUID(), kind: "bulletPoint", elementId: id }
        },
        removeResumeItem(state, action: PayloadAction<{ renderIndex: number }>) {
            const { renderIndex } = action.payload;
            const currentResume = state.currentResumeId;
            state.resumes[currentResume].splice(renderIndex, 1);
        },
        setDragFromIndex(state, action: PayloadAction<number>) {
            state.dragFromIndex = action.payload;
        },
        setDragToIndex(state, action: PayloadAction<number>) {
            state.dragToIndex = action.payload;
        },
        dragResumeItem(state) {
            const { dragToIndex: toIndex, dragFromIndex: fromIndex, currentResumeId } = state;
            if (toIndex === -1 || fromIndex === toIndex) return;

            const arr = state.resumes[currentResumeId];
            const [item] = arr.splice(fromIndex, 1);
            arr.splice(toIndex, 0, item);
        },
        setDragHigher(state, action: PayloadAction<boolean>) {
            state.dragHigher = action.payload;
        }
    },
});

export const { setCurrentResume, editBulletPoint, changeBulletPoint, removeResumeItem, setDragToIndex, setDragFromIndex, dragResumeItem, setDragHigher, addResumeItem, addBulletData, addEducationData, addPersonalInfoData, addPrevJobData, createEmptyResume } = resumeSlice.actions;
export default resumeSlice.reducer;
