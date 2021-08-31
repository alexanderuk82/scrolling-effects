'use strict';
const cards = document.querySelectorAll('.cards__card');
window.addEventListener('scroll', checkboxes);
function checkboxes() {
    const trigger = (window.innerHeight /12 * 6 );
    cards.forEach(card => {
       
        const topCard = card.getBoundingClientRect().top

        if (topCard < trigger) {
            card.classList.add('show')
        } else {
            card.classList.remove('show')
        }
    
    })
}
checkboxes();


