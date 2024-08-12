let textGrade = "Graduando em Ciência da Computação";
let textRole = "Aspirante a Desenvolvedor Web";
let textWelcome = "Bem vindo! Meu nome é ";
let roles = ['Web', 'Full-stack', 'Java'];
let itemAtual = '';
let indiceAtual = 0;
let cssClass = '';

function atualizarValor() {
    cssClass = 'welcome-subtitle span';
    indiceAtual = (indiceAtual + 1) % roles.length;
    itemAtual = roles[indiceAtual];
    setTimeout(atualizarValor, 7000);
}

atualizarValor();