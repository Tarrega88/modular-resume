"use client";

import { db } from "@/app/_lib/dexie/db";

export default function SeedBullets() {
  async function handleSeed() {
    await db.bullets.clear();
    await db.bullets.bulkAdd([
      { id: crypto.randomUUID(), text: "First bullet" },
      { id: crypto.randomUUID(), text: "Second bullet" },
      { id: crypto.randomUUID(), text: "Third bullet" },
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
