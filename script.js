// Base de conhecimento específica das Diretrizes USP ABNT 2020
const knowledgeBase = {
    // FORMATAÇÃO E APRESENTAÇÃO GRÁFICA
    "formato papel": {
        answer: "**Formato do papel:** A4 (21 cm x 29,7 cm), papel branco ou reciclado, digitado na cor preta. Outras cores são permitidas apenas para ilustrações.",
        keywords: ["formato", "papel", "a4", "tamanho", "dimensões"]
    },
    
    "margens": {
        answer: "**Margens obrigatórias:**\n• **Anverso:** esquerda e superior = 3 cm; direita e inferior = 2 cm\n• **Verso:** direita e superior = 3 cm; esquerda e inferior = 2 cm\n\nEssas medidas são obrigatórias conforme as Diretrizes USP 2020.",
        keywords: ["margens", "margem", "esquerda", "direita", "superior", "inferior", "anverso", "verso"]
    },
    
    "fonte tamanho": {
        answer: "**Tamanhos de fonte obrigatórios:**\n• **Texto principal:** fonte 12\n• **Citações longas (+ de 3 linhas):** fonte 10 ou 11\n• **Notas de rodapé:** fonte 10 ou 11\n• **Legendas e fontes de ilustrações:** fonte 10 ou 11\n• **Ficha catalográfica:** fonte 10 ou 11\n• **Paginação:** fonte 10 ou 11",
        keywords: ["fonte", "tamanho", "letra", "size", "12", "10", "11"]
    },
    
    "espacamento": {
        answer: "**Espaçamento obrigatório:**\n• **Texto principal:** espaço 1,5 cm\n• **Citações longas:** espaço simples\n• **Notas de rodapé:** espaço simples\n• **Referências:** espaço simples\n• **Ficha catalográfica:** espaço simples\n• **Entre referências:** um espaço simples em branco\n• **Títulos de seções:** separados do texto por 1,5 cm",
        keywords: ["espaçamento", "espaço", "entrelinhas", "1,5", "simples", "duplo"]
    },
    
    // PAGINAÇÃO
    "paginacao": {
        answer: "**Paginação USP:**\n• **Contagem:** todas as folhas a partir da folha de rosto são contadas\n• **Numeração:** inicia na primeira folha textual (Introdução)\n• **Posição:** canto superior direito (anverso) e superior esquerdo (verso)\n• **Tipo:** algarismos arábicos\n• **Pré-textuais:** contadas mas NÃO numeradas\n• **Múltiplos volumes:** numeração contínua do primeiro ao último",
        keywords: ["paginação", "numeração", "página", "folha", "numerar", "contar"]
    },
    
    // ESTRUTURA OBRIGATÓRIA
    "estrutura trabalho": {
        answer: "**Estrutura obrigatória do trabalho acadêmico USP:**\n\n**PARTE EXTERNA:**\n• Capa (obrigatório)\n• Lombada (opcional)\n\n**ELEMENTOS PRÉ-TEXTUAIS:**\n• Folha de rosto (obrigatório)\n• Ficha catalográfica (obrigatório)\n• Folha de avaliação (obrigatório)\n• Resumo em português (obrigatório)\n• Abstract em inglês (obrigatório)\n• Sumário (obrigatório)\n\n**ELEMENTOS TEXTUAIS:**\n• Introdução\n• Desenvolvimento\n• Conclusão\n\n**ELEMENTOS PÓS-TEXTUAIS:**\n• Referências (obrigatório)",
        keywords: ["estrutura", "elementos", "obrigatório", "opcional", "ordem", "sequência"]
    },
    
    "capa": {
        answer: "**Informações obrigatórias na CAPA (nesta ordem):**\na) Nome da instituição (opcional)\nb) Nome completo do autor\nc) Título em letras minúsculas (exceto primeira letra e nomes próprios)\nd) Subtítulo precedido de dois pontos (se houver)\ne) Número de volumes (se houver)\nf) Local (cidade)\ng) Ano de depósito (entrega)\n\n**Exemplo:** UNIVERSIDADE DE SÃO PAULO → NOME DO AUTOR → Título do trabalho → São Paulo → 2024",
        keywords: ["capa", "título", "autor", "instituição", "local", "ano"]
    },
    
    "folha rosto": {
        answer: "**Folha de rosto - informações obrigatórias:**\na) Nome completo do autor\nb) Título (minúsculas, exceto primeira letra)\nc) Subtítulo com dois pontos (se houver)\nd) **'Versão Original' ou 'Versão Corrigida'**\ne) Natureza do trabalho: 'Dissertação apresentada à [Unidade] da Universidade de São Paulo para obtenção do título de Mestre em Ciências. Área de Concentração: [área]'\nf) Nome do orientador e coorientador\ng) Local (cidade)\nh) Ano de depósito\n\n**VERSO:** Ficha catalográfica (elaborada pela biblioteca)",
        keywords: ["folha de rosto", "natureza", "orientador", "versão original", "versão corrigida"]
    },
    
    // RESUMO
    "resumo": {
        answer: "**Resumo - especificações USP:**\n• **Parágrafo único** (sem quebras)\n• **150 a 500 palavras**\n• Deve conter: objetivos, métodos, resultados e conclusões\n• **Palavras-chave:** separadas por ponto, finalizadas por ponto\n• Usar preferencialmente o Vocabulário Controlado SIBiUSP\n• **Precedido da referência completa do documento**\n\n**Abstract:** mesmas características, obrigatório em inglês\n**Keywords:** equivalente às palavras-chave",
        keywords: ["resumo", "abstract", "palavras-chave", "keywords", "150", "500", "parágrafo único"]
    },
    
    // CITAÇÕES
    "citacao direta": {
        answer: "**Citação direta - regras USP:**\n\n**ATÉ 3 LINHAS:**\n• Entre aspas duplas no parágrafo\n• Aspas simples para citação dentro da citação\n• **Página obrigatória**\n\n**MAIS DE 3 LINHAS:**\n• Recuo de **4 cm da margem esquerda**\n• Fonte menor (10 ou 11)\n• Espaço simples\n• Sem aspas\n• **Página obrigatória**\n\n**Exemplo:** Segundo Silva (2020, p. 45), \"texto da citação.\"\n**Citação longa:** [recuo 4cm] texto da citação longa... (SILVA, 2020, p. 45).",
        keywords: ["citação direta", "aspas", "recuo", "4cm", "página", "três linhas"]
    },
    
    "citacao indireta": {
        answer: "**Citação indireta (paráfrase):**\n• Reproduz ideias do autor com suas palavras\n• **Sem aspas**\n• Página é opcional (mas recomendada)\n• Deve manter o sentido original\n\n**Exemplo:** A pesquisa demonstrou resultados significativos (SILVA, 2020).\n\n**Sistema autor-data:** (AUTOR, ano) ou Autor (ano)\n**Sistema numérico:** número sobrescrito ou entre parênteses",
        keywords: ["citação indireta", "paráfrase", "sem aspas", "página opcional"]
    },
    
    "sistema autor-data": {
        answer: "**Sistema autor-data - regras USP:**\n\n**1 autor:** (SILVA, 2020) ou Silva (2020)\n**2 autores:** (SILVA; SANTOS, 2020) ou Silva e Santos (2020)\n**3 autores:** (SILVA; SANTOS; COSTA, 2020) ou Silva, Santos e Costa (2020)\n**4+ autores:** (SILVA et al., 2020) ou Silva et al. (2020)\n\n**Mesmo autor, mesmo ano:** (SILVA, 2020a) e (SILVA, 2020b)\n**Vários trabalhos:** (SILVA, 2018, 2019, 2020)\n**Autores diferentes:** ordem alfabética (COSTA, 2019; SILVA, 2020)",
        keywords: ["autor-data", "et al", "múltiplos autores", "mesmo ano", "alfabética"]
    },
    
    // REFERÊNCIAS
    "referencias": {
        answer: "**Referências - normas USP:**\n• **Elemento obrigatório**\n• Ordem alfabética (sistema autor-data) ou ordem de aparição (sistema numérico)\n• Espaço simples entre linhas\n• Um espaço simples em branco entre referências\n• **Nota de rodapé:** 'De acordo com a Associação Brasileira de Normas Técnicas (ABNT NBR 6023)'\n• Consultar biblioteca da unidade para verificar norma adotada\n\n**Elementos essenciais:** autor, título, edição, local, editora, ano",
        keywords: ["referências", "bibliografia", "ordem alfabética", "abnt", "6023"]
    },
    
    "referencia livro": {
        answer: "**Referência de livro - modelo USP:**\n\n**Um autor:**\nSILVA, J. **Título do livro**. 2. ed. São Paulo: Editora, 2020.\n\n**Dois autores:**\nSILVA, J.; SANTOS, M. **Título do livro**. Rio de Janeiro: Editora, 2020.\n\n**Três autores:**\nSILVA, J.; SANTOS, M.; COSTA, A. **Título do livro**. Brasília: Editora, 2020.\n\n**Quatro ou mais:**\nSILVA, J. et al. **Título do livro**. São Paulo: Editora, 2020.\n\n**Elementos:** AUTOR. **Título**. Edição. Local: Editora, ano.",
        keywords: ["referência livro", "monografia", "autor", "título", "editora", "local"]
    },
    
    // NUMERAÇÃO PROGRESSIVA
    "numeracao secoes": {
        answer: "**Numeração progressiva das seções:**\n• **Seção primária:** 1, 2, 3... (nova folha)\n• **Seção secundária:** 1.1, 1.2, 1.3...\n• **Seção terciária:** 1.1.1, 1.1.2...\n• **Seção quaternária:** 1.1.1.1, 1.1.1.2...\n• **Seção quinária:** 1.1.1.1.1 (limite máximo)\n\n**Títulos sem numeração:** RESUMO, ABSTRACT, SUMÁRIO, REFERÊNCIAS (centralizados)\n**Alíneas:** a), b), c)... (quando necessário subdividir além da quinária)\n**Subalíneas:** - (travessão)",
        keywords: ["numeração", "seções", "primária", "secundária", "alíneas", "subalíneas"]
    },
    
    // ILUSTRAÇÕES E TABELAS
    "ilustracoes": {
        answer: "**Ilustrações - normas USP:**\n• **Identificação:** parte superior (Figura 1 - Título explicativo)\n• **Fonte:** parte inferior (obrigatória, mesmo se própria)\n• **Inserir:** próximo ao texto que se refere\n• **Referência completa:** deve constar nas Referências\n• **Tipos:** desenhos, esquemas, fluxogramas, fotografias, gráficos, mapas, organogramas, plantas, quadros\n\n**Exemplo:**\nFigura 1 - Processo de análise dos dados\n[ilustração]\nFonte: Elaborada pelo autor (2024).",
        keywords: ["ilustrações", "figuras", "gráficos", "fonte", "legenda", "título"]
    },
    
    "tabelas": {
        answer: "**Tabelas - critérios IBGE/USP:**\n• **Título:** Tabela 1 - Descrição (parte superior)\n• **Posição:** preferencialmente vertical\n• **Traços:** horizontais fortes no cabeçalho, sem traços verticais\n• **Continuação:** 'continua', 'continuação', 'conclusão'\n• **Fonte:** parte inferior (obrigatória)\n• **Numeração:** consecutiva ou por capítulo (Tabela 4.1)\n• **Significado próprio:** dispensar consulta ao texto\n\n**Exemplo:**\nTabela 1 - Resultados da pesquisa\n[dados]\nFonte: Dados da pesquisa (2024).",
        keywords: ["tabelas", "ibge", "traços", "numeração", "fonte", "título"]
    },
    
    // ELEMENTOS ESPECÍFICOS
    "siglas": {
        answer: "**Siglas - regra USP:**\n• **Primeira menção:** forma completa seguida da sigla entre parênteses\n• **Demais menções:** apenas a sigla\n\n**Exemplo:**\n• 1ª vez: \"a Universidade de São Paulo (USP)\"\n• 2ª vez em diante: \"a USP\"\n\n**Lista de siglas:** elemento opcional quando há muitas siglas no trabalho",
        keywords: ["siglas", "abreviaturas", "primeira menção", "parênteses", "lista"]
    },
    
    "equacoes": {
        answer: "**Equações e fórmulas:**\n• **Destacadas:** centralizadas no parágrafo\n• **Numeração:** quando necessário, entre parênteses à direita\n• **Quebra de linha:** antes do = ou após +, -, ×, ÷\n• **No texto:** permitido usar entrelinha maior\n\n**Exemplo:**\nX² + Y² = Z² (1)\n\n(X² + Y²)/5 = n (2)",
        keywords: ["equações", "fórmulas", "numeração", "centralizada", "quebra"]
    },
    
    "notas rodape": {
        answer: "**Notas de rodapé:**\n• **Fonte menor** que o texto principal\n• **Separação:** filete de 5 cm da margem esquerda\n• **Numeração:** consecutiva por capítulo\n• **Tipos:** explicativas (comentários) e de referência (documentos)\n• **Sistema numérico:** usar símbolos (* etc.) para notas\n\n**Classificação:**\n• Notas explicativas: complementações\n• Notas de referência: documentos consultados",
        keywords: ["notas de rodapé", "filete", "numeração", "explicativas", "referência"]
    },
    
    // ELEMENTOS OPCIONAIS
    "dedicatoria": {
        answer: "**Dedicatória (opcional):**\n• Elemento sem título\n• Folha distinta\n• Homenagem a pessoa(s)\n• Texto livre, geralmente curto\n\n**Exemplo:** \"À minha esposa, com amor, admiração e gratidão por sua compreensão, carinho, presença e incansável apoio ao longo do período de elaboração deste trabalho.\"",
        keywords: ["dedicatória", "homenagem", "opcional", "folha distinta"]
    },
    
    "agradecimentos": {
        answer: "**Agradecimentos (opcional):**\n• Pessoas e instituições que contribuíram\n• **CAPES:** \"O presente trabalho foi realizado com apoio da Coordenação de Aperfeiçoamento de Pessoal de Nível Superior - Brasil (CAPES) - Código de Financiamento 001.\"\n• **FAPESP:** \"processo n. aaaa/nnnn-d, Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP)\"\n• Orientador, instituição, laboratórios, financiamento",
        keywords: ["agradecimentos", "capes", "fapesp", "financiamento", "orientador"]
    },
    
    "epigrafe": {
        answer: "**Epígrafe (opcional):**\n• Citação relacionada ao tema\n• Seguida da indicação de autoria\n• **É uma citação direta** - fonte deve constar nas Referências\n• Pode haver epígrafes nas aberturas de capítulos\n\n**Exemplo:**\n\"De todas as dificuldades que uma pessoa tem que enfrentar, a mais sofrida é, sem dúvida, o simples ato de esperar.\" (HOSSEINI, 2007, p. 97).",
        keywords: ["epígrafe", "citação", "autoria", "referências", "capítulos"]
    },
    
    // INFORMAÇÕES ESPECÍFICAS USP
    "resolucao copgr": {
        answer: "**Resolução CoPGr nº 7493/2018:**\n• Dissertações e teses podem ser redigidas em português, inglês ou outro idioma\n• **Obrigatório:** título, resumo e palavras-chave em português E inglês\n• Versão original ou corrigida deve ser indicada\n• Mudança de páginas permitida, mas não do título\n• Coorientação conforme Artigo 81 da Resolução",
        keywords: ["resolução", "copgr", "7493", "idioma", "português", "inglês", "coorientação"]
    },
    
    "ficha catalografica": {
        answer: "**Ficha catalográfica:**\n• **Localização:** verso da folha de rosto\n• **Elaboração:** biblioteca da unidade\n• **Autorização:** \"Autorizo a reprodução e divulgação total ou parcial deste trabalho, por qualquer meio convencional ou eletrônico, para fins de estudo e pesquisa, desde que citada a fonte.\"\n• **Consulta:** procurar a biblioteca de origem para confecção",
        keywords: ["ficha catalográfica", "biblioteca", "verso", "autorização", "reprodução"]
    },
    
    "lombada": {
        answer: "**Lombada (opcional):**\n• Nome do autor (abreviado se necessário)\n• Título (5 primeiras palavras + reticências se necessário)\n• Elementos de identificação (v. 2)\n• **Impressão:** longitudinal, legível do alto para o pé\n• **Espaço:** 2,5 cm reservado para etiqueta de localização\n• Padrão de encadernação: critério da CPG da Unidade",
        keywords: ["lombada", "autor", "título", "longitudinal", "encadernação", "cpg"]
    }
};

