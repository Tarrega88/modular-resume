import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BulletPointProps, CustomHeaderProps, EducationProps, ID, Kinds, PrevJobEditable, PrevJobKey, PrevJobProps, ResumeItemProps, ResumeState, SectionHeaderProps, SkillProps, TextEdit, UserInfoProps, UserLinkProps } from "./types";

function setField<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
    (obj as Record<K, T[K]>)[key] = value; //obj as any is an option for testing
}

function ensurePrevJob(state: ResumeState, id: ID): PrevJobProps {
    return (state.data.prevJobs[id] ??= { ...prevJobDefault, id });
}

//TODO 9/11/2025: Going to revamp section header logic to behave the way most data behaves
//TODO 9/10/2025: add checks for 0 length text and insert a placeholder if so.

export const locationDefault: string = "City, ST";
export const prevJobDefault: PrevJobProps = { id: "0", kind: "prevJob", companyName: "Company Name", location: locationDefault, jobTitle: "Job Title", monthStarted: 0, yearStarted: 2024, monthEnded: 11, yearEnded: 2025 }
// export const personalInfoDefault: PersonalInfoProps = { id: "0", kind: "personalInfo", fullName: "Full Name", email: "email@email.com", phoneNumber: "(123) 456-7890", location: locationDefault }
export const bulletPointDefault: BulletPointProps = { id: "0", kind: "bulletPoint", text: "Enter Bullet Point Text Here" }

//data will store all data across multiple resumes - might add a "hidden" boolean to everything,
//which would start as false, but the user could mark anything to be hidden from not being an option to pick for that resume.

//NOTE: id and object key will match except in the resumes object.

