"use client";

import BuilderColumn from "@/app/_components/BuilderColumn";
import SideResume from "@/app/_components/SideResume";

export default function Page() {
  return (
    <div className="flex h-dvh w-full">
      <BuilderColumn />
      <div className="flex-1 overflow-auto w-full bg-gray-500 pt-5 px-5 grid items-start justify-items-center">
        <SideResume />
      </div>
    </div>
  );
}
