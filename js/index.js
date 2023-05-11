// function listarObjetos(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//         let atualCard = array[i];
       
//     }
    
// }
// listarObjetos(data)

const secaoVitrine = document.getElementById('#section1')
const ulCard = document.createElement('ul');
secaoVitrine.appendChild(ulCard)

// FUNÇÃO DE CRIAR TEMPLATE (LI)
function createTemplate(obj) {
    li = document.createElement('li');
    li.innerHTML = 
        `<figure class="present-card">
            <img src="${obj.img}" alt="${obj.nameItem}">
        </figure>
        <div class="info">
            <button type="submit">${obj.tag}</button>
            <h4>${obj.nameItem}</h4>
            <p>${obj.description}</p>
            <h4 class="value">R$ ${obj.value},00</h4>
            <a href="">${obj.addCart}</a>
        </div>`
    return li;
}

//FUNCAO DE LISTAGEM
function listarItens(array) {
    for (let i = 0; i < array.length; i++) {
        template = createTemplate(array[i]);
        ulCard.appendChild(template);
    }
}
listarItens(data)

//FUNCAO DE SOMA
function somaValores(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i].valor;
    }
    return total
}

{/* <ul>
    <li>
        <div class="present-card">
            <img src="" alt="">
            <button type="submit"></button>
            <h3></h3>
        </div>
        <div class="info">
            <p></p>
            <p></p>
            <button type="submit"></button>
        </div>
    </li>
</ul> */}









// <!-- Header
// - Contém logo, menu de navegação;

// Vitrine
// - Contém os cards com suas respectivas informações;

// Barra de pesquisa
// - Contém um input para colocar texto e um botão para pesquisar

// Carrinho de compras
// - Posicionou os elementos corretamente;

// Adicionar no site pelo menos 3 efeitos de hover
// 1. Adicionado hover nos itens do menu;
// 2. Adicionado hover no botão "adicionar ao carrinho"
// 3. Adicionar hover o card de produto
// Outro

// Cards
// - Contém as informações de título, foto, descrição, preço, tag de categoria e um botão de adicionar ao carrinho.

// Estilização
// - Contendo todos os itens como demostrado no template ou com base nele

// Produtos gerados pelo DOM
// - Contém as informações de título, foto, descrição, preço, tag de categoria e botões para adicionar e remover do carrinho

// Carrinho de compras
// - Deve ser possível adicionar produtos ao carrinho;

// Carrinho de compras
// - Deve ser possível remover produtos do carrinho -->