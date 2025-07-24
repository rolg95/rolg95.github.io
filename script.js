// Configuração das Casas Tech
const casasTech = {
    comandante_ia: {
        nome: "Casa do Comandante de IA",
        img: "img/cia.png",
        lema: "Onde os dados viram insights e o futuro se constrói! 📊🚀",
        cursos: [
            "Power BI (40h) - Dashboards profissionais",
            "Formação Excel: do básico ao avançado (72h)",
            "Programador de Sistemas (200h)",
            "Fundamentos do Microsoft Azure (32h)"
        ]
    },
    engenheiro_automacao: {
        nome: "Casa do Engenheiro de Automação e Robótica",
        img: "img/eia.png",
        lema: "Construindo o amanhã com as próprias mãos! 🔧💪",
        cursos: [
            "Técnico em Informática (1200h) - Diploma reconhecido",
            "Virtualização com Windows Server: Hyper-V (36h)",
            "Segurança em Servidores Linux (36h)",
            "Introdução à Prática da Programação (20h)"
        ]
    },
    mestre_vr: {
        nome: "Casa do Mestre da Realidade Virtual",
        img: "img/mvr.png",
        lema: "Criando mundos onde a imaginação não tem limites! 🎨✨",
        cursos: [
            "Técnico em Informática (1200h) - Desenvolvimento web",
            "Programador de Sistemas (200h)",
            "Power BI (40h) - Visualização de dados",
            "Formação Excel: do básico ao avançado (72h)"
        ]
    },
    hacker_futuro: {
        nome: "Casa Hackeando o Futuro",
        img: "img/hf.png",
        lema: "Protegendo o mundo digital, um código por vez! 🔐🌐",
        cursos: [
            "Analista de Segurança da Informação (96h)",
            "Segurança em Servidores Linux (36h)",
            "Técnico em Informática (1200h) - Redes e segurança",
            "Fundamentos do Microsoft Azure (32h)"
        ]
    }
};

