const flightPath = {
  curviness: 1.5,
  autoRotate: true,
  values: [
    {x: (window.innerWidth/8), y: -20},
    {x: (window.innerWidth/8)*2, y:10},
    {x: (window.innerWidth/8)*3, y: 100},
    {x: (window.innerWidth/8)*4, y: -100},
    {x: (window.innerWidth/8)*3, y: -50},
    {x: (window.innerWidth/8)*5, y: 100},
    {x: (window.innerWidth/8)*7, y: 0},
    {x: window.innerWidth + 150, y: 100}
  ]
}

//Scale

const scale = new TimelineLite()

scale.add(
  TweenLite.to('.title' , 3, {
    scale: 1,
    ease: Power1.easeInOut,
    force3D: false,
    // delay: 1
  })
)

const opacity = new TimelineLite()

opacity.add(
  TweenLite.to('.title' , 3, {
    opacity: 1,
    ease: Power1.easeInOut,
  })
)

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
  triggerElement: '.title-animation',
  triggerHook: 0,
  duration: '100%'
})
.setTween(scale)
.addTo(controller)
.setPin('.title-animation')

const scene2 = new ScrollMagic.Scene({
  triggerElement: '.title-animation',
  triggerHook: 0,
  duration: '100%'
})
.setTween(opacity)
.addTo(controller)

