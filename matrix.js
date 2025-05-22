// Configuração do efeito Matrix
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    // Configurando o canvas para ocupar toda a tela
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Caracteres que serão exibidos na chuva
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    const lettersArray = letters.split('');

    // Configuração das colunas
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Configuração das gotas (uma por coluna)
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // Começa em posições aleatórias acima da tela
    }

    // Função de desenho
    function draw() {
        // Fundo semi-transparente para criar o efeito de rastro
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Cor do texto (verde matrix)
        ctx.fillStyle = '#f5f5f5';
        ctx.font = fontSize + 'px monospace';

        // Desenha os caracteres em cada coluna
        for (let i = 0; i < drops.length; i++) {
            const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reinicia a gota no topo quando chegar no final
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Move a gota para baixo
            drops[i]++;
        }
    }

    // Redimensiona o canvas quando a janela é redimensionada
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Inicia a animação
    setInterval(draw, 33);
});