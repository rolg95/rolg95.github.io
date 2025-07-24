// Configuração das Casas Tech
const casasTech = {
    comandante_ia: {
        nome: "Casa do Comandante de IA",
        emoji: "🤖",
        lema: "Onde o prompt é a chave e o comando é rei 💻🚀",
        classe: "casa-comandante-ia",
        brasao: "assets/brasao-comandante-ia.png",
        cursos: [
            "Internet das Coisas (Técnico)",
            "Inteligência Artificial (Cursos Livres)",
            "Programador de Sistemas",
            "Fundamentos do Azure"
        ]
    },
    engenheiro_automacao: {
        nome: "Casa do Engenheiro de Automação e Robótica",
        emoji: "⚙️",
        lema: "Persistência, lógica e cafeína no sangue ⚙️☕",
        classe: "casa-engenheiro-automacao",
        brasao: "assets/brasao-engenheiro-automacao.png",
        cursos: [
            "Técnico em Informática",
            "Manutenção e Montagem",
            "Redes e Infraestrutura",
            "Linux Essentials"
        ]
    },
    mestre_vr: {
        nome: "Casa do Mestre da Realidade Virtual",
        emoji: "🕶️",
        lema: "Aqui a realidade é só o começo 🕶️💫",
        classe: "casa-mestre-vr",
        brasao: "assets/brasao-mestre-vr.png",
        cursos: [
            "Multimídia (Técnico)",
            "Computação Gráfica",
            "Criação para Web",
            "Games"
        ]
    },
    hacker_futuro: {
        nome: "Casa Hackeando o Futuro",
        emoji: "🛡️",
        lema: "Protegendo redes, criando liberdade digital 🔐🌐",
        classe: "casa-hacker-futuro",
        brasao: "assets/brasao-hacker-futuro.png",
        cursos: [
            "Analista de Segurança da Informação",
            "Segurança em Servidores Linux",
            "Redes e Infraestrutura",
            "Segurança da Informação"
        ]
    }
};

// Perguntas do Chat
const perguntas = [
    {
        id: 1,
        texto: "E aí, jovem! 👋 Bem-vindo ao universo tech do Senac! Vamos descobrir qual é a sua tribo? Primeiro, como você se vê?",
        opcoes: [
            { 
                texto: "Estrategista 🧠 - Gosto de planejar e comandar", 
                pontos: { comandante_ia: 3, hacker_futuro: 1 } 
            },
            { 
                texto: "Construtor 🔧 - Adoro mexer e montar coisas", 
                pontos: { engenheiro_automacao: 3, mestre_vr: 1 } 
            },
            { 
                texto: "Imersivo 🎮 - Curto experiências visuais incríveis", 
                pontos: { mestre_vr: 3, comandante_ia: 1 } 
            },
            { 
                texto: "Defensor 🛡️ - Protejo e cuido da segurança", 
                pontos: { hacker_futuro: 3, engenheiro_automacao: 1 } 
            }
        ]
    },
    {
        id: 2,
        texto: "Massa! 🔥 Agora me conta, qual dessas atividades te deixa mais empolgado?",
        opcoes: [
            { 
                texto: "Mexer com códigos e IA 🤖", 
                pontos: { comandante_ia: 3, hacker_futuro: 1 } 
            },
            { 
                texto: "Construir e automatizar sistemas ⚙️", 
                pontos: { engenheiro_automacao: 3, mestre_vr: 1 } 
            },
            { 
                texto: "Criar experiências visuais épicas 🎨", 
                pontos: { mestre_vr: 3, comandante_ia: 1 } 
            },
            { 
                texto: "Proteger redes e sistemas 🔒", 
                pontos: { hacker_futuro: 3, engenheiro_automacao: 1 } 
            }
        ]
    },
    {
        id: 3,
        texto: "Show! 🚀 E qual seria mais a sua vibe no dia a dia?",
        opcoes: [
            { 
                texto: "Café + programação + IA = vida ☕💻", 
                pontos: { comandante_ia: 3, mestre_vr: 1 } 
            },
            { 
                texto: "Hackeando pela madrugada 🌙💻", 
                pontos: { hacker_futuro: 3, comandante_ia: 1 } 
            },
            { 
                texto: "Montando projetos hands-on 🔧⚡", 
                pontos: { engenheiro_automacao: 3, hacker_futuro: 1 } 
            },
            { 
                texto: "Explorando mundos virtuais 🕶️🌌", 
                pontos: { mestre_vr: 3, engenheiro_automacao: 1 } 
            }
        ]
    },
    {
        id: 4,
        texto: "Perfeito! 💯 Última pergunta: qual dessas tecnologias te chama mais atenção?",
        opcoes: [
            { 
                texto: "Machine Learning e ChatGPT 🤖🧠", 
                pontos: { comandante_ia: 3, hacker_futuro: 1 } 
            },
            { 
                texto: "Robótica e IoT 🤖⚙️", 
                pontos: { engenheiro_automacao: 3, mestre_vr: 1 } 
            },
            { 
                texto: "VR/AR e Games 🕶️🎮", 
                pontos: { mestre_vr: 3, comandante_ia: 1 } 
            },
            { 
                texto: "Cybersecurity e Blockchain 🛡️🔗", 
                pontos: { hacker_futuro: 3, engenheiro_automacao: 1 } 
            }
        ]
    }
];