// Perguntas Acessíveis para Iniciantes
const perguntas = [
    {
        id: 1,
        texto: "E aí! 👋 Bem-vindo ao universo tech do Senac! Vamos descobrir qual área combina mais com você? Primeiro, como você gosta de passar seu tempo livre?",
        opcoes: [
            { 
                texto: "Organizando planilhas, listas ou analisando informações 📊📋", 
                pontos: { comandante_ia: 3, hacker_futuro: 1, mestre_vr: 1 } 
            },
            { 
                texto: "Desmontando aparelhos ou consertando coisas quebradas 🔧⚙️", 
                pontos: { engenheiro_automacao: 3, hacker_futuro: 2, comandante_ia: 1 } 
            },
            { 
                texto: "Desenhando, editando fotos ou criando conteúdo visual 🎨📱", 
                pontos: { mestre_vr: 3, comandante_ia: 1, engenheiro_automacao: 1 } 
            },
            { 
                texto: "Pesquisando sobre privacidade online e senhas seguras 🔒🕵️", 
                pontos: { hacker_futuro: 3, engenheiro_automacao: 1, mestre_vr: 1 } 
            }
        ]
    },
    {
        id: 2,
        texto: "Legal! 🔥 Na escola, qual matéria você sempre se deu melhor?",
        opcoes: [
            { 
                texto: "Matemática e cálculos - adoro números e estatísticas! 🧮📈", 
                pontos: { comandante_ia: 3, engenheiro_automacao: 2, hacker_futuro: 1 } 
            },
            { 
                texto: "Física e química - gosto de entender como as coisas funcionam 🔬⚗️", 
                pontos: { engenheiro_automacao: 3, hacker_futuro: 1, comandante_ia: 2 } 
            },
            { 
                texto: "Artes e português - sou criativo e gosto de me expressar 🎭📝", 
                pontos: { mestre_vr: 3, comandante_ia: 1, engenheiro_automacao: 1 } 
            },
            { 
                texto: "História e geografia - gosto de investigar e descobrir coisas 🗺️🔍", 
                pontos: { hacker_futuro: 3, mestre_vr: 1, comandante_ia: 2 } 
            }
        ]
    },
    {
        id: 3,
        texto: "Show! 🚀 Quando você usa o celular, o que mais faz?",
        opcoes: [
            { 
                texto: "Uso apps de produtividade, planilhas ou leio notícias 📱💼", 
                pontos: { comandante_ia: 3, hacker_futuro: 2, mestre_vr: 1 } 
            },
            { 
                texto: "Pesquiso tutoriais de como consertar ou fazer coisas 🛠️📺", 
                pontos: { engenheiro_automacao: 3, comandante_ia: 1, hacker_futuro: 2 } 
            },
            { 
                texto: "Edito fotos, faço stories ou assisto vídeos criativos 📸🎬", 
                pontos: { mestre_vr: 3, engenheiro_automacao: 1, comandante_ia: 2 } 
            },
            { 
                texto: "Configuro privacidade e pesquiso sobre segurança digital 🔐📲", 
                pontos: { hacker_futuro: 3, engenheiro_automacao: 2, mestre_vr: 1 } 
            }
        ]
    },
    {
        id: 4,
        texto: "Perfeito! 💯 Se você pudesse escolher um superpoder, qual seria?",
        opcoes: [
            { 
                texto: "Processar informações super rápido e prever tendências 🧠⚡", 
                pontos: { comandante_ia: 3, hacker_futuro: 1, mestre_vr: 2 } 
            },
            { 
                texto: "Consertar qualquer coisa só de tocar nela 🔧✨", 
                pontos: { engenheiro_automacao: 3, hacker_futuro: 2, comandante_ia: 1 } 
            },
            { 
                texto: "Criar mundos virtuais e dar vida às minhas ideias 🌟🎨", 
                pontos: { mestre_vr: 3, comandante_ia: 2, engenheiro_automacao: 1 } 
            },
            { 
                texto: "Detectar mentiras e proteger pessoas de perigos invisíveis 🛡️👁️", 
                pontos: { hacker_futuro: 3, engenheiro_automacao: 1, mestre_vr: 2 } 
            }
        ]
    },
    {
        id: 5,
        texto: "Quase lá! 🎉 O que mais te deixa empolgado quando pensa no futuro?",
        opcoes: [
            { 
                texto: "Trabalhar com dados para ajudar empresas a crescer 📊🏢", 
                pontos: { comandante_ia: 3, hacker_futuro: 2, mestre_vr: 1 } 
            },
            { 
                texto: "Construir robôs ou sistemas que facilitam a vida das pessoas 🤖🏠", 
                pontos: { engenheiro_automacao: 3, comandante_ia: 1, hacker_futuro: 2 } 
            },
            { 
                texto: "Criar jogos, apps ou experiências digitais incríveis 🎮💫", 
                pontos: { mestre_vr: 3, engenheiro_automacao: 1, comandante_ia: 2 } 
            },
            { 
                texto: "Proteger pessoas e empresas de crimes digitais 🔒🦸", 
                pontos: { hacker_futuro: 3, engenheiro_automacao: 2, mestre_vr: 1 } 
            }
        ]
    },
    {
        id: 6,
        texto: "Última pergunta! 🏁 Seus amigos sempre dizem que você é uma pessoa:",
        opcoes: [
            { 
                texto: "Organizada e que sempre tem as melhores dicas e informações 📚🎯", 
                pontos: { comandante_ia: 3, hacker_futuro: 1, mestre_vr: 2 } 
            },
            { 
                texto: "Prática e que resolve qualquer problema com as próprias mãos 💪🔧", 
                pontos: { engenheiro_automacao: 3, hacker_futuro: 2, comandante_ia: 1 } 
            },
            { 
                texto: "Criativa e que sempre tem ideias inovadoras e diferentes 💡🎨", 
                pontos: { mestre_vr: 3, comandante_ia: 2, engenheiro_automacao: 1 } 
            },
            { 
                texto: "Cautelosa e que sempre alerta sobre riscos e cuidados 🚨🛡️", 
                pontos: { hacker_futuro: 3, engenheiro_automacao: 2, mestre_vr: 1 } 
            }
        ]
    }
];

