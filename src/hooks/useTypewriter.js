import { useEffect, useState } from "react";

const ROLES = ["Fullstack Developer", "Frontend Developer"];

/**
 * Typewriter for the hero role line. Cycles through ROLES, typing ~85ms/char,
 * deleting ~45ms/char, pausing ~1500ms at a full word.
 * Initial state is a full role so the text is visible on first paint, even
 * before the effect runs (never start hidden/empty).
 */
export function useTypewriter(enabled = true) {
  const [text, setText] = useState(ROLES[0]);

  useEffect(() => {
    if (!enabled) return;

    let r = 0;
    let i = ROLES[0].length;
    let deleting = true;
    let timer;

    const step = () => {
      if (deleting) {
        i--;
        if (i <= 0) {
          deleting = false;
          r = (r + 1) % ROLES.length;
          i = 0;
        }
      } else {
        i++;
        if (i >= ROLES[r].length) {
          deleting = true;
          setText(ROLES[r]);
          timer = setTimeout(step, 1500);
          return;
        }
      }
      setText(ROLES[r].slice(0, Math.max(0, i)));
      timer = setTimeout(step, deleting ? 45 : 85);
    };

    timer = setTimeout(step, 1600);
    return () => clearTimeout(timer);
  }, [enabled]);

  return text;
}
