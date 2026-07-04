// In-page smooth scroll for anchor links.
// The app uses HashRouter, which owns location.hash — so native `href="#id"`
// anchors don't scroll (the router intercepts the hash). We preventDefault and
// scroll manually instead. scroll-margin-top on the sections offsets the sticky nav.
export function scrollToSection(e, id) {
  const el = document.getElementById(id);
  if (!el) return; // target missing → let the link behave normally
  e.preventDefault();
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
