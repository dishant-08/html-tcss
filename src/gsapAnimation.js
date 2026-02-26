// ─── GSAP hero entrance animations ───────────────────────────────────────────
// Timeline plays sequentially on page load.
// Targets: .hello (greeting line), .headingname (name), .hi (wave emoji), .work (subtitle)

const tl = gsap.timeline();

tl.from(".hello", {
  x: -100,
  opacity: 0,
  duration: 1,
});

tl.from(".headingname", {
  y: -100,
  opacity: 0,
  duration: 1,
});

tl.to(".hi", {
  rotate: 45,
  x: 10,
  y: -10,
  repeat: 3,
  yoyo: true,
});

tl.from(".work", {
  opacity: 0,
  y: 20,
  duration: 0.8,
});
