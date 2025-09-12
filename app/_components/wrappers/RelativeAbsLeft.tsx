import { pageWidth } from "../SideResumeInner";

function RelativeAbsLeft({
  children,
  hPosition,
}: {
  children: React.ReactNode;
  hPosition: "normal" | "bullet" | "far";
}) {
  const hPositions = {
    normal: 22,
    bullet: 51,
    far: 2,
  };

  return (
    <div
      style={{ width: pageWidth }}
      className="-translate-x-[48px] relative"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        style={{ left: `${hPositions[hPosition]}px` }}
        className="absolute group-hover:opacity-100 opacity-0 transition-all duration-150"
      >
        {children}
      </div>
    </div>
  );
}

export default RelativeAbsLeft;
