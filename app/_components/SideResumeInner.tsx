import BulletPoint from "./BulletPoint";
import ResumeHeader from "./ResumeHeader";
import JobSection from "./JobSection";
import { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export default function SideResumeInner() {
  const PAGE_HEIGHT = 1100;
  const LINE_THICKNESS = 2;

  const bullets = useSelector(
    (state: RootState) => state.resume.data.bulletPoints
  );

  const resumeState = useSelector((state: RootState) => state.resume);

  const currentResume = resumeState.currentResume;
  const allData = resumeState.data;
  const renderOrder = resumeState.resumes[currentResume];

  //TODO: 8/25/2025: render different components based on the "kind" inside of each renderOrder element

  //TODO 8/23/2025: I am probably going to change this to be page-by-page editing.
  //The problem with continuous editing is that the padding here would only apply to the first page
  //all subsequent pages don't know they're new pages

  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    console.log("Here");
    if (!ref.current) return;
    // console.log("offsetHeight:", ref.current.offsetHeight); // integer, includes borders
    console.log("clientHeight:", ref.current.clientHeight); // excludes borders/scrollbar
    // console.log("rect height:", ref.current.getBoundingClientRect().height); // precise, decimals
  });

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        backgroundColor: "white",
        width: "850px",
        minHeight: "1100px",
        fontSize: "16px",
        lineHeight: 1.4,
        paddingLeft: "48px", //TODO: will set to 48 when I'm done testing page breaks
        paddingRight: "48px",
        overflow: "hidden",

        // overflowY: "auto",
      }}
    >
      <div className="h-[48px]"></div>
      <ResumeHeader />
      <JobSection />

      {/* {bullets.map((e) => (
        <BulletPoint key={e.id} id={e.id} text={e.text} />
      ))} */}

      {/* <div className=" bg-white absolute bottom-0 h-[48px] text-center w-[802px]"></div> */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 10,
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent,
            transparent ${PAGE_HEIGHT - LINE_THICKNESS}px,
            rgba(0,0,0,0.35) ${PAGE_HEIGHT - LINE_THICKNESS}px,
            rgba(0,0,0,0.35) ${PAGE_HEIGHT}px
          )`,
        }}
      />
    </div>
  );
}

{
  /* {Array.from({ length: 52 }, (_, i) => (
        <div key={i}>
          ABCDEFGHIJKLNOPQRSTUVWXYZ ABCDEFGHIJKLNOPQRSTUVWXYZ
          ABCDEFGHIJKLNOPQRSTUVWXYZ ABDEF
        </div>
      ))} */
}

{
  //dotted line spacer:
  /*
     <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 10,
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent,
            transparent ${PAGE_HEIGHT - LINE_THICKNESS}px,
            rgba(0,0,0,0.35) ${PAGE_HEIGHT - LINE_THICKNESS}px,
            rgba(0,0,0,0.35) ${PAGE_HEIGHT}px
          )`,
        }}
      />
  */
}
