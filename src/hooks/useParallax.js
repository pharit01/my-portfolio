import { useEffect, useRef } from "react";

/**
 * Mouse parallax for the hero's floating shapes.
 * Writes the pointer position (-0.5…0.5 from the viewport centre) to the
 * --mx / --my custom properties on the returned element; each shape turns
 * that into its own offset via the CSS `translate` property, which composes
 * with (rather than overrides) its keyframed float `transform`.
 */
export function useParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", (e.clientX / window.innerWidth - 0.5).toFixed(3));
        el.style.setProperty("--my", (e.clientY / window.innerHeight - 0.5).toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return ref;
}
