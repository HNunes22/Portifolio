"uso restrito";

// Barra Lateral //

const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

const barraLateral = document.querySelector("[data-sidebar]");
const barraLateralBtn = document.querySelector("[data-sidebar-btn]");

barraLateralBtn.addEventListener("click", function () {
    elementToggleFunc(barraLateral);
});

// Variaveis Testemunhas //

const itemTestemunhas = document.querySelectorAll("[data-testimonials-item]")
const containerFormal = document.querySelector("[data-modal-container]")
const btnFecharFormal = document.querySelector("[data-modal-close-btn]")
const exagerar = document.querySelector("[data-overplay]")

// Variaveis Formal //

const imgFormal = document.querySelector("[data-form-img]")
const tituloFormal = document.querySelector("[data-form-title]")
const textoFormal = document.querySelector("[data-form-text]")

// Função Formal //

const testemunhasFormalFunc = function () {
    containerFormal.classList.toggle("active");
    exagerar.classList.toggle("active");
}

for (let i = 0; i < itemTestemunhas.length; i++) {

        itemTestemunhas[i].addEventListener("click", function () {

        imgFormal.src = this.querySelector("[data-testimonials-avatar]").src;
        imgFormal.alt = this.querySelector("[data-testimonials-avatar]").alt;
        tituloFormal.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        textoFormal.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        
        testemunhasFormalFunc();
    });
}

// Adcionar evento ao botão de fechar //

btnFecharFormal.addEventListener("click",testemunhasFormalFunc);
exagerar.addEventListener("click", testemunhasFormalFunc);

// Botão de filtro //

const selecionado = document.querySelector("[data-select]");
const selecionarItem = document.querySelectorAll("[data-item-selecionar]");
const selecaoValor = document.querySelector("[data-select-value]");
const btnFiltrar = document.querySelectorAll("[data-filtrada-btn]");

selecionado.addEventListener("click", function () {
    elementToggleFunc(this); 
});

// Adicionando Evento para todos os itens//

for (let i = 0; i < selecionarItem.length; i++) {
        selecionarItem[i]. addEventListener("click", function () {

        let valorSelecionado = this.innerText.toLowerCase();
        selecaoValor.innerText = this.innerText;
        elementToggleFunc(selecionado);
        funcaoFiltrada(valorSelecionado);
    })
}

// Variaveis de Filtro//


const itemFiltrado = document.querySelectorAll("[data-filter-item]");

const funcaoFiltrada = function (valorSelecionado) {

    for (let i = 0; i < itemFiltrado.length; i++ ) {

        if (valorSelecionado == "all") {
            itemFiltrado[i].classList.add("active");
        } else if (valorSelecionado === itemFiltrado[i].dataset.category) {
            itemFiltrado[i].classList.add("active");
        } else {
            itemFiltrado[i].classList.remove("active");
        }
    }
}


// Adiconar Botão de itens para Tela larga//

let ultimoBotaoClicado = btnFiltrar[0];

for ( let i = 0; i < btnFiltrar.length; i++) {

    btnFiltrar[i].addEventListener("click", function () {

        let valorSelecionado = this.innerHTML.toLowerCase();
        selecaoValor.innerText = this.innerText;
        filterFunc(valorSelecionado);

        ultimoBotaoClicado.classList.remove("active");
        this.classList.add("active")
        ultimoBotaoClicado = this;
    })
}


// Variaveis contato formal //

const formal = document.querySelector("[data-formal]");
const inputFormal = document.querySelectorAll("[data-input-formal]");
const btnFormal = document.querySelector("[data-form-btn]");


// Adicionar evento //

for (let i = 0; i < inputFormal.length; i++) {

    inputFormal[i].addEventListener("input", function () {

        if(formal.checkValidity()) {
            btnFormal.removeAttribute("disabled");
    } else {
        btnFormal.setAttribute("disabled", "");
    }
    
});
}


// Variaveis de navegação de paginas//

const linksNavegacao = document.querySelectorAll("[data-nav-link]");
const paginas = document.querySelectorAll("[data-page]");

for (let i = 0; i < linksNavegacao.length; i++) {

    linksNavegacao[i].addEventListener("click", function () {

        for(let i = 0; i < paginas.length; i++) {

            if (this.innerHTML.toLowerCase() === paginas[i].dataset.page) {

                paginas[i].classList.add("active");
                linksNavegacao[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                paginas[i].classList.remove("active");
                linksNavegacao[i].classList.remove("active");
            }
        }
    });
}