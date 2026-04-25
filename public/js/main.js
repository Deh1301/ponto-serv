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

function enviarWhats(tipo){

  let numero = "5512981739210";

  let mensagem = "";

  if (tipo === "lavar") {
    mensagem = "Olá! Vim pelo site e quero orçamento para minha maquina de lavar. Vou descrever brevemente o defeito:";
  }

  if (tipo === "geladeira") {
    mensagem = "Olá! Vim pelo site e preciso de manutenção de geladeira. Vou descrever o defeito:";
  }

  if (tipo === "lavadora") {
    mensagem = "Olá! Vim pelo site e preciso de manutenção na minha lava e seca. Vou descrever o defeito:";
  }

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}