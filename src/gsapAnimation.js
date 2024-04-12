var tl = gsap.timeline();
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
  //   opacity: 0,
  yoyo: true,
});
