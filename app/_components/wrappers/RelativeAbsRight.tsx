import { pageWidth, widthWithoutMargin } from "../SideResumeInner";
//Note: add the className "group" to any parent of this
function RelativeAbsRight({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: pageWidth }} className="-translate-x-[48px]">
      <div className="relative">
        <div className="absolute right-6 group-hover:opacity-100 opacity-0 transition-all duration-150">
          {children}
        </div>
      </div>
    </div>
  );
}

export default RelativeAbsRight;
