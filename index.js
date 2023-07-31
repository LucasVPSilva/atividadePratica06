// Exercicio 1 e 2:

/*

const infIdade = Number(prompt('Informe sua idade: '));

if (infIdade > 0 && infIdade < 18) {
    alert('Você ainda não pode dirigir!');
} else if (infIdade >= 18) {
    const habilitacao = prompt('Você possui habilitação? S (para sim) ou N (para não)').toUpperCase();
    if (habilitacao === "S") {
        alert('Você já pode dirigir!')
    } else if (habilitacao === "N") {
        alert('Você não pode dirigir!');
    } else {
        alert('Algo errado não está certo, verifique a informação digitada!');
    }
} else {
    alert('Algo errado não está certo, verifique a informação digitada!');
}

*/

// Exercicio 3:

/*

const diaSemana = Number(prompt('Digite um número de 1 a 7'));

if (diaSemana >= 1 && diaSemana <= 7) {
    if (diaSemana === 1) {
        alert('Domingo!')
    } else if (diaSemana === 2) {
        alert('Segunda-feira!')
    }
    else if (diaSemana === 3) {
        alert('Terça-feira!')
    }
    else if (diaSemana === 4) {
        alert('Quarta-feira!')
    }
    else if (diaSemana === 5) {
        alert('Quinta-feira!')
    }
    else if (diaSemana === 6) {
        alert('Sexta-feira!')
    }
    else if (diaSemana === 7) {
        alert('Sábado!')
    }
} else {
    alert('Algo errado não está certo, verifique o número digitado!');
}

*/

// Exercicio 4

/*

const diaSemana = Number(prompt("Digite um número de 1 a 7"));

switch (diaSemana) {
    case 1:
        alert("Domingo!");
        break;
    case 2:
        alert("Segunda-feira!");
        break;

    case 3:
        alert("Terça-feira!");
        break;

    case 4:
        alert("Quarta-feira!");
        break;

    case 5:
        alert("Quinta-feira!");
        break;

    case 6:
        alert("Sexta-feira!");
        break;

    case 7:
        alert("Sábado!");
        break;

    default:
        alert("Algo errado não está certo, verifique o número digitado!");
        break;
}

*/

// Exercicio 5

/*

let contador;

for (contador = 0; contador <= 10; contador++) {
    if (contador % 2 === 0) {
        console.log(contador)
    }

}

*/

// Exercicio 6

/*

let contador;

for (contador = 0; contador <= 30; contador++) {
    if (contador % 2 != 0) {
        document.write(contador + " ");
    }

}

*/

// Exercicio 7

/*

let numero = 10;
let soma = 0;

do {
    soma += numero;
    numero++;

} while (numero < 100)

// Usei o for para ter referencia na soma:
// for (let index = 1; index <= 2; index++) {
//     soma += index
//     console.log(soma)
// }

console.log('soma: ' + soma)

*/

// Exercicio 8

/*

let salario = Number(prompt('Informe seu salário'));

if (salario > 0 && salario < 1903.98) {
    document.write(`Seu salário ${salario} é isento de IR`);
} else if (salario > 0 && salario > 1903.98) {
    document.write(`Seu salário ${salario} é Tributado no IR`);

} else {
    document.write(`Algo errado não está certo!`);

}
*/


// Exercicio 9



/*

const valor = Number(prompt('Informe um valor para verificar se é número primo'));
if (valor >= 2) {
    let quantidadeDivisores = 0;
    for (let j = valor; j > 1; j--) {
        if (valor % j === 0) {
            quantidadeDivisores++;
        }
    }
    if (quantidadeDivisores <= 1) {
        alert('Numero é primo');
    } else {
        alert('Número não é primo!');
    }
}

*/

// Exercicio 10

/*

const infAltura = Number(prompt('Informe sua altura: ex.:( 1.80 )'));
const infSexo = Number(prompt(`Informe seu Sexo:
Digite 1 - Para sexo Feminino ou 2 - Para sexo Masculino`));

if (infSexo != 1 && infSexo != 2) {
    alert('Informação errada!');
} else if (infSexo == 1) {
    alert(`Seu peso ideal é de: ${((62.1 * infAltura) - 44.7).toFixed(2)} KG`);
} else if (infSexo == 2) {
    alert(`Seu peso ideal é de: ${((72.7 * infAltura) - 58).toFixed(2)} KG`);
}



*/

// Exercicio 11:

