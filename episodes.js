// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // === GESTÃO DE TEMAS (CLARO/ESCURO) ===

    // Recupera o tema salvo no localStorage ou define 'light-mode' como padrão
    const savedTheme = localStorage.getItem('theme') || 'light-mode';

    // Aplica o tema salvo ao carregar a página
    body.classList.add(savedTheme);

    // Atualiza o texto do botão com base no tema atual
    updateThemeButtonText(savedTheme);

    // Alterna entre os temas ao clicar no botão
    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');

        // Alterna as classes do body para refletir o tema atual
        body.classList.toggle('dark-mode', !isDarkMode);
        body.classList.toggle('light-mode', isDarkMode);

        // Determina e salva o novo tema no localStorage
        const newTheme = isDarkMode ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme', newTheme);

        // Atualiza o texto do botão de alternância
        updateThemeButtonText(newTheme);
    });

    // Função para atualizar o texto do botão de alternância de tema
    function updateThemeButtonText(theme) {
        if (theme === 'dark-mode') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
        }
    }
});

// === GESTÃO DO MODAL PARA TRAILERS ===
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close');

    // Função para abrir o modal e carregar o trailer
    window.openTrailer = function (url) {
        // Remove qualquer iframe existente no modal
        modalBody.innerHTML = '';

        // Cria um elemento iframe para exibir o trailer
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        // Adiciona o iframe ao corpo do modal
        modalBody.appendChild(iframe);

        // Exibe o modal
        modal.style.display = 'flex';
    };

    // Função para fechar o modal
    window.closeModal = function () {
        modal.style.display = 'none';

        // Remove o iframe para liberar memória
        modalBody.innerHTML = '';
    };

    // Adiciona o evento de clique ao botão de fechar
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Fecha o modal ao clicar fora do conteúdo (opcional)
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});

// === ABERTURA DE LINKS DE MANGÁ COM OU SEM PROXY ===
window.openManga = function (url) {
    // Configuração para usar proxy (se necessário)
    const useProxy = false; // Altere para true se quiser usar um proxy
    const proxyUrl = `/proxy?url=${encodeURIComponent(url)}`;

    // Determina o URL final baseado na configuração de proxy
    const finalUrl = useProxy ? proxyUrl : url;

    // Abre o link em uma nova aba
    window.open(finalUrl, '_blank');
};
