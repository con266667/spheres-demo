const controller = new ScrollMagic.Controller();

const animationAttributes = [
  "scale",
  "opacity",
  "x",
  "y",
];


function addTimeline (element, timeline) {
  new ScrollMagic.Scene({
      triggerElement: element,
      triggerHook: 0,
      duration: "100%",
  })
      .setTween(timeline)
      .setPin(element)
      .addTo(controller);
}

function addTimelineElementAnimations (element, timeline) {
  var prevDuration = 0;
  animationAttributes.forEach(attribute => {
    const attributeValue = element.dataset[attribute];
    if (attributeValue) {
      const duration = parseInt(element.dataset[`${attribute}Duration`]) || 0;
      const delay = prevDuration - (parseInt(element.dataset[`${attribute}Delay`]) || 0);
      timeline.to(element, duration, {[attribute]: attributeValue, ease: Power1.easeInOut, force3D: false}, delay < 0 ? `+=${delay}` : `-=${delay}`);
      prevDuration = duration + delay;
    }
  }
  );

  if (Array.from(element.children).length > 0) {
    Array.from(element.children).forEach(child => {
      addTimelineElementAnimations(child, timeline);
    }
    );
  }
}

document.querySelectorAll('[data-animation]')
  .forEach(element => {
    const timeline = new TimelineLite()
    
    Array.from(element.children).forEach(child => {
      addTimelineElementAnimations(child, timeline);
    });

    addTimeline(element, timeline);
});