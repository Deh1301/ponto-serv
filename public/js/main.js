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

  let numero = "5512999999999"; // troca aqui

  let mensagem = "";

  if (tipo === "ar") {
    mensagem = "Olá! Aqui é da Pontoserv Assistência Técnica. Vi no site sobre higienização de ar condicionado. Quantos aparelhos são, quantos BTUs e qual bairro?";
  }

  if (tipo === "geladeira") {
    mensagem = "Olá! Aqui é da Pontoserv Assistência Técnica. Vi no site sobre manutenção de geladeira, vou descrever o defeito:";
  }

  if (tipo === "lavaeseca") {
    mensagem = "Olá! Aqui é da Pontoserv Assistência Técnica. Vi no site sobre manutenção de lava e seca, e lavadouras de roupa vou descrever o defeito:";
  }

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}