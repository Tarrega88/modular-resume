import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SwitchMode() {
  const pathname = usePathname();
  const fromMode = pathname.includes("builder") ? "builder" : "viewer";
  const toMode = fromMode === "builder" ? "viewer" : "builder";
  const viewerPath = pathname.replace(fromMode, toMode);

  return (
    <Link href={viewerPath} className="underline">
      Switch to Viewer
    </Link>
  );
}
