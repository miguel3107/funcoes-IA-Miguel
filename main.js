
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se encontra em uma floresta misteriosa e vê dois caminhos diante de você. Qual você escolhe?",
        alternativas: [
            {
                texto: "O caminho iluminado por uma luz suave.",
                afirmacao: "Você encontrou uma floresta misteriosa e optou pelo caminho claro e seguro.",
            },
            {
                texto: "O caminho envolto em névoa e sombras.",
                afirmacao: "Você encontrou uma floresta misteriosa e optou seguir pelo caminho misterioso e sombrio.",
            }
        ]
    },
    {
        enunciado: "Ao longo do caminho, você ouve um som estranho vindo dos arbustos.",
        alternativas: [
            {
                texto: "Investiga o som, preparado para qualquer coisa.",
                afirmacao: "Ao ouvir um som estranho, enfrenta sem qualquer medo e seguro de sí.",
            },
            {
                texto: "Ignora o som e segue em frente rapidamente.",
                afirmacao: "Ao ouvir um som estranho, o ignora e segue seu caminho rapidamente.",
            }
        ]
    },
    {
        enunciado: "Você encontra um viajante no caminho, ele parece cansado e perdido. O que você faz?",
        alternativas: [
            {
                texto: "Oferece ajuda e compartilha seus mantimentos.",
                afirmacao: "Encontra um viajante, então oferece ajuda e compartilha seus mantimentos.",
            },
            {
                texto: "Continua sua jornada sem parar, focado em seu destino.",
                afirmacao: "Encontra um viajante, porém, decide seguir sem parar, focado em seu destino.",
            }
        ]
    },
    {
        enunciado: "A noite cai e você precisa encontrar um lugar para descansar. Onde você decide parar?",
        alternativas: [
            {
                texto: "Em uma caverna próxima, que parece segura.",
                afirmacao: "Em uma tomada de decisão, em encontrar um lugar para passar a noite, você vai acampar em uma caverna que parece segura.",
            },
            {
                texto: "Em uma clareira ao ar livre, sob as estrelas.",
                afirmacao: "Em uma tomada de decisão, em encontrar um lugar para passar a noite, decide ir para uma clareira ao ar livre, com vista para as estrelas.",
            }
        ]
    },
    {
        enunciado: "No final de sua jornada, você encontra um portal mágico. Qual será sua escolha?",
        alternativas: [
            {
                texto: "Entra no portal, curioso sobre o que há do outro lado.",
                afirmacao: "Já no final da jornada, encontra um portal, que decide entrar pela sua curiosidade.",
            },
            {
                texto: "Evita o portal, preferindo explorar o mundo ao redor.",
                afirmacao: "Já no final da jornada, encontra um portal, mas decide evitar qualquer risco, pois quer explorar o mundo.",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta () {
    if (atual>= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement ("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild (botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "sua jornada foi!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

   mostraPergunta();
