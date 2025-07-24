// Configurações da aplicação Casa Tech Senac
const CONFIG = {
    // Configurações das APIs de LLM
    apis: {
        openai: {
            name: 'OpenAI (ChatGPT)',
            baseUrl: 'https://api.openai.com/v1',
            model: 'gpt-3.5-turbo',
            maxTokens: 100,
            temperature: 0.8,
            headers: {
                'Content-Type': 'application/json'
            }
        },
        mistral: {
            name: 'Mistral AI',
            baseUrl: 'https://api.mistral.ai/v1',
            model: 'mistral-tiny',
            maxTokens: 100,
            temperature: 0.8,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    },
    
    // Configurações do chat
    chat: {
        delayBetweenMessages: 1000,
        typingSpeed: 50,
        maxMessageLength: 500
    },
    
    // Configurações de animação
    animations: {
        fadeInDuration: 500,
        slideInDelay: 100,
        progressAnimationDuration: 500
    },
    
    // Informações do Senac
    senac: {
        nome: 'Senac São José do Rio Preto',
        endereco: 'Rua Jorge Tibiriçá, 3518 - Santa Cruz',
        cidade: 'São José do Rio Preto - SP',
        cep: '15014-040',
        telefone: '(17) 2139-1699',
        email: 'sjriopreto@sp.senac.br',
        horario: 'Segunda a sexta, 8h às 21h | Sábados, 8h às 12h',
        site: 'https://www.sp.senac.br/senac-sao-jose-do-rio-preto'
    },
    
    // Prompts para personalização
    prompts: {
        personalizacao: `
            Com base nas respostas do usuário: "{respostas}", 
            crie um lema personalizado e divertido para a {casa}.
            O lema deve ser jovem, descontraído, usar emojis e ter no máximo 60 caracteres.
            Exemplo do lema original: "{lemaOriginal}"
            
            Responda apenas com o novo lema, sem explicações.
        `,
        
        sugestaoCarreira: `
            Baseado no perfil do usuário que foi classificado na {casa} 
            e suas respostas: "{respostas}", 
            sugira 3 dicas práticas de carreira na área de tecnologia.
            Use linguagem jovem e motivadora, máximo 200 caracteres por dica.
        `
    },
    
    // Configurações de armazenamento local
    storage: {
        apiConfigKey: 'casaTechApiConfig',
        userPreferencesKey: 'casaTechUserPrefs',
        resultsHistoryKey: 'casaTechHistory'
    },
    
    // Configurações de acessibilidade
    accessibility: {
        enableKeyboardNavigation: true,
        enableScreenReader: true,
        highContrastMode: false,
        reducedMotion: false
    }
};

// Função para obter configuração específica
function getConfig(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], CONFIG);
}

// Função para atualizar configuração
function updateConfig(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((obj, key) => obj[key], CONFIG);
    target[lastKey] = value;
}

// Exportar configurações (se usando módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getConfig, updateConfig };
}

