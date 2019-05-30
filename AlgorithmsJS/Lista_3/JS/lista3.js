///1 - Escreva um programa que solicita um número inteiro. 
//  Exiba uma mensagem de erro se o número informado estiver 
//  entre 15 e 25 ou entre 45 e 50 (inclusive).  


function exe01() {
    var numero = parseInt(prompt("digite um numero "));
    if ((numero >= 15 && numero <= 25) || (numero >= 45 && numero <= 50)) {
        document.write("numero em area de risco");
    }
    else {
        document.write("numero OK");
    }

}

//2 - Faça um algoritmo que receba um número e mostre uma mensagem 
//    caso este número seja maior que 80, menor  que 25 ou igual a 40.


function exe02() {
    var numero = parseInt(prompt("digite um numero "));
    if (numero == 40 || numero < 25 || numero > 80) {
        document.write("numero OK");
    }
    else {
        document.write("ERRO");
    }
}


//3 - Escrever um algoritmo que leia três valores inteiros e verifique 
//    se eles podem ser as medidas dos lados de um triângulo.

function exe03() {
    var a = parseFloat(prompt("Digite Valor A: "));
    var b = parseFloat(prompt("Digite Valor B: "));
    var c = parseFloat(prompt("Digite Valor C: "));

    if (a + b > c && a + c > b && b + c > a) {
        document.write("Pode se formar um triangulo")
    }
    else {
        document.write("Não pode ser um triangulo")
    }

}
//4 - Incremente o exercício anterior, para o caso das medidas 
//  formarem um triângulo válido , informar qual o tipo de triângulo 
//  que eles formam: equilátero, isósceles ou escaleno.

function exe04() {
    var a = parseInt(prompt("Lado A"));
    var b = parseInt(prompt("Lado B"));
    var c = parseInt(prompt("Lado C"));

    if ((a + b > c && (a + c > b) && b + c > a)) {
        if (a == b && b == c) {
            document.write("Equilatero");
        }
        else
            if (a == b || b == c || c == a) {
                document.write("isoceles");
            }
            else {
                document.write("escaleno");
            }

    }
    else {
        document.write("nao e trianguulo");

    }
}

// 5 -  Incremente o exercício anterior, agora 
//      informando se este é também um triângulo retângulo.

function exe05() {
    var a = parseInt(prompt("Lado A"));
    var b = parseInt(prompt("Lado B"));
    var c = parseInt(prompt("Lado C"));

    if ((a + b > c && (a + c > b) && b + c > a)) {
        if (a == b && b == c) {
            document.write("Equilatero");
        }
        else
            if (a == b || b == c || c == a) {
                document.write("isoceles");
            }
            else {
                document.write("escaleno");
            }


        if (a ** 2 + b ** 2 == c ** 2 || c ** 2 + b ** 2 == a ** 2 || c ** 2 + a ** 2 == b ** 2) {
            document.write("triangulo retandgulo");
        }
    }
    else {
        document.write("nao e trianguulo");

    }

}

//   6 - Crie um programa que pergunte o nome do usuário. Exiba uma mensagem 
//       diferenciada caso o nome digitado seja "Cicero", "Prático" ou "Heitor".



function exe06() {
    var nome = prompt("qual seu nome?");

    if (nome == "pratico")
        document.write("nome feio");
    if (nome == "heitor")
        document.write("legal");
    if (nome == "cicero")
        document.write("bonito");

}