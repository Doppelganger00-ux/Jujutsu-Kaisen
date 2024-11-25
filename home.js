document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-mode';

    // Aplica o tema salvo ao carregar a página
    document.body.classList.add(currentTheme);

    // Define o texto inicial do botão com base no tema atual
    updateButtonText(currentTheme);

    // Exibe suavemente o conteúdo com a classe 'visible'
    const content = document.querySelector('.content');
    if (content) {
        content.classList.add('visible');
    }

    // Alterna entre os temas ao clicar no botão
    themeToggle.addEventListener('click', () => {
        toggleTheme();
    });

    // Alterna o tema entre claro e escuro
    function toggleTheme() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode', !isDarkMode);

        // Salva o tema no localStorage
        const theme = isDarkMode ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);

        // Atualiza o texto do botão
        updateButtonText(theme);
    }

    // Atualiza o texto do botão com base no tema
    function updateButtonText(theme) {
        themeToggle.innerHTML = theme === 'dark-mode'
            ? '<i class="fas fa-adjust"></i> Modo Claro'
            : '<i class="fas fa-adjust"></i> Modo Escuro';
    }
});
