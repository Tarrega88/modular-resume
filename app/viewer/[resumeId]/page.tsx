import Link from "next/link";

export default function ViewerPage({
  params,
}: {
  params: { resumeId: string };
}) {
  const apiSrc = `/api/pdf?path=/print/${params.resumeId}`;
  return (
    <div className="h-screen flex flex-col">
      <nav className="shrink-0 bg-gray-900 text-white px-4 py-2 flex items-center gap-3">
        <span className="font-semibold">Resume Viewer</span>
        <Link href={apiSrc} className="underline" target="_blank">
          Open PDF in new tab
        </Link>
        <a
          href={apiSrc}
          download={`resume-${params.resumeId}.pdf`}
          className="underline"
        >
          Download
        </a>
        {/* other controls */}
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
