const circle = document.querySelector(".mini-circle");
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleChapta() {
  let timeOut;
  let xscale = 1;
  let yscale = 1;
  let xprev = 0;
  let yprev = 0;
  window.addEventListener("mousemove", (e) => {
    clearTimeout(timeOut);
    xscale = gsap.utils.clamp(0.6, 1.9, e.clientX - xprev);
    yscale = gsap.utils.clamp(0.6, 1.9, e.clientY - yprev);

    xprev = e.clientX;
    yprev = e.clientY;

    circleMourseOver(xscale, yscale);

    timeOut = setTimeout(() => {
      circle.style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(1,1)`;
    }, 100);
  });
}
circleChapta();

function circleMourseOver(xscale, yscale) {
  window.addEventListener("mousemove", (e) => {
    circle.style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(${xscale},${yscale})`;
  });
}
circleMourseOver();

//

document.querySelectorAll(".elm").forEach(function (elm) {
  let rotate = 0;
  let roateDiff = 0;

  elm.addEventListener("mouseleave", function (e) {
    gsap.to(elm.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elm.addEventListener("mousemove", function (e) {
    var topp = e.clientY - elm.getBoundingClientRect().top;
    roateDiff = e.clientX - rotate;
    rotate = e.clientX;
    gsap.to(elm.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: topp,
      left: e.clientX,
      rotate: gsap.utils.clamp(-20, 20, roateDiff),
    });
  });
});
