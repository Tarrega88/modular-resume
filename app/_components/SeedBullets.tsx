"use client";

import { db } from "@/app/_lib/dexie/db";

export default function SeedBullets() {
  async function handleSeed() {
    await db.bullets.clear();

    const id1 = crypto.randomUUID();
    const id2 = crypto.randomUUID();
    const id3 = crypto.randomUUID();

    await db.bullets.bulkAdd([
      { id: id1, text: `1. ${id1}` },
      { id: id2, text: `2. ${id2}` },
      { id: id3, text: `3. ${id3}` },
    ]);
  }

  return (
    <button
      onClick={handleSeed}
      className="px-3 py-1 bg-emerald-500 text-white rounded"
    >
      Seed Dummy Bullets
    </button>
  );
}