// Estado da aplicação
let perguntaAtual = 0;
let pontuacao = {
    comandante_ia: 0,
    engenheiro_automacao: 0,
    mestre_vr: 0,
    hacker_futuro: 0
};

// Variáveis da câmera
let stream = null;
let casaAtual = null;
let cameraModal = null;

// Elementos DOM
const telaInicio = document.getElementById('tela-inicio');
const telaChat = document.getElementById('tela-chat');
const telaResultado = document.getElementById('tela-resultado');
const btnIniciar = document.getElementById('btn-iniciar');
const btnRefazer = document.getElementById('btn-refazer');
const mensagensContainer = document.getElementById('mensagens');
const opcoesContainer = document.getElementById('opcoes');
const progressoFill = document.getElementById('progresso-fill');
const progressoTexto = document.getElementById('progresso-texto');

// Elementos da câmera
const btnTirarFoto = document.getElementById('btn-tirar-foto');
const btnSalvarBrasao = document.getElementById('btn-salvar-brasao');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const btnCapturar = document.getElementById('btn-capturar');
const btnNovaFoto = document.getElementById('btn-nova-foto');
const btnSalvarFoto = document.getElementById('btn-salvar-foto');
const btnCompartilhar = document.getElementById('btn-compartilhar');
const photoPreview = document.getElementById('photo-preview');
const capturedPhoto = document.getElementById('captured-photo');
const overlayBrasao = document.getElementById('overlay-brasao');
const cameraError = document.getElementById('camera-error');

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    mostrarTela('inicio');
    
    // Inicializar modal
    cameraModal = new bootstrap.Modal(document.getElementById('cameraModal'));
    
    // Event listeners básicos
    btnIniciar.addEventListener('click', iniciarChat);
    btnRefazer.addEventListener('click', reiniciarApp);
    
    // Event listeners da câmera
    btnTirarFoto.addEventListener('click', abrirCamera);
    btnSalvarBrasao.addEventListener('click', salvarBrasao);
    btnCapturar.addEventListener('click', capturarFoto);
    btnNovaFoto.addEventListener('click', novaFoto);
    btnSalvarFoto.addEventListener('click', salvarFoto);
    btnCompartilhar.addEventListener('click', compartilharInstagram);
    
    // Limpar stream quando modal fechar
    document.getElementById('cameraModal').addEventListener('hidden.bs.modal', function() {
        pararCamera();
    });
});

// Funções principais do chat (mantidas do código original)
function iniciarChat() {
    mostrarTela('chat');
    perguntaAtual = 0;
    pontuacao = {
        comandante_ia: 0,
        engenheiro_automacao: 0,
        mestre_vr: 0,
        hacker_futuro: 0
    };
    mensagensContainer.innerHTML = '';
    mostrarPergunta();
}

function mostrarTela(nomeTela) {
    telaInicio.classList.add('d-none');
    telaChat.classList.add('d-none');
    telaResultado.classList.add('d-none');
    
    if (nomeTela === 'inicio') {
        telaInicio.classList.remove('d-none');
        telaInicio.classList.add('fade-in');
    } else if (nomeTela === 'chat') {
        telaChat.classList.remove('d-none');
        telaChat.classList.add('fade-in');
    } else if (nomeTela === 'resultado') {
        telaResultado.classList.remove('d-none');
        telaResultado.classList.add('fade-in');
    }
}

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    atualizarProgresso();
    
    setTimeout(() => {
        adicionarMensagem('bot', pergunta.texto);
        setTimeout(() => {
            mostrarOpcoes(pergunta.opcoes);
        }, 1000);
    }, 500);
}

