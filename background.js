const gradients = [
    "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    "linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%)",
]

for(let i = 0; i < gradients.length; i++) {
    const timeline = new TimelineLite()
    .to('.background', 100, {backgroundImage: gradients[i], ease: Power1.easeInOut})

    const scene = new ScrollMagic.Scene({
        triggerElement: `#page-${i + 1}`,
        triggerHook: 0,
        duration: '100%',
    })
        .setTween(timeline)
        // .setPin('.background')
        .addTo(controller);
}

