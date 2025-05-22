// Definindo as vogais (não mudam) e consoantes
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
const consonants = 'bcdfghjklmnpqrstvwxyz';

// Função para decifrar uma única letra
function decipherLetter(letter) {
    // Se não for uma letra ou for vogal, retorna a mesma letra
    if (!letter.match(/[a-z]/i) || vowels.has(letter)) {
        return letter;
    }
    
    // Encontra o índice da consoante atual
    const currentIndex = consonants.indexOf(letter);
    
    // Se não for consoante (não deveria acontecer), retorna a mesma letra
    if (currentIndex === -1) {
        return letter;
    }
    
    // Calcula o próximo índice (com wraparound)
    const nextIndex = (currentIndex + 1) % consonants.length;
    
    // Retorna a próxima consoante
    return consonants[nextIndex];
}

// Função para decifrar toda a mensagem
function decipherMessage(message) {
    return message
        .toLowerCase()
        .split('')
        .map(decipherLetter)
        .join('');
}

// Função para limpar o campo de resultado
function clearResult() {
    document.getElementById('result').textContent = '';
}

// Função principal que é chamada quando o botão DECIFRAR é clicado
function handleDecipher() {
    const inputMessage = document.getElementById('message').value;
    const decipheredMessage = decipherMessage(inputMessage);
    document.getElementById('result').textContent = decipheredMessage;
}

// Configuração dos event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Botão DECIFRAR
    document.getElementById('decipher').addEventListener('click', handleDecipher);
    
    // Botão RETORNAR
    document.getElementById('return').addEventListener('click', function() {
        document.getElementById('message').value = '';
        clearResult();
    });
    
    // Permite usar Enter para decifrar
    document.getElementById('message').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleDecipher();
        }
    });
});