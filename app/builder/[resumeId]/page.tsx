import BulletList from "@/app/_components/BulletList";
import SeedBullets from "@/app/_components/SeedBullets";
import SideResume from "@/app/_components/SideResume";

export default function Page() {
  return (
    <div className="flex h-dvh w-full">
      <div className="w-64 bg-blue-500">
        <div>Col A</div>
        <SeedBullets />
        <BulletList />
      </div>
      <div className="flex-1 overflow-auto w-full bg-gray-500 pt-5 px-5 grid items-start justify-items-center">
        <SideResume />
      </div>
    </div>
  );
}