const initialState: ResumeState = {
    scale: 75,
    currentResumeId: "0",
    dragFromIndex: -1,
    dragToIndex: -1,
    dragHigher: true,
    monthType: "short", //TODO 9/6/2025: store monthTypes in a "per resume" type of object
    data: {
        userInfo: {
            fullName: "Full Name...",
            kind: "userInfo",
            email: "email@gmail.com",
            phoneNumber: "(123) 456-7890",
            location: "City, ST",
            // userLinks: []
        },
        sectionHeaders: {
            0: { id: "0", kind: "sectionHeader", text: "Experience" }
        },
        prevJobs: {
            0: { id: "0", kind: "prevJob", companyName: "Google", location: "Anchorage, AK", jobTitle: "Software Developer", monthStarted: 6, yearStarted: 2023, monthEnded: 11, yearEnded: 2024 },
            1: { id: "1", kind: "prevJob", companyName: "Microsoft", location: "Los Angeles, CA", jobTitle: "UI/UX Designer", monthStarted: 0, yearStarted: 2022, monthEnded: 5, yearEnded: 2023 },
            // 2: { id: "2", kind: "prevJob", companyName: "Best Buy", location: "Los Angeles, CA", jobTitle: "Customer Support", monthStarted: 0, yearStarted: 2022, monthEnded: 5, yearEnded: 2023 }
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
        education: {},
        skills: { 0: { id: "0", kind: "skill", list: ["JavaScript", "TypeScript", "HTML", "CSS"], showCategory: true, category: "Technology" }, 1: { id: "1", kind: "skill", list: ["Docker", "VSCode", "Excel", "Word"], showCategory: true, category: "Software" } },
        // userLinks: { 0: { id: "0", text: "Portfolio", url: "https://michaelthedev.com/" } },
    },
    resumes: {
        0: [{ id: "99", kind: "userInfo", elementId: "" },
        { id: "98", kind: "sectionHeader", elementId: "0" },
        { id: "100", kind: "prevJob", elementId: "0" },

        { id: "101", kind: "bulletPoint", elementId: "0" },
        { id: "102", kind: "bulletPoint", elementId: "1" },
        { id: "103", kind: "bulletPoint", elementId: "2" },

        { id: "104", kind: "prevJob", elementId: "1" },
        { id: "105", kind: "bulletPoint", elementId: "3" },
        { id: "106", kind: "bulletPoint", elementId: "4" },
        { id: "107", kind: "bulletPoint", elementId: "5" },
        { id: "109", kind: "skill", elementId: "0" },
        { id: "110", kind: "skill", elementId: "1" }


            // { id: "108", kind: "prevJob", elementId: "2" },
            // { id: "109", kind: "bulletPoint", elementId: "6" },
            // { id: "110", kind: "bulletPoint", elementId: "7" },
            // { id: "111", kind: "bulletPoint", elementId: "8" },

            // { id: "112", kind: "prevJob", elementId: "0" },
            // { id: "113", kind: "bulletPoint", elementId: "9" },
        ],
        1: [], //the render order for resume1,
        2: [], //the render order of resume2
    },

};
//.data.bulletPoints

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
            //Note: May consider removing the null check and instead making elementId optional, but this is probably safer
            if (elementId === null) {
                state.resumes[currentResumeId].push({ id: crypto.randomUUID(), kind, elementId: crypto.randomUUID() })
            } else {
                state.resumes[currentResumeId].push({ id: crypto.randomUUID(), kind, elementId })
            }

        },
        addBulletData(state, action: PayloadAction<BulletPointProps>) {
            const { id } = action.payload;
            state.data.bulletPoints[id] = action.payload;
        },
        updatePrevJobField(
            state,
            action: PayloadAction<{ id: ID; field: PrevJobKey; value: PrevJobEditable[PrevJobKey] }>
        ) {
            const { id, field, value } = action.payload;
            const job = ensurePrevJob(state, id);
            setField(job, field, value);
        },
        addPrevJobData(state, action: PayloadAction<PrevJobProps>) {
            const { id } = action.payload;
            state.data.prevJobs[id] = action.payload;
        },
        addEducationData(state, action: PayloadAction<EducationProps>) {
            const { id } = action.payload;
            state.data.education[id] = action.payload;
        },
        addSkillData(state, action: PayloadAction<SkillProps>) {
            const { id } = action.payload;
            state.data.skills[id] = action.payload;
        },
        addSectionHeaderData(state, action: PayloadAction<SectionHeaderProps>) {
            const { id } = action.payload;
            state.data.sectionHeaders[id] = action.payload;
        },
        editBulletPoint(state, action: TextEdit) {
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
        },
        editSectionHeader(state, action: PayloadAction<SectionHeaderProps>) {
            //TODO 9/11/2025: this needs to be changed
            const { text, kind } = action.payload;
            state.data.sectionHeaders[kind].text = text;
        },
        setScale(state, action: PayloadAction<number>) {
            state.scale = action.payload;
        },
        editUserInfo(state, action: PayloadAction<{ field: keyof UserInfoProps; text: string; }>) {
            const { field, text } = action.payload;
            if (field !== "kind") state.data.userInfo[field] = text;
        },
        editSkills(state, action: PayloadAction<{ id: string; text: string }>) {

            const { id, text } = action.payload;

            state.data.skills[id].list = text.split(",").filter(e => e.length > 1).map(e => e.trim());

        },
        dragSkill(state, action: PayloadAction<{ fromIndex: number, toIndex: number; id: string }>) {
            const { fromIndex, toIndex, id } = action.payload;

            if (toIndex === -1 || fromIndex === toIndex) return;
            const arr = state.data.skills[id].list;
            const [item] = arr.splice(fromIndex, 1);
            arr.splice(toIndex, 0, item);
        },
        editSkillCategory(state, action: PayloadAction<{ id: string; text: string; }>) {
            const { id, text } = action.payload;
            if (text.length <= 1) {
                state.data.skills[id].showCategory = false;
                state.data.skills[id].category = "Category";
            } else {
                let sanitizedText = text.trim();
                sanitizedText = sanitizedText[sanitizedText.length - 1] === ":" ? sanitizedText.slice(0, -1) : sanitizedText;
                state.data.skills[id].category = sanitizedText;
            }
        },
        setShowCategory(state, action: PayloadAction<{ id: string; showCategory: boolean }>) {
            const { id, showCategory } = action.payload;
            state.data.skills[id].showCategory = showCategory;
        },
        duplicateSection(state, action: PayloadAction<{ kind: Kinds, index: number, elementId: string; }>) {
            const { currentResumeId } = state;
            const { kind, index, elementId } = action.payload;

            const id = crypto.randomUUID();

            state.resumes[currentResumeId].splice(index, 0, { kind, id, elementId });
            // state.resumes[currentResumeId] = [...state.resumes[currentResumeId]]
        },


    },
});

export const { setCurrentResume, editBulletPoint, changeBulletPoint, removeResumeItem, setDragToIndex, setDragFromIndex, dragResumeItem, setDragHigher, addResumeItem, addBulletData, addEducationData, addPrevJobData, createEmptyResume, updatePrevJobField, setScale, editUserInfo, editSkills, dragSkill, editSkillCategory, setShowCategory, editSectionHeader, addSkillData, duplicateSection, addSectionHeaderData } = resumeSlice.actions;
export default resumeSlice.reducer;
