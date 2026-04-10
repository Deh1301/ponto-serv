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

  if (tipo === "ar") {
    mensagem = "Olá! Vim pelo site e quero orçamento de ar condicionado. Quantos aparelhos são, quantos BTUs e qual bairro?";
  }

  if (tipo === "geladeira") {
    mensagem = "Olá! Vim pelo site e preciso de manutenção de geladeira. Vou descrever o defeito:";
  }

  if (tipo === "lavadora") {
    mensagem = "Olá! Vim pelo site e preciso de manutenção de máquina de lavar. Vou descrever o defeito:";
  }

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}