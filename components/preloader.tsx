"use client";

import { useEffect, useState } from "react";

export const Preloader = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const media = Array.from(document.querySelectorAll("img,video"));
    let loaded = 0;
    const target = Math.max(media.length, 1);

    const update = () => {
      loaded += 1;
      setProgress(Math.round((loaded / target) * 100));
    };

    media.forEach((item) => {
      if (item instanceof HTMLImageElement && item.complete) update();
      else if (item instanceof HTMLVideoElement && item.readyState >= 1) update();
      else {
        item.addEventListener("load", update, { once: true });
        item.addEventListener("loadeddata", update, { once: true });
      }
    });

    const fallback = window.setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 45);

    return () => window.clearInterval(fallback);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const hide = window.setTimeout(() => {
        setHidden(true);
        onDone();
      }, 350);
      return () => window.clearTimeout(hide);
    }
  }, [progress, onDone]);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink transition-opacity duration-500">
      <p className="text-4xl font-semibold tracking-wide text-sand">{progress}%</p>
    </div>
  );
};
