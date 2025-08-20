import SideResume from "@/app/_components/SideResume";

function Page() {
  return (
    <div className="grid grid-cols-[1fr_2fr] h-screen">
      <div className="bg-blue-500">Col A</div>
      <SideResume />
    </div>
  );
}

export default Page;