// Função para encontrar a melhor resposta
function findBestAnswer(question) {
    const questionLower = question.toLowerCase();
    let bestMatch = null;
    let maxScore = 0;

    // Procura por correspondências exatas ou parciais
    for (const [key, data] of Object.entries(knowledgeBase)) {
        let score = 0;
        
        // Verifica se a pergunta contém palavras-chave
        for (const keyword of data.keywords) {
            if (questionLower.includes(keyword.toLowerCase())) {
                score += keyword.length; // Palavras mais específicas têm mais peso
            }
        }
        
        // Verifica correspondência com a chave
        if (questionLower.includes(key.toLowerCase())) {
            score += key.length * 2; // Chave tem peso maior
        }
        
        if (score > maxScore) {
            maxScore = score;
            bestMatch = data;
        }
    }

    return bestMatch;
}

// Respostas para perguntas não encontradas
const fallbackResponses = [
    "Não encontrei informações específicas sobre isso nas Diretrizes USP ABNT 2020. Você poderia reformular sua pergunta ou ser mais específico? Por exemplo: 'Como formatar citações diretas?' ou 'Qual o tamanho da fonte?'",
    "Essa informação não está clara nas diretrizes que tenho. Tente perguntar sobre: formatação, citações, referências, estrutura do trabalho, margens, fontes, ou elementos específicos como resumo, capa, etc.",
    "Não localizei essa informação específica. As Diretrizes USP ABNT 2020 que conheço cobrem: apresentação gráfica, citações, referências, estrutura do documento, ilustrações e tabelas. Sobre qual desses temas você gostaria de saber?",
    "Desculpe, não encontrei essa informação nas diretrizes. Posso ajudar com questões sobre: normas de formatação, tipos de citação, estrutura obrigatória, elementos pré-textuais, pós-textuais, margens, fontes, espaçamento, etc."
];

