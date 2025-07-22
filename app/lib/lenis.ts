// lib/lenis.ts
import Lenis from "@studio-freight/lenis";

export const initSmoothScroll = () => {
  const lenis = new Lenis();

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
};
