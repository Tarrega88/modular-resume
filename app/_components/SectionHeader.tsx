import { SectionHeaderProps } from "@/state/resumeSlice";

function SectionHeader({ id, text }: SectionHeaderProps) {
  return <div className="text-xl font-semibold py-2">{text}</div>;
}

export default SectionHeader;
