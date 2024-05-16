const myProject = document.getElementById('projects')
const rightBtn = document.getElementById('right-btn')
const leftBtn = document.getElementById('left-btn')

//  EVENT LISTENER
rightBtn.addEventListener("click", () => myProject.scrollBy({ left: 550, behavior: 'smooth' }))
leftBtn.addEventListener("click", () => myProject.scrollBy({ left: -550, behavior: 'smooth' }))

document.addEventListener("DOMContentLoaded", () => {
    const project3 = document.querySelector('.project-card:nth-child(2)')
    const containerWidth = myProject.clientWidth
    const cardWidth = project3.clientWidth

    // Calculate the scroll position to be in the center 
    const scrollPosition = project3.offsetLeft - (containerWidth - cardWidth) / 2

    // Scroll the container to the calculated position
    myProject.scrollTo({
        left: scrollPosition,
    })
})

console.info("Hello there, thanks for visiting my portfolio")
