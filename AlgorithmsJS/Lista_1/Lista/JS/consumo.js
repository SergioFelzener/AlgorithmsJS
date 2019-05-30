//1.  Escreva um algoritmo para calcular o consumo médio de 
//um automóvel (medido em km/l), dado que são conhecidos a 
//distância total percorrida e o volume de combustível consumido 
//para percorrê-la (medido em litros).   


function exe01() {
    var km = parseFloat(prompt("Quantos quilometros o carro percorreu ? : "));
    var litros = parseFloat(prompt("Quantos litros foi consumido? : "));
    var consumo = (km / litros);
    document.write("o consumo foi de : " + consumo + " KM / por litro de combustível");

}

//2. Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. 
//Crie um programa que pergunta quantos homens e quantas mulheres participaram da 
//festa e calcula o valor total arrecadado com as entradas.

function exe02() {
    var homem = 20;
    var mulher = 17;
    var numeroHomens = parseInt(prompt("Quantos homens no evento ?"));
    var numeroMulheres = parseInt(prompt("Quantos mulheres no evento ?"));
    var totalHomem = (numeroHomens * homem);
    var totalMulher = (numeroMulheres * mulher);
    var totalGeral = (totalHomem + totalMulher);
    document.write("O total arrecadado no evento foi : R$" + totalGeral + ",00 ");

}

//3. Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. 
//O programa deve perguntar as notas da primeira e da segunda prova, calcular a média 
//aritmética entre elas, e exibir na tela.

function exe03() {
    var notap1 = parseFloat(prompt("Qual sua nota na Prova 1 ? "));
    var notap2 = parseFloat(prompt("Qual sua nota na Prova 2 ? "));
    var total = (notap1 + notap2);
    var media = (total / 2);
    document.write("Sua média foi : " + media);

}
//4. Fazer  um  algoritmo  para  ler  os  valores  dos  coeficientes  
//   A,  B  e  C  de  uma  equação quadrática. Calcular e imprimir o valor
//   do discriminante (delta).     Delta = B²– 4AC.


function exe04() {
    var ca = parseFloat(prompt("Digite coeficiente A: "));
    var cb = parseFloat(prompt("Digite coeficiente B: "));
    var cc = parseFloat(prompt("Digite coeficiente C: "));
    var delta = (cb ** 2 - 4 * ca * cc);
    document.write(" Delta : " + delta);

}

// 5.  Escreva um programa que solicita o nome de 3 alimentos 
//  e então exibe o nome dos 3 separados por virgulas. 
// Ex: maçã, pera, arroz.

function exe05() {
    var a1 = prompt ("Digite o alimento:");
    var a2 = prompt ("Digite o alimento:");
    var a3 = prompt ("Digite o alimento:");
    document.write( a1 + "," + a2 + "," + a3 );
}

