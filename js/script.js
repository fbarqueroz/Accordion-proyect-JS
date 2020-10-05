//
// Script code (Accordion)
//

document.querySelectorAll('accorduion_button').forEach (button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling; // nextElementSibling => Obtiene el contenido del HTML del siguiente elemento hermano.
        button.classList.toggle('accordion')
    })
})