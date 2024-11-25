// Função que será executada quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Elemento que irá alternar entre os temas
    const themeToggle = document.getElementById('theme-toggle');

    // Obtém o tema atual do localStorage ou define 'light-mode' como padrão
    const currentTheme = localStorage.getItem('theme') || 'light-mode';

    // Aplica o tema inicial no body
    document.body.classList.add(currentTheme);

    // Define o texto inicial do botão com base no tema atual
    updateThemeButtonText(currentTheme);

    // Função para alternar o tema quando o botão for clicado
    themeToggle.addEventListener('click', () => {
        // Alterna entre os temas claro e escuro
        const newTheme = toggleTheme();

        // Salva a preferência de tema no localStorage
        localStorage.setItem('theme', newTheme);

        // Atualiza o texto do botão conforme o tema
        updateThemeButtonText(newTheme);
    });

    // Função para alternar entre os temas claro e escuro
    function toggleTheme() {
        // Alterna entre as classes 'dark-mode' e 'light-mode'
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        // Retorna o tema atual após a alternância
        return document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    }

    // Função para atualizar o texto do botão de acordo com o tema
    function updateThemeButtonText(theme) {
        if (theme === 'dark-mode') {
            themeToggle.innerHTML = '<i class="fas fa-adjust"></i> Modo Claro';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-adjust"></i> Modo Escuro';
        }
    }
});

// Função para prevenir o envio do formulário e mostrar uma mensagem de sucesso
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário

    // Exibe uma mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    
    // Reseta os campos do formulário
    this.reset();
});
