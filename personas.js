document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos HTML que vamos manipular no código
    const themeToggle = document.getElementById('theme-toggle');  // Botão de alternância de tema
    const body = document.body;                                  // Corpo da página
    const header = document.querySelector('header');              // Cabeçalho da página
    const bannerH1 = document.querySelector('.banner h1');        // Título dentro do banner
    const content = document.querySelector('.content');           // Seção de conteúdo principal

    // Recupera o tema armazenado no localStorage ou usa o tema claro como padrão
    const savedTheme = localStorage.getItem('theme') || 'light-mode';  

    // Define o tema inicial com base no tema armazenado no localStorage
    applyTheme(savedTheme);  // Aplica o tema (light ou dark) nos elementos

    // Atualiza o texto e ícone do botão de alternância com base no tema atual
    updateThemeButtonText(savedTheme);

    // Alterna o tema quando o botão de alternância é clicado
    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        applyTheme(newTheme);  // Aplica o novo tema
        localStorage.setItem('theme', newTheme);  // Salva o novo tema no localStorage
        updateThemeButtonText(newTheme);  // Atualiza o botão de alternância
    });

    // Função para aplicar o tema nos elementos
    function applyTheme(theme) {
        // Remove as classes de tema antigas e adiciona a nova classe
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(theme);
        header.classList.remove('light-mode', 'dark-mode');
        header.classList.add(theme);
        bannerH1.classList.remove('light-mode', 'dark-mode');
        bannerH1.classList.add(theme);
        content.classList.remove('light-mode', 'dark-mode');
        content.classList.add(theme);
    }

    // Função para atualizar o texto e o ícone do botão de alternância
    function updateThemeButtonText(theme) {
        themeToggle.innerHTML = theme === 'dark-mode' 
            ? '<i class="fas fa-adjust"></i> Modo Claro' 
            : '<i class="fas fa-adjust"></i> Modo Escuro';
    }

    // Configura o botão de fechar do modal
    const closeButton = document.querySelector('.close');  // Seleciona o botão de fechar do modal
    const modal = document.getElementById('modal');         // Seleciona o modal

    // Adiciona evento de clique para fechar o modal, se o botão de fechar existir
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);  // Fecha o modal quando clicado
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none';  // Oculta o modal
    }

});


