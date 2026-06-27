import { useEffect, useRef } from "react";

/**
 * 3D mouse-tilt for the hero profile card.
 * Returns refs for the wrapper (listens for pointer movement) and the card
 * (the element actually tilted). Idle float lives on a parent element so it
 * never conflicts with the JS transform applied here.
 */
export function useTilt() {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    const rest = "rotateY(-15deg) rotateX(7deg)";

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transition = "transform .08s ease-out";
      card.style.transform = `rotateY(${px * 26}deg) rotateX(${-py * 20}deg)`;
    };

    const onLeave = () => {
      card.style.transition = "transform .7s cubic-bezier(.2,.7,.2,1)";
      card.style.transform = rest;
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return { wrapRef, cardRef };
}
