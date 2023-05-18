const shoppingCart = document.querySelector(".shopping-cart");
const secaoVitrine = document.querySelector("#section1");

const ulCard = document.createElement("ul");
const ulCart = document.createElement("ul");

const totalContaiter = document.createElement("div");
totalContaiter.className = "total-contaiter";

const cartHead = document.createElement("div");
cartHead.className = "cart-buy";

const cartTitle = document.createElement("h2");
cartTitle.innerText = "Carrinho de compras";

const emptyCart = document.createElement("div");
emptyCart.className = "empty-cart";

const emptyH2 = document.createElement("h2");
const emptyP = document.createElement("p");

emptyH2.innerText = "Carrinho vazio!";
emptyP.innerText = "Adicione ítens.";

emptyCart.append(emptyH2, emptyP);
ulCart.append(emptyCart);

cartHead.appendChild(cartTitle);
const cart = [];

secaoVitrine.appendChild(ulCard);
shoppingCart.append(cartHead, ulCart, totalContaiter);

todos = document.querySelector(".todos");
todos.addEventListener("click", (e) => {
  e.preventDefault();
  listarItens(ulCard, data, createTemplate);
});

departamentos = document.querySelectorAll(".departament");

for (let i = 0; i < departamentos.length; i++) {
  const element = departamentos[i];
  element.addEventListener("click", (e) => {
    e.preventDefault();
    let filtered = data.filter((prod) => prod.tag[0] == element.innerText);
    listarItens(ulCard, filtered, createTemplate);
  });
}

search = document.querySelector(".search");

search.addEventListener("submit", (event) => {
  event.preventDefault();
  strigSearch = event.target.firstElementChild.value;
  console.log(strigSearch);
  let filtered = data.filter(
    (prod) =>
      prod.nameItem.toLowerCase().includes(strigSearch.toLowerCase()) ||
      prod.description.toLowerCase().includes(strigSearch.toLowerCase()) ||
      prod.tag[0].toLowerCase().includes(strigSearch.toLowerCase())
  );
  listarItens(ulCard, filtered, createTemplate);
});

const cartValueCreate = (array, tot) => {
  totalCart = document.createElement("div");
  totalCart.innerHTML = "";
  totalCart.className = "total-cart";

  totalQuantity = document.createElement("div");
  totalQuantity.className = "quantity-cart";

  quatityP = document.createElement("p");
  quatityP.innerText = "Quantidade:";

  quatitySpan = document.createElement("span");
  quatitySpan.innerText = array.length;

  totalQuantity.append(quatityP, quatitySpan);

  totalValue = document.createElement("div");
  totalValue.className = "total-value";

  valueP = document.createElement("p");
  valueP.innerText = "Total";

  valueSpan = document.createElement("span");
  valueSpan.innerText = `R$${tot.toFixed(2)}`;

  totalValue.append(valueP, valueSpan);
  totalCart.append(totalQuantity, totalValue);

  return totalCart;
};

const cardCartCreate = (obj) => {
  li = document.createElement("li");
  li.className = "cart-card";

  tagFigure = document.createElement("figure");

  tagImg = document.createElement("img");
  tagImg.src = obj.img;
  tagImg.alt = obj.nameItem;

  tagDiv = document.createElement("div");
  tagDiv.className = "cart-card-info";

  tagName = document.createElement("h4");
  tagName.innerText = obj.nameItem;

  tagPrice = document.createElement("span");
  tagPrice.innerText = `R$ ${obj.value},00`;

  tagA = document.createElement("a");
  tagA.innerText = "Remover produto";

  tagA.addEventListener("click", (event) => {
    event.preventDefault();
    objIndex = cart.indexOf(obj);
    cart.splice(objIndex, 1);
    if (cart.length > 0) {
      somaValores(cart, totalContaiter);
      listarItens(ulCart, cart, cardCartCreate);
    } else {
      totalContaiter.innerHTML = "";
      ulCart.innerHTML = "";
      ulCart.append(emptyCart);
    }
  });

  tagFigure.appendChild(tagImg);
  tagDiv.append(tagName, tagPrice, tagA);
  li.append(tagFigure, tagDiv);

  return li;
};

const createTemplate = (obj) => {
  li = document.createElement("li");
  tagFigure = document.createElement("figure");
  tagFigure.className = "present-card";

  tagImg = document.createElement("img");
  tagImg.src = obj.img;
  tagImg.alt = obj.nameItem;

  tagDiv = document.createElement("div");
  tagDiv.className = "info";

  tagButton = document.createElement("button");
  tagButton.innerText = obj.tag[0];
  tagButton.type = "submit";

  tagButton.addEventListener("click", () => {
    let filtered = data.filter((prod) => prod.tag[0] == obj.tag[0]);
    listarItens(ulCard, filtered, createTemplate);
  });

  tagName = document.createElement("h4");
  tagName.innerText = obj.nameItem;

  tagPrice = document.createElement("h4");
  tagPrice.className = "value";
  tagPrice.innerText = `R$ ${obj.value},00`;

  tagP = document.createElement("p");
  tagP.innerText = obj.description;

  tagA = document.createElement("a");
  tagA.innerText = obj.addCart;

  tagA.addEventListener("click", (event) => {
    event.preventDefault();
    cart.push(obj);
    listarItens(ulCart, cart, cardCartCreate);
    somaValores(cart, totalContaiter);
  });

  tagFigure.appendChild(tagImg);
  tagDiv.append(tagButton, tagName, tagP, tagPrice, tagA);
  li.append(tagFigure, tagDiv);

  return li;
};

function listarItens(tagHTML, array, callback) {
  tagHTML.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    template = callback(array[i]);
    tagHTML.appendChild(template);
  }
}

listarItens(ulCard, data, createTemplate);

function somaValores(array, tagHTML) {
  tagHTML.innerHTML = "";
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i].value;
  }
  totalTag = cartValueCreate(array, total);
  tagHTML.appendChild(totalTag);
}
