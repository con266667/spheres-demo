var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const bg = document.querySelector('.background')
const color = Math.floor(Math.random() * 16777215).toString(16)
bg.style.backgroundColor = '#' + color

function randomPosition(width = 800, height = 800) {
    var x,y;

    if (isSafari) {
        x = Math.random() * (window.innerWidth + 100) - 50
        y = Math.random() * (window.innerHeight + 100) - 50
    } else {
        x = Math.random() * (window.innerWidth - width + 400) - (width + 200)
        y = Math.random() * (window.innerHeight - height + 400) - (height + 200)
    }

    return { 
        x:x, 
        y:y 
    }
}

function start() {
    for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div')
        circle.classList.add('circle')
        
        var width, height;

        if (isSafari) {
            width = Math.random() * (700 - 400) + 400
            height = Math.random() * (700 - 400) + 400
        } else {
            width = Math.random() * (900 - 700) + 700
            height = Math.random() * (900 - 700) + 700
        }
        const color = Math.floor(Math.random() * 16777215).toString(16)
        // circle.style.backgroundColor = `#${color}`
        circle.style.backgroundColor = 'transparent'

        if (isSafari) {
            circle.style.width = '0.1px'
            circle.style.height = '0.1px'
        } else {
            circle.style.width = `${width}px`
            circle.style.height = `${height}px`
        }

        if (isSafari) {
            circle.style.boxShadow = `0 0 ${height}px ${width}px #${color}`
        } else {
            circle.style.boxShadow = `#${color} ${width}px ${height}px 15000px`
            circle.style.opacity = 0.3
        }

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

window.onload = start()