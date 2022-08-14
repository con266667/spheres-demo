const timeline = new TimelineLite()
    .to(".animation .title", 15, {opacity: 1, scale: 1, ease: Power1.easeInOut, force3D: false})
    .to(".animation .title", 10, {x: -300, ease: Power1.easeInOut}, "-=5")
    .to(".animation .description", 10, {y: 0, x: -300, opacity: 1, ease: Power1.easeInOut});

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: ".animation",
    triggerHook: 0,
    duration: "100%",
})
    .setTween(timeline)
    .setPin(".animation")
    .addTo(controller);