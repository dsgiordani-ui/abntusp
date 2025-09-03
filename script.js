// Base de conhecimento das diretrizes ABNT USP
const knowledgeBase = {
    // Citações
    citacoes: {
        keywords: ['citação', 'citar', 'citações', 'referência', 'autor', 'apud'],
        responses: {
            direta: {
                keywords: ['direta', 'diretas', 'textual', 'literal'],
                answer: `**Citações Diretas** são transcrições integrais de parte da obra consultada. Aqui estão as regras:

📝 **Até 3 linhas:**
- Incorporar no parágrafo entre aspas duplas
- Aspas simples para citação dentro da citação
- Exemplo: Segundo Madigan et al. (2010, p. 89), "as vesículas de gás são estruturas fusiformes..."

📝 **Mais de 3 linhas:**
- Destacar do texto com recuo de 4 cm da margem esquerda
- Letra menor que a do texto
- Sem aspas
- Exemplo formatado em bloco separado

⚠️ **Importante:** É obrigatória a indicação da página em citações diretas!`
            },
            indireta: {
                keywords: ['indireta', 'indiretas', 'paráfrase'],
                answer: `**Citações Indiretas** são textos baseados na obra consultada, reproduzindo conteúdo e ideias do documento original:

✅ **Características:**
- Dispensa o uso de aspas duplas
- Reproduz o conteúdo com suas próprias palavras
- Mantém o sentido original da obra

📖 **Exemplo:**
"A frequência respiratória, se aumentada, seria indicação que o animal está sentindo os efeitos do calor (HAMMOND, 1954)."

💡 **Dica:** A indicação da página é opcional em citações indiretas.`
            },
            sistema_autor_data: {
                keywords: ['sistema autor-data', 'autor data', 'sistema'],
                answer: `**Sistema Autor-Data** para citações:

👤 **Um autor:** (PEREIRA, 2013) ou Pereira (2013)

👥 **Dois autores:**
- Entre parênteses: (RAMOS; PESTANA, 2014)
- Fora de parênteses: Ramos e Pestana (2014)

👥 **Três autores:**
- Entre parênteses: (OLIVEIRA; FERREIRA; MASCARENHAS, 2013)
- Fora de parênteses: Oliveira, Ferreira e Mascarenhas (2013)

👥 **Quatro ou mais:** SENA et al. (2012)

📅 **Mesmo autor, mesmo ano:** (GARCIA, 2013a) e (GARCIA, 2013b)`
            }
        }
    },

    // Estrutura do trabalho
    estrutura: {
        keywords: ['estrutura', 'organização', 'partes', 'elementos'],
        responses: {
            folha_rosto: {
                keywords: ['folha de rosto', 'rosto', 'capa interna'],
                answer: `**Folha de Rosto** - Elemento obrigatório com informações essenciais:

📋 **Deve conter:**
- Nome completo do autor
- Título (letras minúsculas, exceto primeira letra e nomes próprios)
- Subtítulo (se houver, precedido de dois pontos)
- Indicação da versão (original ou corrigida)
- Número de volume (se houver mais de um)
- Natureza do trabalho (dissertação/tese, objetivo, instituição, área)
- Nome do orientador e coorientador (se houver)
- Local (cidade)
- Ano de depósito

🔄 **Verso da folha de rosto:**
- Ficha catalográfica (elaborada pela biblioteca)
- Autorização para reprodução`
            },
            elementos_pre_textuais: {
                keywords: ['pré-textuais', 'pré textuais', 'preliminares'],
                answer: `**Elementos Pré-textuais** (ordem obrigatória):

✅ **Obrigatórios:**
- Folha de rosto
- Ficha catalográfica (verso da folha de rosto)
- Folha de avaliação/aprovação
- Resumo em português
- Resumo em língua estrangeira (Abstract)
- Sumário

📝 **Opcionais:**
- Errata
- Dedicatória(s)
- Agradecimento(s)
- Epígrafe(s)
- Lista de ilustrações
- Lista de tabelas
- Lista de abreviaturas e siglas
- Lista de símbolos`
            }
        }
    },

    // Formatação
    formatacao: {
        keywords: ['formatação', 'formato', 'margens', 'fonte', 'espaçamento'],
        responses: {
            margens: {
                keywords: ['margens', 'margem'],
                answer: `**Margens do Documento:**

📄 **Anverso (frente):**
- Esquerda e superior: 3 cm
- Direita e inferior: 2 cm

📄 **Verso:**
- Direita e superior: 3 cm
- Esquerda e inferior: 2 cm

📏 **Papel:** A4 (21 cm x 29,7 cm), branco ou reciclado
🎨 **Cor:** Texto em preto (outras cores permitidas para ilustrações)`
            },
            fonte_espacamento: {
                keywords: ['fonte', 'espaçamento', 'tamanho'],
                answer: `**Fonte e Espaçamento:**

🔤 **Tamanho da fonte:**
- Texto: tamanho 12
- Citações longas, notas de rodapé, legendas: tamanho 10 ou 11

📏 **Espaçamento:**
- Texto geral: 1,5 cm
- Espaço simples: citações longas, notas de rodapé, referências, legendas, ficha catalográfica

🔄 **Recuos:**
- Citações longas: 4 cm da margem esquerda
- Primeira linha de parágrafo: conforme padrão do editor`
            },
            paginacao: {
                keywords: ['paginação', 'numeração', 'páginas'],
                answer: `**Paginação:**

🔢 **Contagem:**
- Todas as folhas são contadas a partir da folha de rosto
- Elementos pré-textuais: contados, mas NÃO numerados

🔢 **Numeração:**
- Inicia na primeira folha textual (Introdução)
- Algarismos arábicos
- Anverso: canto superior direito
- Verso: canto superior esquerdo

📚 **Múltiplos volumes:**
- Numeração única e sequencial do primeiro ao último volume`
            }
        }
    },

    // Referências
    referencias: {
        keywords: ['referências', 'bibliografia', 'referência'],
        responses: {
            geral: {
                keywords: ['como fazer', 'formato', 'modelo'],
                answer: `**Referências - Regras Gerais:**

📚 **Elementos essenciais:**
- Autoria
- Título
- Edição (se houver)
- Local de publicação
- Editora
- Ano de publicação

📖 **Livro com um autor:**
SOBRENOME, Nome. **Título**: subtítulo. Edição. Local: Editora, ano.

📖 **Livro com dois autores:**
SOBRENOME1, Nome; SOBRENOME2, Nome. **Título**. Local: Editora, ano.

📖 **Quatro ou mais autores:**
SOBRENOME, Nome et al. **Título**. Local: Editora, ano.

🔤 **Organização:** Ordem alfabética (sistema autor-data) ou ordem de aparição (sistema numérico)`
            }
        }
    },

    // Resumo
    resumo: {
        keywords: ['resumo', 'abstract'],
        responses: {
            geral: {
                keywords: ['como fazer', 'estrutura', 'tamanho'],
                answer: `**Resumo:**

📝 **Características:**
- Parágrafo único
- 150 a 500 palavras
- Sequência de frases concisas e objetivas
- Deve apresentar: objetivos, métodos, resultados e conclusões

🔑 **Palavras-chave:**
- Logo abaixo do resumo
- Precedidas pela expressão "Palavras-chave:"
- Separadas por ponto
- Preferencialmente do Vocabulário Controlado SIBiUSP

🌐 **Abstract:**
- Mesmas características do resumo em português
- Obrigatório em inglês
- Keywords seguem as mesmas regras`
            }
        }
    }
};

