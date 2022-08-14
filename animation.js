const timeline = new TimelineLite()
    .to(".title", 15, {opacity: 1, scale: 1, ease: Power1.easeInOut, force3D: false})
    .to(".title", 10, {x: -300, ease: Power1.easeInOut}, "-=5")
    .to(".items .description:first-of-type", 10, {y: 0, x: -300, opacity: 1, ease: Power1.easeInOut})
    .to(".items .description:nth-of-type(2)", 10, {y: 0, x: -300, opacity: 1, ease: Power1.easeInOut})
    .to(".title", 10, {y:-100, opacity: 0, ease: Power1.easeInOut}, "+=5")
    .to(".items .description", 10, {y: -100, opacity: 0, ease: Power1.easeInOut}, "-=8")

addTimeline(".animation", timeline);