// Estado da aplicação
let estadoAtual = 'inicio';
let perguntaAtual = 0;
let pontuacao = {
    comandante_ia: 0,
    engenheiro_automacao: 0,
    mestre_vr: 0,
    hacker_futuro: 0
};
let casaEscolhida = null;
let mensagens = [];

// Configuração da API
let apiConfig = {
    provider: 'openai',
    key: '',
    enabled: false
};

// Elementos DOM
const telaInicial = document.getElementById('tela-inicial');
const telaChat = document.getElementById('tela-chat');
const telaResultado = document.getElementById('tela-resultado');
const modalApi = document.getElementById('modal-api');

const btnComecar = document.getElementById('btn-comecar');
const btnRefazer = document.getElementById('btn-refazer');
const btnConfig = document.getElementById('btn-config');
const btnFecharModal = document.getElementById('btn-fechar-modal');
const btnSalvarApi = document.getElementById('btn-salvar-api');
const btnPularApi = document.getElementById('btn-pular-api');

const chatMessages = document.getElementById('chat-messages');
const chatOptions = document.getElementById('chat-options');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    carregarConfiguracao();
    configurarEventListeners();
    mostrarTela('inicio');
});

// Event Listeners
function configurarEventListeners() {
    btnComecar.addEventListener('click', iniciarChat);
    btnRefazer.addEventListener('click', reiniciarApp);
    btnConfig.addEventListener('click', () => mostrarModal(true));
    btnFecharModal.addEventListener('click', () => mostrarModal(false));
    btnSalvarApi.addEventListener('click', salvarConfiguracao);
    btnPularApi.addEventListener('click', () => mostrarModal(false));
    
    // Fechar modal clicando fora
    modalApi.addEventListener('click', function(e) {
        if (e.target === modalApi) {
            mostrarModal(false);
        }
    });
}

// Gerenciamento de telas
function mostrarTela(tela) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    
    switch(tela) {
        case 'inicio':
            telaInicial.classList.add('ativa');
            estadoAtual = 'inicio';
            break;
        case 'chat':
            telaChat.classList.add('ativa');
            estadoAtual = 'chat';
            break;
        case 'resultado':
            telaResultado.classList.add('ativa');
            estadoAtual = 'resultado';
            break;
    }
}

