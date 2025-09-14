import ResumeHeader from "./ResumeHeader";
import { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import ResumeItemRenderer from "./ResumeItemRenderer";
import { useParams } from "next/navigation";
import Draggable from "./wrappers/Draggable";

export const pageMargin = 48;
export const pageWidth = 850;
export const pageHeight = 1100;
export const widthWithoutMargin = pageWidth - pageMargin * 2;

export default function SideResumeInner() {
  const resumeState = useSelector((state: RootState) => state.resume);

  const params = useParams();
  const currentResume = params.resumeId as string;
  const renderOrder = resumeState.resumes[currentResume];

  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
  });

  return (
    <div
      className="resume-font text-base"
      ref={ref}
      style={{
        position: "relative",
        backgroundColor: "white",
        width: `${pageWidth}px`,
        height: `${pageHeight}px`,
        lineHeight: 1.4,
        paddingLeft: `${pageMargin}px`,
        paddingRight: `${pageMargin}px`,
        overflow: "hidden",
      }}
    >
      <div className="h-[48px]"></div>
      {renderOrder?.map((e, i) => (
        <Draggable key={e.id} renderIndex={i} kind={e.kind}>
          <ResumeItemRenderer
            renderIndex={i}
            id={e.id}
            kind={e.kind}
            elementId={e.elementId}
          />
        </Draggable>
      ))}

      {/* <div className=" bg-white absolute bottom-0 h-[48px] text-center w-[802px]"></div> */}
    </div>
  );
}

{
  /*
      TODO 8/29/2025: consider making the div below a component that's generated in new pages or attached to ResumeHeader
      */
}

//TODO 8/23/2025: I am probably going to change this to be page-by-page editing.
//The problem with continuous editing is that the padding here would only apply to the first page
//all subsequent pages don't know they're new pages
//TODO 8/26/2025: reliably throw an error if there's no matching id between the params and resumeIds (right now it's based off of the lack of items in renderOrder)

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
