import { pageWidth, widthWithoutMargin } from "../SideResumeInner";
//Note: add the className "group" to any parent of this
function RelativeAbsRight({
  children,
  hPosition,
}: // vPosition,
{
  children: React.ReactNode;
  hPosition: "normal" | "far";
  // vPosition?: "normal" | "far";
}) {
  const hPositions = {
    normal: 50,
    far: 12,
  };

  //          style={{ left: `${hPositions[hPosition]}px` }}
  return (
    <div
      style={{ width: pageWidth }}
      // className="-translate-x-[48px]"
    >
      <div className="relative">
        <div
          style={{ right: `${hPositions[hPosition]}px` }}
          className="absolute right-6 group-hover:opacity-100 opacity-0 transition-all duration-150"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default RelativeAbsRight;
