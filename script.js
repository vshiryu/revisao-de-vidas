// Data do evento Revisão de Vidas
const eventDate = new Date('September 28, 2024 00:00:00').getTime();

// Lista de versículos bíblicos
const verses = [
    "João 3:16 - Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito...",
    "Salmos 23:1 - O Senhor é o meu pastor, nada me faltará.",
    "Romanos 8:28 - Sabemos que Deus age em todas as coisas para o bem daqueles que o amam...",
    "Filipenses 4:13 - Tudo posso naquele que me fortalece.",
    "Mateus 6:33 - Busquem, pois, em primeiro lugar o Reino de Deus...",
    "Provérbios 3:5 - Confie no Senhor de todo o seu coração...",
    "Isaías 40:31 - Mas os que esperam no Senhor renovarão as suas forças...",
    "Jeremias 29:11 - Porque eu sei os planos que tenho para vocês, diz o Senhor...",
    "Josué 1:9 - Não fui eu que lhe ordenei? Seja forte e corajoso!",
    "Efésios 6:10 - Finalmente, fortaleçam-se no Senhor e no seu forte poder.",
    "Salmos 46:1 - Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    "1 Pedro 5:7 - Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
    "Mateus 11:28 - Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.",
    "2 Coríntios 5:7 - Pois vivemos por fé, e não pelo que vemos.",
    "Salmos 119:105 - Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.",
    "Hebreus 11:1 - Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
    "Tiago 1:12 - Feliz é o homem que persevera na provação, porque, depois de aprovado...",
    "Apocalipse 3:20 - Eis que estou à porta e bato. Se alguém ouvir a minha voz e abrir a porta...",
    "Romanos 12:2 - Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente.",
    "Salmos 91:1 - Aquele que habita no abrigo do Altíssimo e descansa à sombra do Todo-poderoso...",
    "1 João 4:18 - No amor não há medo, antes o perfeito amor lança fora todo medo.",
    "Isaías 41:10 - Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus.",
    "Provérbios 16:3 - Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.",
    "Salmos 37:5 - Entregue o seu caminho ao Senhor; confie nele, e ele agirá.",
    "Colossenses 3:23 - Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens.",
    "1 Coríntios 13:13 - Assim, permanecem agora estes três: a fé, a esperança e o amor..."
];

// Função para contagem regressiva
const countdown = () => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById('countdown').classList.add('hidden');
        document.getElementById('finished').classList.remove('hidden');
    }
};

// Função para exibir um versículo aleatório
const showRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    document.getElementById('verse').innerText = verses[randomIndex];
};

// Atualiza a contagem a cada segundo
const interval = setInterval(countdown, 1000);

// Exibe um versículo aleatório
showRandomVerse();
