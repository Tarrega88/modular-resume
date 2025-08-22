import { ScaleProvider } from "@/app/_context/ScaleContext";

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ScaleProvider>{children}</ScaleProvider>;
}
