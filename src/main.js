document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');

  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function(){
    const posicaoAtual = window.scrollY;

    if(posicaoAtual < alturaHero){
      ocultaElementosHeader();
    }
    else{
      exibeElementosHeader();
    }
  })


  for (let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(botao){
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      const btn = document.querySelector(`[data-tab-button=${abaAlvo}]`); 
      escondeTodasAbas();
      removeBotaoAtivo();
      aba.classList.add('shows__list--is-active');
      btn.classList.add('shows__tabs__button--is-active');
    })
  }

  for (let i=0; i< questions.length; i++){
    questions[i].addEventListener('click', abreFechaResposta);
  }

})

function abreFechaResposta(elemento){
  const classe = 'faq__questions__item--is-open';
  console.log(elemento);
  const elementoPai = elemento.target.parentNode

  elementoPai.classList.toggle(classe);
}


function ocultaElementosHeader(){
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

function exibeElementosHeader(){
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('shows__list--is-active');
  }
}

function removeBotaoAtivo(){
  const buttonsContainer = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < buttonsContainer.length; i++) {
    buttonsContainer[i].classList.remove('shows__tabs__button--is-active');
  }
}