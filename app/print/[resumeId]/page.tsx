import SideResume from "@/app/_components/SideResume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prepared Resume",
};

function Page() {
  return (
    <div className="resume-page">
      <SideResume scale={1} />
    </div>
  );
}

export default Page;
