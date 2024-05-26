const readline = require('readline');

// Configurar a interface de leitura de entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fun��o para encontrar a carteira
function encontrarCarteira(numero) {
    const um = BigInt(1)
    let minimo, maximo;

    minimo = Math.pow(2, numero).toString(16);
    maximo = (BigInt(Math.pow(2, numero + 1)) - um).toString(16);

    return { minimo, maximo };
}

// Fun��o para gerar um valor aleat�rio entre m�nimo e m�ximo
function gerarValorAleatorio(minimo, maximo) {
    const minimoDecimal = parseInt(minimo, 16);
    const maximoDecimal = parseInt(maximo, 16);
    const valorAleatorioDecimal = Math.floor(Math.random() * (maximoDecimal - minimoDecimal + 1)) + minimoDecimal;
    return valorAleatorioDecimal.toString(16);
}

// Perguntar ao usu�rio qual carteira ele gostaria de encontrar
rl.question('Por favor, escolha um n�mero entre 1 e 160: ', (input) => {
    const numero = parseInt(input, 10);

    if (isNaN(numero) || numero < 1 || numero > 160) {
        console.log('N�mero inv�lido. Por favor, escolha um n�mero entre 1 e 160.');
    } else {
        const resultado = encontrarCarteira(numero);
        const valorAleatorio = gerarValorAleatorio(resultado.minimo, resultado.maximo);
        console.log(`minimo: ${resultado.minimo}, maximo: ${resultado.maximo}, random: ${valorAleatorio}`);
    }

    rl.close();
});
