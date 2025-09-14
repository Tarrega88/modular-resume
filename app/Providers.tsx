"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/state/store";
import { useEffect, useRef } from "react";
import { hydrate } from "@/state/resumeSlice";
import { loadState, saveState } from "@/app/_db/persistence";

function DexieSync() {
  const dispatch = useDispatch();
  const resume = useSelector((s: RootState) => s.resume);

  // avoid saving until we've attempted hydration
  const bootstrappedRef = useRef(false);

  // 1) Hydrate once on mount
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const saved = await loadState();
      if (cancelled) return;
      if (saved) {
        dispatch(hydrate(saved));
      }
      bootstrappedRef.current = true;
    })();
    return () => {
      cancelled = true;
    };
  }, [dispatch]);

  // 2) Persist on any state change (after hydration)
  useEffect(() => {
    if (!bootstrappedRef.current) return;

    // light debounce to batch quick successive updates
    const id = setTimeout(() => {
      // prefer idle if available
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        (window as any).requestIdleCallback(() => void saveState(resume), {
          timeout: 1000,
        });
      } else {
        void saveState(resume);
      }
    }, 120);

    return () => clearTimeout(id);
  }, [resume]);

  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <DexieSync />
      {children}
    </Provider>
  );
}
