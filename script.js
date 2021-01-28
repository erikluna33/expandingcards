var panels = document.querySelectorAll('.panel')


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


// for(var i = 0; i < panels.length; i++){
//     panels[i].addEventListener("click", function(){
//         panels.
//     })
// }