// Função para encontrar resposta na base de conhecimento
function findAnswer(question) {
    const questionLower = question.toLowerCase();

    // Procura por categoria
    for (const [category, data] of Object.entries(knowledgeBase)) {
        // Verifica se a pergunta contém palavras-chave da categoria
        if (data.keywords.some(keyword => questionLower.includes(keyword))) {
            // Procura por subcategoria específica
            for (const [subcat, response] of Object.entries(data.responses)) {
                if (response.keywords.some(keyword => questionLower.includes(keyword))) {
                    return response.answer;
                }
            }
            // Se não encontrou subcategoria específica, retorna a primeira resposta
            const firstResponse = Object.values(data.responses)[0];
            return firstResponse.answer;
        }
    }

    // Resposta padrão se não encontrar correspondência
    return `Desculpe, não encontrei uma resposta específica para sua pergunta.

Posso ajudá-lo com:
- **Citações** (diretas, indiretas, sistema autor-data)
- **Estrutura do trabalho** (folha de rosto, elementos pré-textuais)
- **Formatação** (margens, fontes, espaçamento, paginação)
- **Referências** (como formatar diferentes tipos)
- **Resumo e Abstract**

Tente reformular sua pergunta ou escolha uma das opções acima! 😊`;
}

// Função para adicionar mensagem ao chat
function addMessage(content, isUser = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas ${isUser ? 'fa-user' : 'fa-robot'}"></i>
        </div>
        <div class="message-content">
            ${isUser ? `<p>${content}</p>` : formatBotResponse(content)}
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para formatar resposta do bot
function formatBotResponse(content) {
    // Converte markdown básico para HTML
    let formatted = content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^- (.*$)/gim, '<li>$1</li>')
        .replace(/^📝|^✅|^👤|^👥|^📅|^🔢|^📚|^📖|^🔤|^📏|^🔄|^🌐|^🔑/gm, '<strong>$&</strong>');

    // Agrupa itens de lista
    formatted = formatted.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

    // Quebras de linha
    formatted = formatted.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');

    return `<p>${formatted}</p>`;
}

// Função para mostrar indicador de digitação
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';

    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-indicator">
                <span>Digitando</span>
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
}

// Função para remover indicador de digitação
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Função para enviar mensagem
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const question = userInput.value.trim();

    if (!question) return;

    // Adiciona mensagem do usuário
    addMessage(question, true);

    // Limpa input e desabilita botão
    userInput.value = '';
    sendButton.disabled = true;

    // Mostra indicador de digitação
    showTypingIndicator();

    // Simula delay de processamento
    setTimeout(() => {
        removeTypingIndicator();
        const answer = findAnswer(question);
        addMessage(answer);
        sendButton.disabled = false;
        userInput.focus();
    }, 1000 + Math.random() * 1000); // 1-2 segundos
}

// Função para perguntas rápidas
function askQuestion(question) {
    const userInput = document.getElementById('userInput');
    userInput.value = question;
    sendMessage();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    // Enter para enviar
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !sendButton.disabled) {
            sendMessage();
        }
    });

    // Foco no input
    userInput.focus();

    // Contador de caracteres (opcional)
    userInput.addEventListener('input', function() {
        const remaining = 500 - this.value.length;
        if (remaining < 50) {
            this.style.borderColor = remaining < 0 ? '#e53e3e' : '#ed8936';
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });
});

// Função para scroll suave
function smoothScrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.scrollTo({
        top: chatMessages.scrollHeight,
        behavior: 'smooth'
    });
}