import { SectionHeaderProps } from "@/state/types";

//TODO 9/6/2025: Consider whether to store section header data as oneoffs or allow
//multiple versions of each header type

function SectionHeader({ id, text, kind }: SectionHeaderProps) {
  return <div className="text-xl font-semibold py-2">{text}</div>;
}

export default SectionHeader;
