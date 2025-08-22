"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/app/_lib/dexie/db";

export default function BulletList() {
  const bullets = useLiveQuery(() => db.bullets.toArray(), []);

  if (!bullets) return null;

  return (
    <ul>
      {bullets.map((b) => (
        <li key={b.id}>{b.text}</li>
      ))}
    </ul>
  );
}
