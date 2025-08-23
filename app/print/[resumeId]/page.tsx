import SideResume from "@/app/_components/SideResume";

function Page() {
  return (
    <div className="resume-page">
      <SideResume mode="print" scale={1} />;
    </div>
  );
}

export default Page;
