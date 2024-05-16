const myProject = document.getElementById('projects')
const rightBtn = document.getElementById('right-btn')
const leftBtn = document.getElementById('left-btn')

//  EVENT LISTENER
rightBtn.addEventListener("click", () => myProject.scrollBy({ left: 450, behavior: 'smooth' }))
leftBtn.addEventListener("click", () => myProject.scrollBy({ left: -450, behavior: 'smooth' }))

document.addEventListener("DOMContentLoaded", () => {
    const project3 = document.querySelector('.project-card:nth-child(2)')
    const containerWidth = myProject.clientWidth
    const cardWidth = project3.clientWidth

    // Calculate the scroll position to center Project 3 and Project 4
    const scrollPosition = project3.offsetLeft - (containerWidth - cardWidth) / 2

    // Scroll the container to the calculated position
    myProject.scrollTo({
        left: scrollPosition,
    })
})

console.info("Hello there, thanks for visiting my portfolio")
