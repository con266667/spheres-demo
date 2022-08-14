animationData = {
  ".animation" : {
    ".title" : [
      {
        tween: {opacity: 1, scale: 1, ease: Power1.easeInOut, force3D: false},
        duration: 15,
      },
      {
        tween: {x: -300, ease: Power1.easeInOut},
        duration: 10,
        offset: "-=5",
      }
    ],
    ".description" : [
      {
        tween: {y: 0, x:-300, opacity: 1, ease: Power1.easeInOut},
        duration: 10,
      }
    ]
  },
}

const controller = new ScrollMagic.Controller();

Object.entries(animationData).forEach(item => {
  const [name, container] = item;
  const timeline = new TimelineLite();
  Object.entries(container).forEach(item => {
    const [object, animations] = item;
    animations.forEach(animation => {
      timeline.to(object, animation.duration, animation.tween, animation.offset);
    });
  });

  new ScrollMagic.Scene({
    triggerElement: name,
    triggerHook: 0,
    duration: "100%",
  })
    .setTween(timeline)
    .setPin(name)
    .addTo(controller);
});