"use client";

import { createContext, useContext, useState } from "react";

type ScaleCtx = {
  scale: number;
  setScale: (next: number | ((prev: number) => number)) => void;
};

const ScaleContext = createContext<ScaleCtx | undefined>(undefined);

const MAX = 1.25;
const MIN = 0.5;
const START = 0.75;

export function ScaleProvider({ children }: { children: React.ReactNode }) {
  const [scale, setScale] = useState(START);

  return (
    <ScaleContext.Provider value={{ scale, setScale }}>
      {children}
    </ScaleContext.Provider>
  );
}

export function useScale() {
  const ctx = useContext(ScaleContext);
  if (!ctx) throw new Error("useScale must be used inside <ScaleProvider>");
  return ctx;
}

export { MAX, MIN, START };
