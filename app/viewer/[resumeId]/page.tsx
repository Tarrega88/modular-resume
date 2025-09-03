import SwitchMode from "@/app/_components/SwitchMode";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prepared Resume",
};

export default async function ViewerPage({
  params,
}: {
  params: Promise<{ resumeId: string }>;
}) {
  const { resumeId } = await params;

  const apiSrc = `/api/pdf?path=/print/${resumeId}`;
  return (
    <div className="h-screen flex flex-col">
      <nav className="shrink-0 bg-gray-900 text-white px-4 py-2 flex items-center gap-3">
        <span className="font-semibold">Resume Viewer</span>
        <SwitchMode />
        <Link href={apiSrc} className="underline" target="_blank">
          Open PDF in new tab
        </Link>
        <a
          href={apiSrc}
          download={`resume-${resumeId}.pdf`}
          className="underline"
        >
          Download
        </a>
      </nav>

      <div className="grow">
        <iframe
          title="PDF"
          src={apiSrc}
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
