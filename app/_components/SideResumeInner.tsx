import BulletPoint from "./BulletPoint";

export default function SideResumeInner() {
  const PAGE_HEIGHT = 1100;
  const LINE_THICKNESS = 2;

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        width: "850px",
        minHeight: "1100px",
        fontSize: "16px",
        lineHeight: 1.4,
        // overflowY: "auto",
      }}
    >
      <BulletPoint />
      <BulletPoint />
      {/* <BulletPoint id="32b166b8-4243-473d-b98c-1f5ceba95160" text="1" /> */}
      {/* {Array.from({ length: 52 }, (_, i) => (
        <div key={i}>
          ABCDEFGHIJKLNOPQRSTUVWXYZ ABCDEFGHIJKLNOPQRSTUVWXYZ
          ABCDEFGHIJKLNOPQRSTUVWXYZ ABDEF
        </div>
      ))} */}

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