/*

const turno = prompt(`Informe o turno que você estuda:
Digite: M - para Matutino
V - para Vespertino
N - para Noturno`).toUpperCase();

switch (turno) {
    case 'M':
        alert('Bom dia!');
        break;
    case 'V':
        alert('Boa tarde!');
        break;
    case 'N':
        alert('Boa noite!');
        break;
    default:
        alert('Algo errado não está certo!');
        break;
}

*/

// Exercicio 12:

/*
let idadeDoador = Number(prompt("Informe sua idade:"));

if (idadeDoador < 18 || idadeDoador >= 67) {
    alert(`Devido a sua idade, você não poderá doar sangue.`);
} else if (idadeDoador >= 18 && idadeDoador < 67) {
    alert(`Você pode doar sangue, gentileza comparecer ao Hemocentro.`);
} else {
    alert(`Informação incorreta, gentileza verificar os dados!`);
}

*/

// Exercicio 13:

/*

let numeroInformado = Number(prompt("Informe um número:"));

for (let index = 1; index <= numeroInformado; index++) {
    if (index % 2 !== 0) {
        console.log(index, "é impar");
    }
}

*/

// Exercicio 14:

/*

let numeroInformado = Number(prompt("Informe um número:"));
let numeroMostrador = 0;
let numeroMultiplicado = 0;

while (numeroInformado <= 500) {
    if (numeroInformado <= 500) {
        numeroMostrador = numeroInformado;
    }
    numeroInformado *= 3;
    console.log(numeroInformado);
    console.log("O ultimo número é:", numeroMostrador);
}

*/


// Exercicio 15:

/*

let ladoA = Number(prompt("Informe o tamanho do lado A do triângulo:"));
let ladoB = Number(prompt("Informe o tamanho do lado B do triângulo:"));
let ladoC = Number(prompt("Informe o tamanho do lado C do triângulo:"));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    console.log(`Isso sim é um triangulo`);
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log(
            `Você informou um Triângulo equilátero, pois todos os lados são iguais`
        );
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        console.log(
            `Você informou um Triângulo escaleno, pois todos os lados são diferentes`
        );
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log(
            `Você informou um Triângulo isósceles, pois possui dois lados iguais`
        );
    }
} else {
    console.log(`Isso não é um triangulo! Informe novamente os tamanhos.`);
}

*/

// Exercicio 16

/*
let anoAtual = Number(prompt(`Informe o ano atual:`));
let anoNascimento = Number(prompt(`Informe o ano do seu nascimento`));

let calcIdade = anoAtual - anoNascimento;

if (calcIdade < 16) {
  console.log(`Você não poderá votar neste ano!`);
} else {
  console.log(`Você poderá votar neste ano!`);
}
*/

// Exercicio 17

/*

let totalEleitores = 100;
let votosBrancos = 10;
let votosNulos = 10;
let votosValidos = 80;

let porcentual = totalEleitores * votosNulos / 100;

if ((votosBrancos + votosValidos + votosNulos) === totalEleitores) {

    console.log(porcentual + "%");
} else {
    console.log('Valores errados!')
}

*/

// Exercicio 18

/*

let qtdParcelas;

const infValor = Number(prompt('Informe o valor da Mercadoria:'));
const infPagamento = Number(prompt(`Informe a forma de pagamento:
1 - À Vista
2 - Parcelado`));
if (infPagamento === 1) {
    alert(`O valor da compra será de ${infValor - (infValor * 2.5 / 100)}`);
} else if (infPagamento === 2) {
    qtdParcelas = Number(prompt(`Informa a quantidade de parcelas: Obs.: O máximo é 15x`))
    if (qtdParcelas >= 2 && qtdParcelas <= 5) {
        alert(`O valor da parcela será de ${qtdParcelas} x de R$ ${infValor / qtdParcelas}`);
    } else if (qtdParcelas > 5 && qtdParcelas <= 10) {
        alert(`O valor da parcela será de ${qtdParcelas} x de R$ ${((infValor + (infValor * 6 / 100)) / qtdParcelas).toFixed(3)}
        Valor total = R$ ${(qtdParcelas * (infValor + (infValor * 6 / 100)) / qtdParcelas).toFixed(3)} `);

    } else if (qtdParcelas > 10 && qtdParcelas <= 15) {
        alert(`O valor da parcela será de ${qtdParcelas} x de R$ ${((infValor + (infValor * 6 / 100)) / qtdParcelas).toFixed(2)}
        Valor total = R$ ${(qtdParcelas * (infValor + (infValor * 13 / 100)) / qtdParcelas).toFixed(2)} `);


    } else {
        alert('Algo errado não está certo!');
    }
} else {
    alert('Algo errado não está certo!')
}

*/