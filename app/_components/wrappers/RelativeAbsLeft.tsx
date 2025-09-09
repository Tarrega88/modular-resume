import { pageWidth } from "../SideResumeInner";

function RelativeAbsLeft({
  children,
  hPosition,
}: {
  children: React.ReactNode;
  hPosition: "normal" | "bullet";
}) {
  const hPositions = {
    normal: 24,
    bullet: 51,
  };

  return (
    <div
      style={{ width: pageWidth }}
      className="-translate-x-[48px]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative">
        <div
          style={{ left: `${hPositions[hPosition]}px` }}
          className="absolute group-hover:opacity-100 opacity-0 transition-all duration-150"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default RelativeAbsLeft;
