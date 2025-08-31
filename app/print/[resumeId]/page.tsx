import ViewResume from "@/app/_components/ViewResume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prepared Resume",
};

function Page() {
  return (
    <div className="resume-page">
      <ViewResume />
    </div>
  );
}

export default Page;
