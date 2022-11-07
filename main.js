// FUNÇÃO QUE IRA INDICAR(criar) O JOGO QUE SERÁ DISPUTADO
// vamos utilizar parametros para deixar a função dinamica para ser inserido os jogos que será disputados
function createGame(player1, hour, player2) {
  return `
  <li>
        <img src="assets/icon=${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="assets/icon=${player2}.svg" alt="Bandeira do ${player2}">
      </li>
  `
}
// CONTEUDO QUE CRIA O CARTÃO AGORA ESTÁ DENTRO DE UMA FUNÇÃO
// TODA VEZ QUE EU EXECUTAR ESSA FUNÇÃO ELA VAI RETORNAR ESSE PEDAÇO DE CÓDIGO PARA MIM
// UTILIZAMOS ESSES ARGUMENTOS NA FUNÇÃO PARA FAZER A REFERENCIA AS DATAS E DIAS DO JOGO QUE VAMOS COLOCAR, na tag <h2> vemos o exemplo de interpolação.

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
   <h2>${date}<span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

// `` significa que eu posso fazer quebras de linhas na string
// Essa linha abaixo está pegando o id (#app) e está colocando um HTML interno nele atráves do innerHTML, ele está substituindo tudo que tem la na div do html com o id app

// APLICAMOS REFATORAÇÃO -> MUDAR O CÓDIGO SEM ALTERAR O COMPORTAMENTO.
document.querySelector("#cards").innerHTML = 
  createCard("22/11", "Terça",
  createGame("france", "16:00", "australia")
  ) +

  createCard("23/11", "Quarta",
  createGame("germany", "10:00", "japan")
  ) +

  createCard("24/11", "Quinta",
  createGame("portugal", "13:00", "ghana")
  )

  // código sem refatoração

  //document.querySelector("#app").innerHTML = `
//<header>
  //<img src="assets/logo.svg" alt="Logo NLW">
 //</header>
//<main id="cards">
//  ${createCard("22/11", "Terça",
  //createGame("france", "16:00", "australia")
  //)}
  
  //${createCard("23/11", "Quarta",
  //createGame("germany", "10:00", "japan")
  //)}
  //${createCard("24/11", "Quinta",
  //createGame("portugal", "13:00", "ghana")
  //)}
//</main>
//`
