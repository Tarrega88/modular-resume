import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ID = string;

export type Kinds = "personalInfo" | "prevJob" | "education" | "bulletPoint";

export type ResumeItemProps = {
    id: ID;
    kind: Kinds;
    elementId: ID;
}

export type TextEdit = PayloadAction<{ id: string; text: string; }>

export type UserLinkProps = {
    id: string;
    text: string;
    url: string;
}

// type ResumeItem =
//     | { id: ID; kind: "bulletPoint"; elementId: ID }
//     | { id: ID; kind: "prevJob"; elementId: ID };

export type Location = {
    text: string;
    id: string;
}

type ResumeState = {
    currentResumeId: string;
    dragFromIndex: number;
    dragToIndex: number;
    dragHigher: boolean;
    data: {
        userInfo: {
            fullName: string;
            email: string;
            phoneNumber: string;
            location: Location;
            userLinks: UserLinkProps[];
        },
        locations: Record<ID, Location>;
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
    location: Location;
    link1?: UserLinkProps;
    link2?: UserLinkProps;
}

export type PrevJobProps = {
    id: string;
    kind: "prevJob";
    companyName: string;
    jobTitle: string;
    location: Location;
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
    location?: Location;
    gpa?: string;
};

export const locationDefault: Location = { id: "0", text: "City, ST" }
export const prevJobDefault: PrevJobProps = { id: "0", kind: "prevJob", companyName: "Company Name", location: locationDefault, jobTitle: "Job Title", monthStarted: "Jan", yearStarted: 2024, monthEnded: "Dec", yearEnded: 2025 }
export const personalInfoDefault: PersonalInfoProps = { id: "0", kind: "personalInfo", fullName: "Full Name", email: "email@email.com", phoneNumber: "(123) 456-7890", location: locationDefault }
export const bulletPointDefault: BulletPointProps = { id: "0", kind: "bulletPoint", text: "Enter Bullet Point Text Here" }



//data will store all data across multiple resumes - might add a "hidden" boolean to everything,
//which would start as false, but the user could mark anything to be hidden from not being an option to pick for that resume.

//NOTE: id and object key will match except in the resumes object.

const initialState: ResumeState = {
    currentResumeId: "0",
    dragFromIndex: -1,
    dragToIndex: -1,
    dragHigher: true,
    data: {
        userInfo: {
            fullName: "Michael See",
            email: "michaelseedev@gmail.com",
            phoneNumber: "(123) 456-7890",
            location: { id: "1", text: "Anchorage, AK" },
            userLinks: []
        },
        locations: { 1: { id: "1", text: "Anchorage, AK" }, 2: { id: "2", text: "Boulder, CO" } },
        prevJobs: {
            0: prevJobDefault
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
            0: { id: "0", kind: "personalInfo", fullName: "Full Name", email: "email@email.com", phoneNumber: "(123) 456-7890", location: locationDefault }
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

//TODO 9/2/2025: Switch resume generation logic back to creating actual data instead of the null elementId
//It will make it so there's a lot of "blank" looking data but I can just hide that from the dropdowns until it's different.

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
        editBulletPoint(state, action: TextEdit) {
            const { id, text } = action.payload;
            if (id in state.data.bulletPoints) {
                state.data.bulletPoints[id].text = text;
            } else {
                state.data.bulletPoints[id] = { id, kind: "bulletPoint", text }
            }
        },
        editJobTitle(state, action: TextEdit) {
            const { id, text } = action.payload;
            if (id in state.data.prevJobs) {
                state.data.prevJobs[id].jobTitle = text;
            } else {
                state.data.prevJobs[id] = { ...prevJobDefault, id, jobTitle: text }
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
        },
        changePrevJobLocation(state, action: PayloadAction<{ id: string; locationId: string }>) {
            const { currentResumeId, resumes } = state;
            const { id, locationId } = action.payload;

            const locationData = state.data.locations[locationId];

            state.data.prevJobs[id].location = locationData;

        },
        // addLocation(state, action: PayloadAction<string>) {
        //     const lowerLocations = state.data.locations.map(e => e.toLowerCase());
        //     if (lowerLocations.includes(action.payload.toLowerCase())) return;
        //     state.data.locations.push(action.payload);
        // }
    },
});

export const { setCurrentResume, editBulletPoint, changeBulletPoint, removeResumeItem, setDragToIndex, setDragFromIndex, dragResumeItem, setDragHigher, addResumeItem, addBulletData, addEducationData, addPersonalInfoData, addPrevJobData, createEmptyResume, editJobTitle, changePrevJobLocation } = resumeSlice.actions;
export default resumeSlice.reducer;
