const bg = document.querySelector('.background')
const color = Math.floor(Math.random() * 16777215).toString(16)
bg.style.backgroundColor = '#' + color

for (let i = 0; i < 6; i++) {
    const circle = document.createElement('div')
    circle.classList.add('circle')

    // Random Position

    const x = Math.random() * (window.innerWidth + 100) - 50
    const y = Math.random() * (window.innerHeight + 100) - 50
    circle.style.transform = `translate(${x}px, ${y}px)`

    // Random Color

    const color = Math.floor(Math.random() * 16777215).toString(16)
    // circle.style.backgroundColor = `#${color}`
    circle.style.backgroundColor = 'transparent'

    // Random Size between 400px and 700px

    const width = Math.random() * (700 - 400) + 400
    const height = Math.random() * (700 - 400) + 400
    circle.style.width = `${0.1}px`
    circle.style.height = `${0.1}px`

    // Feather border

    circle.style.boxShadow = `0 0 ${height}px ${width}px #${color}`
    // circle.style.zIndex = '1'
    // circle.style.position = 'absolute'

    // Random movement along a bezier curve

    const timeline = new TimelineMax({repeat: -1, yoyo: true})
    timeline.to(circle, 10, {
        bezier: {
            type: 'soft',
            curviness: 2,
            values: [
                { x: x, y: y },
                { x: Math.random() * (window.innerWidth + 100) - 50, y: Math.random() * (window.innerHeight + 100) - 50 },
                { x: Math.random() * (window.innerWidth + 100) - 50, y: Math.random() * (window.innerHeight + 100) - 50 },
                { x: Math.random() * (window.innerWidth + 100) - 50, y: Math.random() * (window.innerHeight + 100) - 50 },
            ],
        },
        ease: Power1.easeInOut,
        force3D: false,
    })


    bg.appendChild(circle)
}