function adicionarMensagem(tipo, texto) {
    const mensagemDiv = document.createElement('div');
    mensagemDiv.className = `mensagem ${tipo}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'mensagem-avatar';
    avatar.textContent = tipo === 'bot' ? '🤖' : '👤';
    
    const conteudo = document.createElement('div');
    conteudo.className = 'mensagem-conteudo';
    conteudo.textContent = texto;
    
    mensagemDiv.appendChild(avatar);
    mensagemDiv.appendChild(conteudo);
    
    mensagensContainer.appendChild(mensagemDiv);
    mensagensContainer.scrollTop = mensagensContainer.scrollHeight;
}

function mostrarOpcoes(opcoes) {
    opcoesContainer.innerHTML = '';
    
    opcoes.forEach((opcao, index) => {
        const opcaoDiv = document.createElement('div');
        opcaoDiv.className = 'opcao';
        opcaoDiv.textContent = opcao.texto;
        opcaoDiv.addEventListener('click', () => selecionarOpcao(opcao, index));
        opcoesContainer.appendChild(opcaoDiv);
    });
}

function selecionarOpcao(opcao, index) {
    adicionarMensagem('user', opcao.texto);
    
    Object.keys(opcao.pontos).forEach(casa => {
        pontuacao[casa] += opcao.pontos[casa];
    });
    
    opcoesContainer.innerHTML = '';
    perguntaAtual++;
    
    if (perguntaAtual < perguntas.length) {
        setTimeout(() => {
            mostrarPergunta();
        }, 1000);
    } else {
        setTimeout(() => {
            finalizarChat();
        }, 1500);
    }
}

function atualizarProgresso() {
    const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
    progressoFill.style.width = `${progresso}%`;
    progressoFill.setAttribute('aria-valuenow', progresso);
    progressoTexto.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
}

function finalizarChat() {
    let casaVencedora = 'comandante_ia';
    let maiorPontuacao = 0;
    
    Object.keys(pontuacao).forEach(casa => {
        if (pontuacao[casa] > maiorPontuacao) {
            maiorPontuacao = pontuacao[casa];
            casaVencedora = casa;
        }
    });
    
    mostrarResultado(casaVencedora);
}

function mostrarResultado(casaId) {
    const casa = casasTech[casaId];
    casaAtual = casaId;
    
    document.getElementById('casa-brasao').src = casa.img;
    document.getElementById('casa-nome').textContent = casa.nome;
    document.getElementById('casa-lema').textContent = casa.lema;
    
    const cursosLista = document.getElementById('cursos-lista');
    cursosLista.innerHTML = '';
    
    casa.cursos.forEach(curso => {
        const cursoDiv = document.createElement('div');
        cursoDiv.className = 'curso-item';
        cursoDiv.textContent = curso;
        cursosLista.appendChild(cursoDiv);
    });
    
    mostrarTela('resultado');
}

function reiniciarApp() {
    perguntaAtual = 0;
    pontuacao = {
        comandante_ia: 0,
        engenheiro_automacao: 0,
        mestre_vr: 0,
        hacker_futuro: 0
    };
    
    mensagensContainer.innerHTML = '';
    opcoesContainer.innerHTML = '';
    progressoFill.style.width = '0%';
    progressoFill.setAttribute('aria-valuenow', 0);
    progressoTexto.textContent = 'Pergunta 1 de 6';
    
    mostrarTela('inicio');
}

// Função para carregar imagem sem problemas de CORS
function carregarImagemSegura(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous'; // Tentar CORS primeiro
        
        img.onload = () => resolve(img);
        img.onerror = () => {
            // Se CORS falhar, tentar sem crossOrigin
            const imgFallback = new Image();
            imgFallback.onload = () => resolve(imgFallback);
            imgFallback.onerror = reject;
            imgFallback.src = src;
        };
        
        img.src = src;
    });
}

// Função para converter imagem para canvas sem problemas de CORS
async function imagemParaCanvas(src) {
    try {
        const img = await carregarImagemSegura(src);
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        
        tempCanvas.width = img.width;
        tempCanvas.height = img.height;
        tempCtx.drawImage(img, 0, 0);
        
        return tempCanvas;
    } catch (error) {
        console.error('Erro ao carregar imagem:', error);
        return null;
    }
}

// Funções da câmera
async function abrirCamera() {
    try {
        cameraError.classList.add('d-none');
        
        // Configurar overlay do brasão
        if (casaAtual) {
            overlayBrasao.src = casasTech[casaAtual].img;
        }
        
        // Solicitar acesso à câmera
        stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: 'user',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            } 
        });
        
        video.srcObject = stream;
        video.play();
        
        // Resetar estado
        resetarEstadoCamera();
        
        // Mostrar modal
        cameraModal.show();
        
    } catch (error) {
        console.error('Erro ao acessar câmera:', error);
        mostrarErroCamera('Não foi possível acessar a câmera. Verifique as permissões do navegador.');
    }
}

function mostrarErroCamera(mensagem) {
    cameraError.classList.remove('d-none');
    cameraError.innerHTML = `
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        ${mensagem}
    `;
}

function resetarEstadoCamera() {
    video.classList.remove('d-none');
    photoPreview.classList.add('d-none');
    btnCapturar.classList.remove('d-none');
    btnNovaFoto.classList.add('d-none');
    btnSalvarFoto.classList.add('d-none');
    btnCompartilhar.classList.add('d-none');
    cameraError.classList.add('d-none');
}

async function capturarFoto() {
    try {
        const context = canvas.getContext('2d');
        
        // Definir dimensões do canvas baseado no vídeo
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Desenhar o vídeo no canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Carregar e desenhar o brasão de forma segura
        if (casaAtual) {
            const brasaoCanvas = await imagemParaCanvas(casasTech[casaAtual].img);
            
            if (brasaoCanvas) {
                // Calcular posição e tamanho do brasão (canto superior direito)
                const brasaoSize = Math.min(canvas.width * 0.2, canvas.height * 0.2);
                const brasaoX = canvas.width - brasaoSize - 20;
                const brasaoY = 20;
                
                // Desenhar o brasão redimensionado
                context.drawImage(brasaoCanvas, brasaoX, brasaoY, brasaoSize, brasaoSize);
            }
        }
        
        // Converter para imagem e mostrar preview
        const dataURL = canvas.toDataURL('image/jpeg', 0.9);
        capturedPhoto.src = dataURL;
        
        // Atualizar interface
        video.classList.add('d-none');
        photoPreview.classList.remove('d-none');
        btnCapturar.classList.add('d-none');
        btnNovaFoto.classList.remove('d-none');
        btnSalvarFoto.classList.remove('d-none');
        btnCompartilhar.classList.remove('d-none');
        
    } catch (error) {
        console.error('Erro ao capturar foto:', error);
        mostrarErroCamera('Erro ao capturar foto. Tente novamente.');
    }
}

function novaFoto() {
    resetarEstadoCamera();
}

function salvarFoto() {
    try {
        const dataURL = canvas.toDataURL('image/jpeg', 0.9);
        baixarArquivo(dataURL, `casa-tech-${casaAtual}-${Date.now()}.jpg`);
        
        // Animação de sucesso
        btnSalvarFoto.classList.add('share-animation');
        setTimeout(() => {
            btnSalvarFoto.classList.remove('share-animation');
        }, 600);
        
    } catch (error) {
        console.error('Erro ao salvar foto:', error);
        mostrarErroCamera('Erro ao salvar foto. Tente novamente.');
    }
}

async function salvarBrasao() {
    try {
        if (casaAtual) {
            const casa = casasTech[casaAtual];
            
            // Método 1: Tentar converter para blob e baixar
            try {
                const response = await fetch(casa.img);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                baixarArquivo(url, `brasao-${casaAtual}.png`);
                window.URL.revokeObjectURL(url);
            } catch (fetchError) {
                // Método 2: Fallback usando canvas
                const brasaoCanvas = await imagemParaCanvas(casa.img);
                if (brasaoCanvas) {
                    const dataURL = brasaoCanvas.toDataURL('image/png');
                    baixarArquivo(dataURL, `brasao-${casaAtual}.png`);
                } else {
                    throw new Error('Não foi possível carregar o brasão');
                }
            }
            
            // Animação de sucesso
            btnSalvarBrasao.classList.add('share-animation');
            setTimeout(() => {
                btnSalvarBrasao.classList.remove('share-animation');
            }, 600);
        }
    } catch (error) {
        console.error('Erro ao salvar brasão:', error);
        alert('Erro ao salvar brasão. Tente novamente.');
    }
}

// Função universal para baixar arquivos
function baixarArquivo(dataURL, nomeArquivo) {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.download = nomeArquivo;
    link.href = dataURL;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function compartilharInstagram() {
    try {
        const dataURL = canvas.toDataURL('image/jpeg', 0.9);
        
        // Tentar usar Web Share API se disponível
        if (navigator.share && navigator.canShare) {
            // Converter dataURL para blob
            const response = await fetch(dataURL);
            const blob = await response.blob();
            const file = new File([blob], `casa-tech-${casaAtual}.jpg`, { type: 'image/jpeg' });
            
            const shareData = {
                title: `Minha Casa Tech - ${casasTech[casaAtual].nome}`,
                text: `Descobri minha Casa Tech no Senac! ${casasTech[casaAtual].lema} #CasaTechSenac #CasaAberta`,
                files: [file]
            };
            
            if (navigator.canShare(shareData)) {
                await navigator.share(shareData);
            } else {
                compartilharFallback(dataURL);
            }
        } else {
            compartilharFallback(dataURL);
        }
        
        // Animação de sucesso
        btnCompartilhar.classList.add('share-animation');
        setTimeout(() => {
            btnCompartilhar.classList.remove('share-animation');
        }, 600);
        
    } catch (error) {
        console.error('Erro ao compartilhar:', error);
        compartilharFallback();
    }
}