// Função para abrir o modal com conteúdo dinâmico baseado no personagem
function openModal(character) {
    const modal = document.getElementById('modal'); // Seleciona o modal
    const modalBody = document.getElementById('modal-body'); // Seleciona a área onde o conteúdo será injetado
    let content = ''; // Inicializa o conteúdo como vazio

    // Gera o conteúdo com base no personagem clicado
    if (character === 'yuji') {
        content = `
            <h2>Yuji Itadori</h2>
            <img src="https://th.bing.com/th/id/OIP.FHUtuSNLX6gU-qAOl8vhmgHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Yuji Itadori">
            <p>Yuji Itadori é um estudante com força sobre-humana, que luta contra maldições para proteger as pessoas.</p>
        `;
    } else if (character === 'megumi') {
        content = `
            <h2>Megumi Fushiguro</h2>
            <img src="https://th.bing.com/th/id/OIP.EyaqUzL4vTmcP_fyFh2dHQHaK9?pid=ImgDet&w=185&h=273&c=7&dpr=1,3" alt="Megumi Fushiguro">
            <p>Megumi Fushiguro é um feiticeiro jujutsu talentoso e é conhecido por seu controle sobre as sombras.</p>
        `;

    } else if (character === 'nobara') {
        content = `
            <h2>Nobara Kugisaki</h2>
            <img src="https://th.bing.com/th/id/OIP.vYM66xXsguUl3D9MqMjXHwHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Nobara Kugisaki">
            <p>Nobara é uma feiticeira confiante, conhecida pelo seu estilo de luta único usando "maldições de voodoo".</p>
        `;
    } else if (character === 'satorou') {
        content = `
            <h2>Satorou Gojo</h2>
            <img src="https://th.bing.com/th/id/OIP.DOiuqKuI7nPecZeqiAFhjwHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Satorou Gojo">
            <p>Satorou Gojo é o feiticeiro mais poderoso do mundo, conhecido por sua habilidade imbatível com o "Infinito".</p>
        `;
    } else if (character === 'sukuna') {
        content = `
            <h2>Sukuna</h2>
            <img src="https://th.bing.com/th/id/OIP.bBlNy5VsNRXmkhHuUmlJmgHaEK?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Sukuna">
            <p>Sukuna é um espírito maldito de imenso poder, também conhecido como o "Rei das Maldições".</p>
        `;
    } else if (character === 'nanami') {
        content = `
            <h2>Kento Nanami</h2>
            <img src="https://th.bing.com/th/id/OIP.iAq2sHgjnb1bD7ABcCDwwgHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Kento Nanami">
            <p>Kento Nanami é um ex-empregado que se tornou um feiticeiro jujutsu, conhecido por seu estilo sério e habilidades excepcionais.</p>
        `;
    } else if (character === 'yaga') {
        content = `
            <h2>Masamichi Yaga</h2>
            <img src="https://th.bing.com/th/id/OIP.gkunppo6a_ExnRcgU5S0KwAAAA?w=154&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Masamichi Yaga">
            <p>Masamichi Yaga é o mestre da escola de Jujutsu, com uma habilidade excepcional em manipular maldições.</p>
        `;
    } else if (character === 'geto') {
        content = `
            <h2>Suguru Geto (Kenjaku)</h2>
            <img src="https://th.bing.com/th/id/OIP.Hfc8WAhwJT2QwLNPuPrGZgHaEk?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Suguru Geto">
            <p>Suguru Geto é um antigo aluno que se tornou um inimigo, sendo possuído por uma maldição, ele tem habilidades poderosas e objetivos sinistros.</p>
        `;
    } else if (character === 'maki') {
        content = `
            <h2>Maki Zenin</h2>
            <img src="https://th.bing.com/th/id/OIP.W8BeqUXKg6GbkUR6Lx2mfgHaHa?w=188&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Maki Zenin">
            <p>Maki Zenin é uma guerreira destemida que luta para se provar em um mundo de feiticeiros, possuindo grande força física.</p>
        `;
    } else if (character === 'inumaki') {
        content = `
            <h2>Toge Inumaki</h2>
            <img src="https://th.bing.com/th/id/OIP.bpYYnpX1vscSI8LCkS68MQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Toge Inumaki">
            <p>Toge Inumaki é um feiticeiro especializado em maldições de palavras, utilizando frases simples para realizar poderosas habilidades.</p>
        `;
    } else if (character === 'panda') {
        content = `
            <h2>Panda</h2>
            <img src="https://th.bing.com/th/id/OIP._JXJ1uOVHII5iP-2V4ABrAHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Panda">
            <p>Panda é um dos alunos mais incomuns, sendo um "maldição" criada por um feiticeiro, mas com uma personalidade distinta.</p>
        `;
    } else if (character === 'yuta') {
        content = `
            <h2>Yuta Okkotsu</h2>
            <img src="https://th.bing.com/th/id/OIP.VUdOvy04vlsatSQoDmz8JgHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Yuta Okkotsu">
            <p>Yuta Okkotsu é um aluno excepcional, sendo possuidor de uma grande força, com uma maldição poderosa.</p>
        `;
    } else if (character === 'yoshinobu') {
        content = `
            <h2>Yoshinobu Gakuganji</h2>
            <img src="https://th.bing.com/th/id/OIP.RWkWAdfsDlo0HvasSNv5bQHaEH?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Yoshinobu Gakuganji">
            <p>Yoshinobu Gakuganji é um feiticeiro jujutsu que faz parte do clã Gakuganji, com uma visão rígida sobre as tradições da magia.</p>
        `;
    } else if (character === 'utahime') {
        content = `
            <h2>Utahime Iori</h2>
            <img src="https://th.bing.com/th/id/OIP.zEbZCkAkmGmTS5VOZC92mQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Utahime Iori">
            <p>Utahime Iori é uma feiticeira experiente que tem grande habilidade com técnicas de manipulação de maldições.</p>
        `;
    } else if (character === 'shoko') {
        content = `
            <h2>Shoko Ieiri</h2>
            <img src="https://th.bing.com/th/id/OIP.WJ8zvFWvM-sl1YkzmHWQEgAAAA?w=140&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Shoko Ieiri">
            <p>Shoko Ieiri é uma feiticeira médica que trabalha no tratamento de maldições, sendo uma das mais habilidosas no campo.</p>
        `;
    } else if (character === 'mei') {
        content = `
            <h2>Mei Mei</h2>
            <img src="https://th.bing.com/th/id/OIP.D2S802Ws2CtbgdZrfmVWWgHaEK?w=182&h=102&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Mei Mei">
            <p>Mei Mei é uma feiticeira de alto nível, famosa por sua habilidade em manipular maldições e seu comportamento calculista.</p>
        `;
    } else if (character === 'mai') {
        content = `
            <h2>Mai Zenin</h2>
            <img src="https://th.bing.com/th/id/OIP.9ybeD8usMlI_6Y9YHBQzTgHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Mai Zenin">
            <p>Mai Zenin é uma feiticeira do clã Zenin que tem um poder mais modesto comparado ao de sua irmã, Maki Zenin.</p>
        `;
    } else if (character === 'todo') {
        content = `
            <h2>Aoi Todo</h2>
            <img src="https://th.bing.com/th/id/OIP.F1EQpVoYjbZLCE_eQu19UgHaEK?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Aoi Todo">
            <p>Aoi Todo é um estudante com grande poder físico e habilidades excepcionais no combate corpo a corpo.</p>
        `;
    }else if (character === 'miwa') {
            content = `
                <h2>Kasumi Miwa</h2>
                <img src="https://th.bing.com/th/id/OIP.apaxx6QFyLRJmEVsKG6MLwHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Kasumi Miwa">
                <p>Kasumi Miwa é uma estudante jujutsu que é conhecida por ser determinada e, apesar de suas limitações, lutar com bravura.</p>
            `;
        } else if (character === 'momo') {
            content = `
                <h2>Momo Nishimiya</h2>
                <img src="https://th.bing.com/th/id/OIP.loaKHUVjsdUWuTAefQtY1gHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Momo Nishimiya">
                <p>Momo Nishimiya é uma feiticeira jujutsu conhecida por suas habilidades rápidas e seu espírito competitivo no campo de batalha.</p>
            `;
        } else if (character === 'kamo') {
            content = `
                <h2>Noritoshi Kamo</h2>
                <img src="https://th.bing.com/th/id/OIP.NhpbWMPk_NUWa_RKA5e3owHaKW?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Noritoshi Kamo">
                <p>Noritoshi Kamo é um dos membros do clã Kamo, com um controle excepcional sobre maldições de sangue, e um dos feiticeiros mais habilidosos.</p>
            `;
        } else if (character === 'tengen') {
            content = `
                <h2>Tengen</h2>
                <img src="https://th.bing.com/th/id/OIP.uxr0VqK-l9GRO8lAgJpW-AHaFn?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Tengen">
                <p>Tengen é uma entidade misteriosa que desempenha um papel crucial no equilíbrio entre o mundo das maldições e o dos feiticeiros, possuindo habilidades imortais.</p>
            `;
        } else if (character === 'yuki') {
            content = `
                <h2>Yuki Tsukumo</h2>
                <img src="https://th.bing.com/th/id/OIP.YnW7WwOQXo9VoFXm4txwYgHaDt?w=332&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Yuki Tsukumo">
                <p>Yuki Tsukumo é uma feiticeira de alto nível, com habilidades poderosas, sendo uma das mais respeitadas dentro do mundo jujutsu.</p>
            `;
        } else if (character === 'toji') {
            content = `
                <h2>Toji Fushiguro</h2>
                <img src="https://th.bing.com/th/id/OIP.lzH_FjcQHP2rMFt-__xicwHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Toji Fushiguro">
                <p>Toji Fushiguro é um assassino de feiticeiros altamente habilidoso, conhecido por sua habilidade de anular maldições e sua força física extraordinária.</p>
            `;
        } else if (character === 'mahito') {
            content = `
                <h2>Mahito</h2>
                <img src="https://th.bing.com/th/id/OIP.mHD3qRX6VS0-Vv7f3hI0cQHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Mahito">
                <p>Mahito é um espírito amaldiçoado que possui o poder de manipular as almas das pessoas e transformá-las conforme sua vontade.</p>
            `;
        } else if (character === 'hanami') {
            content = `
                <h2>Hanami</h2>
                <img src="https://th.bing.com/th/id/OIP.aqiZo8q1j99b8S5X1mGkAwHaEK?w=320&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Hanami">
                <p>Hanami é uma entidade de maldição com uma profunda conexão com a natureza, sendo uma das criaturas mais poderosas e misteriosas do mundo das maldições.</p>
            `;
        } else if (character === 'jogo') {
            content = `
                <h2>Jogo</h2>
                <img src="https://th.bing.com/th/id/OIP.j36xH17O7ORkDRkbSLrxpAHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Jogo">
                <p>Jogo é um espírito amaldiçoado com grande poder, que pode manipular o calor e criar formas devastadoras de destruição.</p>
            `;
        } else if (character === 'choso') {
            content = `
                <h2>Choso</h2>
                <img src="https://th.bing.com/th/id/OIP.VAY_UpWjsEtXnBGP2QdLwAAAAA?w=249&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Choso">
                <p>Choso é um dos seguidores de Mahito, com habilidades relacionadas ao controle de sangue, além de um laço sanguíneo com a família Fushiguro.</p>
            `;
        }

    // Insere o conteúdo gerado no corpo do modal
    modalBody.innerHTML = content;

    // Exibe o modal definindo seu estilo como 'flex'
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    // Esconde o modal definindo seu estilo como 'none'
    document.getElementById('modal').style.display = 'none';
}