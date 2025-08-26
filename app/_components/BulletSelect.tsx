"use client";

import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function BulletSelect() {
  const bullets = useSelector(
    (state: RootState) => state.resume.data.bulletPoints
  );

  if (!bullets) return null;

  return (
    <select>
      {bullets.map((b) => (
        <option key={b.id} value={b.text}>
          {b.text}
        </option>
      ))}
    </select>
  );
}