function compartilharFallback(dataURL = null) {
    // Fallback: salvar imagem e copiar texto
    const texto = `Descobri minha Casa Tech no Senac! ${casasTech[casaAtual].nome} - ${casasTech[casaAtual].lema} #CasaTechSenac #CasaAberta`;
    
    // Salvar imagem automaticamente
    if (dataURL) {
        baixarArquivo(dataURL, `casa-tech-${casaAtual}-instagram.jpg`);
    }
    
    // Copiar texto para clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(texto).then(() => {
            alert('Foto salva e texto copiado! Cole no Instagram junto com sua foto.');
        }).catch(() => {
            alert('Foto salva! Copie este texto para o Instagram:\n\n' + texto);
        });
    } else {
        alert('Foto salva! Copie este texto para o Instagram:\n\n' + texto);
    }
    
    // Tentar abrir Instagram (funciona melhor em mobile)
    setTimeout(() => {
        const instagramUrl = 'https://www.instagram.com/';
        window.open(instagramUrl, '_blank');
    }, 1000);
}

function pararCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
    video.srcObject = null;
}

// Tratamento de erros
window.addEventListener('error', function(e) {
    console.error('Erro na aplicação:', e.error);
});

// Detectar se é dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Smooth scroll para mobile
if ('scrollBehavior' in document.documentElement.style) {
    document.documentElement.style.scrollBehavior = 'smooth';
}

