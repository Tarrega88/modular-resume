import { pageWidth } from "./SideResumeInner";

function RelativeAbsLeft({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: pageWidth }} className="-translate-x-[48px]">
      <div className="relative">
        <div className="absolute left-6 group-hover:opacity-100 opacity-0 transition-all duration-150">
          {children}
        </div>
      </div>
    </div>
  );
}

export default RelativeAbsLeft;
