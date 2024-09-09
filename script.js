const eventDate = new Date('September 28, 2024 00:00:00').getTime();

const verses = [
    "João 3:16 - Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    "Salmos 23:1 - O Senhor é o meu pastor, nada me faltará.",
    "Romanos 8:28 - Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados segundo o seu propósito.",
    "Filipenses 4:13 - Tudo posso naquele que me fortalece.",
    "Mateus 6:33 - Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.",
    "Provérbios 3:5 - Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.",
    "Isaías 40:31 - Mas os que esperam no Senhor renovarão as suas forças. Voarão alto como águias; correrão e não ficarão exaustos, andarão e não se cansarão.",
    "Jeremias 29:11 - Porque eu sei os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes esperança e um futuro.",
    "Josué 1:9 - Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    "Efésios 6:10 - Finalmente, fortaleçam-se no Senhor e no seu forte poder.",
    "Salmos 46:1 - Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    "1 Pedro 5:7 - Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
    "Mateus 11:28 - Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.",
    "2 Coríntios 5:7 - Pois vivemos por fé, e não pelo que vemos.",
    "Salmos 119:105 - Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.",
    "Hebreus 11:1 - Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
    "Tiago 1:12 - Feliz é o homem que persevera na provação, porque, depois de aprovado, receberá a coroa da vida que Deus prometeu aos que o amam.",
    "Apocalipse 3:20 - Eis que estou à porta e bato. Se alguém ouvir a minha voz e abrir a porta, entrarei e cearei com ele, e ele comigo.",
    "Romanos 12:2 - Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.",
    "Salmos 91:1 - Aquele que habita no abrigo do Altíssimo e descansa à sombra do Todo-poderoso pode dizer ao Senhor: Tu és o meu refúgio e a minha fortaleza, o meu Deus, em quem confio.",
    "1 João 4:18 - No amor não há medo, antes o perfeito amor lança fora todo medo, porque o medo supõe castigo. Aquele que tem medo não está aperfeiçoado no amor.",
    "Isaías 41:10 - Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
    "Provérbios 16:3 - Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.",
    "Salmos 37:5 - Entregue o seu caminho ao Senhor; confie nele, e ele agirá.",
    "Colossenses 3:23 - Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens.",
    "1 Coríntios 13:13 - Assim, permanecem agora estes três: a fé, a esperança e o amor. O maior deles, porém, é o amor."
];

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

const showRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    document.getElementById('verse').innerText = verses[randomIndex];
};

const interval = setInterval(countdown, 1000);

showRandomVerse();
