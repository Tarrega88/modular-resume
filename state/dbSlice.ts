import { createSlice } from "@reduxjs/toolkit";

type PrevJob = {};
type BulletPoint = {};

const initialState = {
    currentResume: 1,
    data: {
        prevJobs: [],
        bulletPoints: [{ id: "1", text: "ABC" }],
    }
};

const dbSlice = createSlice({
    name: "db",
    initialState,
    reducers: {},
});

//export const {} = dbSlice.actions;
export default dbSlice.reducer;