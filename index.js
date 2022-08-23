const navX = document.querySelector('.navX')
const hamburger = document.getElementById('hamburger')
const navMain = document.querySelector('.active')
const current_rotation = 0;



hamburger.addEventListener('click', () => {
    navMain.style.visibility = "visible";	
})


navX.addEventListener('click', () => {
    navMain.style.visibility = "hidden";	
})

navX.addEventListener('mouseenter', () =>
navX.style.transform = 'rotate(365deg)'
)
navX.addEventListener('touchstart', () =>
navX.style.transform = 'rotate(365deg)'
)
navX.addEventListener('mouseleave', () =>
navX.style.transform = 'rotate(-5deg)'
)
