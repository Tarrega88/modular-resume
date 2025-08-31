// utils/generateNewResume.ts

import {
    addBulletData,
    addPersonalInfoData,
    addPrevJobData,
    addResumeItem,
    setCurrentResume,
    BulletPointProps,
    PersonalInfoProps,
    PrevJobProps,
    Kinds,
    createEmptyResume,
    EducationProps,
    addEducationData,
} from "@/state/resumeSlice";

const newResumeRenderItems: Kinds[] = [
    "personalInfo",
    "prevJob",
    "bulletPoint",
    "bulletPoint",
    "bulletPoint",
];

export function generateNewResume(dispatch: Function, userInfo: any): string {
    const newResumeId = crypto.randomUUID();
    dispatch(setCurrentResume(newResumeId));
    dispatch(createEmptyResume());

    for (const kind of newResumeRenderItems) {
        const id = crypto.randomUUID();

        switch (kind) {
            case "personalInfo": {
                const personalInfoData: PersonalInfoProps = {
                    id,
                    kind,
                    fullName: userInfo.fullName,
                    email: userInfo.email,
                    phoneNumber: userInfo.phoneNumber,
                    location: userInfo.location,
                };
                dispatch(addPersonalInfoData(personalInfoData));
                dispatch(addResumeItem({ kind, elementId: id }));
                break;
            }

            case "bulletPoint": {
                const bulletPointData: BulletPointProps = {
                    id,
                    kind,
                    text: "Enter your bullet point text here....",
                };
                dispatch(addBulletData(bulletPointData));
                dispatch(addResumeItem({ kind, elementId: id }));
                break;
            }

            case "education": {
                const educationData: EducationProps = {
                    id, kind, schoolName: "University Name", degree: "Level of Degree", fieldOfStudy: "Field of Study"
                };
                dispatch(addEducationData(educationData));
                dispatch(addResumeItem({ kind, elementId: id }));
                break;
            }
            case "prevJob": {
                const prevJobData: PrevJobProps = {
                    id,
                    kind,
                    companyName: "Company Name",
                    jobTitle: "Your Job Title",
                    location: "City, ST",
                    monthStarted: "Jan",
                    yearStarted: 2024,
                    monthEnded: "Dec",
                    yearEnded: 2025,
                };
                dispatch(addPrevJobData(prevJobData));
                dispatch(addResumeItem({ kind, elementId: id }));
                break;
            }
        }
    }

    return newResumeId;
}


// import { RootState } from '@/state/store';
// import { addBulletData, addPersonalInfoData, addPrevJobData, addResumeItem, BulletPointProps, Kinds, PersonalInfoProps, PrevJobProps, setCurrentResume } from '@/state/resumeSlice';
// import { useDispatch, useSelector } from 'react-redux';
// //TODO 8/30/2025:
// //call the addNewResumeItem action from the slice in a loop that goes over an array of kinds

// const newResumeRenderItems: Kinds[] = ["personalInfo", "prevJob", "bulletPoint", "bulletPoint", "bulletPoint"];

// export default function generateNewResume() {
//     const dispatch = useDispatch();
//     const newResumeId = crypto.randomUUID();



//     dispatch(setCurrentResume(newResumeId));

//     const { resumes, userInfo, data } = useSelector((state: RootState) => state.resume);


//     for (const kind of newResumeRenderItems) {
//         // dispatch(addResumeItem())
//         // dispatch()
//         const id = crypto.randomUUID();
//         switch (kind) {
//             case "personalInfo": const personalInfoData: PersonalInfoProps = { id, kind, fullName: userInfo.fullName, email: userInfo.email, phoneNumber: userInfo.phoneNumber, location: userInfo.location };
//                 dispatch(addPersonalInfoData(personalInfoData));
//                 dispatch(addResumeItem({ kind, elementId: id }))
//                 break;
//             case "bulletPoint": const bulletPointData: BulletPointProps = { id, kind, text: "Enter your bullet point text here...." };
//                 dispatch(addBulletData(bulletPointData));
//                 dispatch(addResumeItem({ kind, elementId: id }));
//                 break;
//             case "education": return;
//             case "prevJob": const prevJobData: PrevJobProps = { id, kind, companyName: "Company Name", jobTitle: "Your Job Title", location: "City, ST", monthStarted: "Jan", yearStarted: 2024, monthEnded: "Dec", yearEnded: 2025 };
//                 dispatch(addPrevJobData(prevJobData));
//                 dispatch(addResumeItem({ kind, elementId: id }));
//                 break;
//         }
//     }


// }