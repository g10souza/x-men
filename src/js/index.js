/* O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem azul de seleção na imagem pequena do personagem mostrar a imagem, o nome e o texto do personagem que está selecionado

OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo

    passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
    passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse 
    passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.


OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nomne e a descrição do personagem grande

    1 passo - pegar o elemento do personagem grande pra adicionar as informações nele 
    passo 2 - alterar a imagem do personagem grande 
    passo 3 - alterar o nome do personagem grande 
    passo 4 - alterar a descrição do personagem grande. */


    // OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo
    // passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem')


// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse 
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

  // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
  const personagemSelecionado = document.querySelector('.selecionado')
  personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nomne e a descrição do personagem grande
      
        // 1 passo - pegar o elemento do personagem grande pra adicionar as informações nele 
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        //passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `src/imagens/imagens/card-${idPersonagem}.png`;

        // passo 3 - alterar o nome do personagem grande 
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerHTML= personagem.getAttribute('data-description');
    })
})