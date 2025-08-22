"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/app/_lib/dexie/db";

export default function BulletSelect() {
  const bullets = useLiveQuery(() => db.bullets.toArray(), []);

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