// Funções do Chat
function iniciarChat() {
    mostrarTela('chat');
    resetarEstado();
    adicionarMensagem("Olá! 🎉 Eu sou o assistente virtual do Senac São José do Rio Preto! Vamos descobrir qual casa tech combina mais com você?", 'bot');
    
    setTimeout(() => {
        adicionarMensagem(perguntas[0].texto, 'bot');
        mostrarOpcoes(perguntas[0].opcoes);
        atualizarProgresso();
    }, 1000);
}

function resetarEstado() {
    perguntaAtual = 0;
    pontuacao = {
        comandante_ia: 0,
        engenheiro_automacao: 0,
        mestre_vr: 0,
        hacker_futuro: 0
    };
    casaEscolhida = null;
    mensagens = [];
    chatMessages.innerHTML = '';
    chatOptions.innerHTML = '';
}

function adicionarMensagem(texto, tipo = 'bot') {
    const mensagem = { texto, tipo, id: Date.now() };
    mensagens.push(mensagem);
    
    const mensagemEl = document.createElement('div');
    mensagemEl.className = `mensagem ${tipo}`;
    
    const avatar = tipo === 'bot' ? '🤖' : '👤';
    
    mensagemEl.innerHTML = `
        <div class="mensagem-content">
            <div class="mensagem-avatar">${avatar}</div>
            <div class="mensagem-texto">${texto}</div>
        </div>
    `;
    
    chatMessages.appendChild(mensagemEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function mostrarOpcoes(opcoes) {
    chatOptions.innerHTML = '';
    
    opcoes.forEach((opcao, index) => {
        const opcaoEl = document.createElement('button');
        opcaoEl.className = 'opcao-btn';
        opcaoEl.textContent = opcao.texto;
        opcaoEl.style.animationDelay = `${index * 0.1}s`;
        
        opcaoEl.addEventListener('click', () => responderPergunta(opcao));
        
        chatOptions.appendChild(opcaoEl);
    });
}

function responderPergunta(opcao) {
    // Adicionar resposta do usuário
    adicionarMensagem(opcao.texto, 'usuario');
    
    // Limpar opções
    chatOptions.innerHTML = '';
    
    // Atualizar pontuação
    Object.keys(opcao.pontos).forEach(casa => {
        pontuacao[casa] += opcao.pontos[casa];
    });
    
    // Próxima pergunta ou resultado
    if (perguntaAtual < perguntas.length - 1) {
        setTimeout(() => {
            perguntaAtual++;
            adicionarMensagem(perguntas[perguntaAtual].texto, 'bot');
            mostrarOpcoes(perguntas[perguntaAtual].opcoes);
            atualizarProgresso();
        }, 1000);
    } else {
        setTimeout(() => {
            finalizarChat();
        }, 1000);
    }
}

function atualizarProgresso() {
    const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
    progressFill.style.width = `${progresso}%`;
    progressText.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
}

async function finalizarChat() {
    // Calcular casa vencedora
    casaEscolhida = Object.keys(pontuacao).reduce((a, b) => 
        pontuacao[a] > pontuacao[b] ? a : b
    );
    
    // Gerar descrição personalizada se API estiver configurada
    if (apiConfig.enabled && apiConfig.key) {
        try {
            const descricaoPersonalizada = await gerarDescricaoPersonalizada();
            if (descricaoPersonalizada) {
                casasTech[casaEscolhida].lemaPersonalizado = descricaoPersonalizada;
            }
        } catch (error) {
            console.log('Erro ao gerar descrição personalizada:', error);
        }
    }
    
    mostrarResultado();
}

function mostrarResultado() {
    mostrarTela('resultado');
    
    const casa = casasTech[casaEscolhida];
    
    // Configurar elementos do resultado
    document.getElementById('casa-emoji').textContent = casa.emoji;
    document.getElementById('casa-brasao').src = casa.brasao;
    document.getElementById('casa-brasao').alt = `Brasão da ${casa.nome}`;
    document.getElementById('casa-nome').textContent = casa.nome;
    document.getElementById('casa-lema').textContent = casa.lemaPersonalizado || casa.lema;
    
    // Aplicar classe de cor
    const casaCard = document.getElementById('casa-card');
    casaCard.className = `casa-card ${casa.classe}`;
    
    // Mostrar cursos
    const cursosLista = document.getElementById('cursos-lista');
    cursosLista.innerHTML = '';
    
    casa.cursos.forEach((curso, index) => {
        const cursoEl = document.createElement('div');
        cursoEl.className = 'curso-item';
        cursoEl.textContent = curso;
        cursoEl.style.animationDelay = `${index * 0.1}s`;
        cursosLista.appendChild(cursoEl);
    });
}

function reiniciarApp() {
    mostrarTela('inicio');
    resetarEstado();
}

// Configuração da API
function mostrarModal(mostrar) {
    if (mostrar) {
        modalApi.classList.add('ativo');
        carregarConfiguracao();
    } else {
        modalApi.classList.remove('ativo');
    }
}

function carregarConfiguracao() {
    const config = localStorage.getItem('casaTechApiConfig');
    if (config) {
        apiConfig = JSON.parse(config);
        
        // Atualizar interface
        document.querySelector(`input[value="${apiConfig.provider}"]`).checked = true;
        document.getElementById('api-key').value = apiConfig.key || '';
    }
}

function salvarConfiguracao() {
    const provider = document.querySelector('input[name="api-provider"]:checked').value;
    const key = document.getElementById('api-key').value.trim();
    
    apiConfig = {
        provider,
        key,
        enabled: key.length > 0
    };
    
    localStorage.setItem('casaTechApiConfig', JSON.stringify(apiConfig));
    mostrarModal(false);
    
    if (apiConfig.enabled) {
        alert('Configuração salva! Agora você terá descrições personalizadas.');
    }
}

// Integração com APIs de LLM
async function gerarDescricaoPersonalizada() {
    if (!apiConfig.enabled || !apiConfig.key) return null;
    
    const casa = casasTech[casaEscolhida];
    const respostasUsuario = mensagens
        .filter(m => m.tipo === 'usuario')
        .map(m => m.texto)
        .join(', ');
    
    const prompt = `
        Com base nas respostas do usuário: "${respostasUsuario}", 
        crie um lema personalizado e divertido para a ${casa.nome}.
        O lema deve ser jovem, descontraído, usar emojis e ter no máximo 60 caracteres.
        Exemplo do lema original: "${casa.lema}"
        
        Responda apenas com o novo lema, sem explicações.
    `;
    
    try {
        if (apiConfig.provider === 'openai') {
            return await chamarOpenAI(prompt);
        } else if (apiConfig.provider === 'mistral') {
            return await chamarMistral(prompt);
        }
    } catch (error) {
        console.error('Erro na API:', error);
        return null;
    }
}

async function chamarOpenAI(prompt) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiConfig.key}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ],
            max_tokens: 100,
            temperature: 0.8
        })
    });
    
    if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices[0].message.content.trim();
}

async function chamarMistral(prompt) {
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiConfig.key}`
        },
        body: JSON.stringify({
            model: 'mistral-tiny',
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ],
            max_tokens: 100,
            temperature: 0.8
        })
    });
    
    if (!response.ok) {
        throw new Error(`Mistral API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices[0].message.content.trim();
}

// Utilitários
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Animações adicionais
function adicionarAnimacaoEntrada(elemento) {
    elemento.style.opacity = '0';
    elemento.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        elemento.style.transition = 'all 0.5s ease';
        elemento.style.opacity = '1';
        elemento.style.transform = 'translateY(0)';
    }, 100);
}

// Tratamento de erros
window.addEventListener('error', function(e) {
    console.error('Erro na aplicação:', e.error);
});

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registrado com sucesso:', registration.scope);
            })
            .catch(function(registrationError) {
                console.log('Falha no registro do SW:', registrationError);
            });
    });
}

