function heroPage() {
  var tl = gsap.timeline();

  tl.from("nav", {
    y: "-10",
    opacity: 0,
    duration: 1.2,
    ease: Expo.easeInOut,
  })
    .to(".boundingElm", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1,
      delay: -0.5,
      stagger: 0.2,
    })
    .from(".hero-footer", {
      y: "-10",
      opacity: 0,
      ease: Expo.easeInOut,
      delay: -0.9,
      duration: 1,
    });
}
heroPage();
