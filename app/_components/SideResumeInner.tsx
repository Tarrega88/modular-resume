import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../_lib/dexie/db";
import BulletPoint from "./BulletPoint";
import ResumeHeader from "./ResumeHeader";

export default function SideResumeInner() {
  const bullets = useLiveQuery(() => db.bullets.toArray(), []);

  const PAGE_HEIGHT = 1100;
  const LINE_THICKNESS = 2;

  //TODO 8/23/2025: I am probably going to change this to be page-by-page editing.
  //The problem with continuous editing is that the padding here would only apply to the first page
  //all subsequent pages don't know they're new pages

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        width: "850px",
        height: "1100px",
        fontSize: "16px",
        lineHeight: 1.4,
        padding: "48px", //TODO: will set to 48 when I'm done testing page breaks
        // overflowY: "auto",
      }}
    >
      <ResumeHeader />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />
      <BulletPoint />

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
  /* <BulletPoint id="32b166b8-4243-473d-b98c-1f5ceba95160" text="1" /> */
}
{
  /* {Array.from({ length: 52 }, (_, i) => (
        <div key={i}>
          ABCDEFGHIJKLNOPQRSTUVWXYZ ABCDEFGHIJKLNOPQRSTUVWXYZ
          ABCDEFGHIJKLNOPQRSTUVWXYZ ABDEF
        </div>
      ))} */
}
