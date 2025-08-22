import SideResume from "@/app/_components/SideResume";

export default function Page() {
  return (
    <div className="flex h-dvh w-full">
      <div className="w-64 bg-blue-500">Col A</div>
      <div className="flex-1 overflow-auto w-full">
        <SideResume />
      </div>
    </div>
  );
}
