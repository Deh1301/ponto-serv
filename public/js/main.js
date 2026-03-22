document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1200,
    once: true
  })
})

function toggleCard(card){

  const cards = document.querySelectorAll('.card')

  cards.forEach(c => {
    if(c !== card){
      c.classList.remove('active')
    }
  })

  card.classList.toggle('active')
}