import { Kinds } from "@/state/resumeSlice";

function ExperienceHeader({ id, kind }: { id: string; kind: Kinds }) {
  return <div className="text-xl font-semibold py-2">Experience</div>;
}

export default ExperienceHeader;