// Elementos DOM
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Função para adicionar mensagem ao chat
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-graduation-cap"></i>';
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    if (isUser) {
        messageContent.textContent = content;
    } else {
        // Converte markdown básico para HTML
        const htmlContent = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n• /g, '\n<br>• ')
            .replace(/\n/g, '<br>');
        messageContent.innerHTML = htmlContent;
    }
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // Scroll para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para mostrar indicador de digitação
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-message';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-graduation-cap"></i>
        </div>
        <div class="message-content">
            <div class="typing-indicator">
                <span>Consultando as diretrizes</span>
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

// Função para processar a pergunta
function processQuestion(question) {
    // Adiciona mensagem do usuário
    addMessage(question, true);
    
    // Mostra indicador de digitação
    const typingIndicator = showTypingIndicator();
    
    // Simula delay de processamento
    setTimeout(() => {
        // Remove indicador de digitação
        typingIndicator.remove();
        
        // Busca resposta
        const bestMatch = findBestAnswer(question);
        
        let response;
        if (bestMatch && bestMatch.answer) {
            response = bestMatch.answer;
        } else {
            // Resposta padrão aleatória
            response = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
        }
        
        // Adiciona resposta do bot
        addMessage(response);
    }, 1000 + Math.random() * 1000); // Delay entre 1-2 segundos
}

// Event listeners
sendButton.addEventListener('click', () => {
    const question = userInput.value.trim();
    if (question) {
        processQuestion(question);
        userInput.value = '';
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const question = userInput.value.trim();
        if (question) {
            processQuestion(question);
            userInput.value = '';
        }
    }
});

// Botões de perguntas rápidas
document.querySelectorAll('.quick-btn').forEach(button => {
    button.addEventListener('click', () => {
        const question = button.textContent.trim();
        processQuestion(question);
    });
});

// Mensagem de boas-vindas
window.addEventListener('load', () => {
    setTimeout(() => {
        addMessage("👋 Olá! Sou seu assistente especializado nas **Diretrizes para Apresentação de Dissertações e Teses da USP - 4ª Edição (2020)**.\n\nPosso ajudar com informações específicas sobre:\n• **Formatação** (margens, fontes, espaçamento)\n• **Citações** (diretas, indiretas, autor-data)\n• **Referências** (ABNT NBR 6023)\n• **Estrutura** (elementos obrigatórios e opcionais)\n• **Normas específicas** da USP\n\nFaça sua pergunta ou use os botões abaixo! 📚");
    }, 500);
});
