const controller = new ScrollMagic.Controller();

const animationAttributes = [
  "scale",
  "opacity",
  "x",
  "y",
  "backgroundImage"
];


function addTimeline (element, timeline, triggerHook, offset) {
  new ScrollMagic.Scene({
      triggerElement: element,
      triggerHook: triggerHook,
      offset: offset,
      duration: "100%",
  })
      .setTween(timeline)
      .setPin(element)
      // .addIndicators()
      .addTo(controller);
}

function addAnimationsToTimeline (element, timeline, isFinal) {
  var prevDuration = 0;

  animationAttributes.forEach(attribute_raw => {
    var attribute = attribute_raw;
    var attributeValue = element.dataset[attribute];
    if (isFinal) {
      attribute = 'final' + attribute.charAt(0).toUpperCase() + attribute.slice(1);
      attributeValue = element.dataset[attribute];
    }
    
    if (attributeValue !== undefined) {
      console.log(attribute);
      const duration = parseInt(element.dataset[`${attribute}Duration`]) || 10;
      const delay = prevDuration - (parseInt(element.dataset[`${attribute}Delay`]) || 0);
      timeline.to(element, duration, {[attribute_raw]: attributeValue, ease: Power1.easeInOut, force3D: false}, delay < 0 ? `+=${delay}` : `-=${delay}`);
      prevDuration = duration + delay;
    }
  });

  if (Array.from(element.children).length > 0) {
    Array.from(element.children).forEach(child => {
      addAnimationsToTimeline(child, timeline, isFinal);
    }
    );
  }
}

function addStartAnimations(element, timeline) {
  Array.from(element.children).forEach(child => {
    addAnimationsToTimeline(child, timeline, false);
  });
}

function addFinalAnimations(element, timeline) {
  Array.from(element.children).forEach(child => {
    addAnimationsToTimeline(child, timeline, true);
  });
}

document.querySelectorAll('[data-animation]')
  .forEach(element => {
    const timeline = new TimelineLite();
    
    addStartAnimations(element, timeline);
    addFinalAnimations(element, timeline);

    const triggerHook = parseFloat(element.dataset.triggerHook) || 0;
    const offset = parseFloat(element.dataset.offset) || 0;
    addTimeline(element, timeline, triggerHook, offset);
  }
);

