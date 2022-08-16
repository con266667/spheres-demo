var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const bg = document.querySelector('.background')
const color = Math.floor(Math.random() * 16777215).toString(16)
bg.style.backgroundColor = '#' + color

function randomPosition(width = 800, height = 800) {
    const x = Math.random() * (window.innerWidth + 100) - 50
    const y = Math.random() * (window.innerHeight + 100) - 50

    return { 
        x:x, 
        y:y 
    }
}

function start() {
    for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div')
        circle.classList.add('circle')
        
        const width = Math.random() * (700 - 400) + 400
        const height = Math.random() * (700 - 400) + 400
        const color = Math.floor(Math.random() * 16777215).toString(16)
        circle.style.backgroundColor = 'transparent'

        circle.style.width = '0.1px'
        circle.style.height = '0.1px'

        circle.style.boxShadow = `0 0 ${height}px ${width}px #${color}`

        const randomXY = randomPosition(width, height);

        circle.style.transform = `translate(${randomXY.x}px, ${randomXY.y}px)`
        
        const timeline = new TimelineMax({repeat: -1, yoyo: true})
        timeline.to(circle, 10, {
            bezier: {
                type: 'soft',
                curviness: 2,
                values: [
                    randomPosition(width, height),
                    randomPosition(width, height)
                ],
            },
            ease: Power1.easeInOut,
            force3D: false,
        })


        bg.appendChild(circle)
    }
}

if (isSafari) {
    start()
}