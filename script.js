const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')//only one panel because it is eventListener activated
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')//all panels
    })
}