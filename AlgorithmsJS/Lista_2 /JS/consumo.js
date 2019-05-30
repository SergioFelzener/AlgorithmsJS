///1. Faça um algoritmo que receba um número e mostre uma mensagem caso este 
//   número seja maior que 10..   


function exe01() {
    var numero = parseFloat(prompt("digite um número: "));
    if (numero == 10) {
        window.alert(" Número igual a 10 !");
    }
    else{
        if (numero > 10){
            alert("numero maior que 10");
        }

        else {
            window.alert("Número menor que 10");
        }
    }
}

//2. Escrever um algoritmo que leia dois valores inteiro distintos 
//e informe qual deles é o maior.

function exe02() {
    var n1 = parseInt (prompt("digite  número 1: "));
    var n2 = parseInt (prompt("digite  número 2: " ));

    if (n1 > n2){
        document.write(" Número maior : " + n1);
    }
    else {
        document.write(" Número maior : " + n2);
    }
}

//3. Altere o exercício anterior de forma que ele informe também 
//   se os números são iguais:

function exe03() {
    var n1 = parseInt (prompt("digite  número 1: "));
    var n2 = parseInt (prompt("digite  número 2: " ));

    if (n1 == n2){
        document.write(" Números são iguais : " + n1 + " = " + n2);
    }
    else{
        if(n1 > n2) {
            document.write("Número maior : " + n1)
        }
        else {
            document.write("Número maior : " + n2)
        }
    }
   

}
//4. Solicite que o usuário digite um número. Informe 
//   então se este número é par ou ímpar.


function exe04() {
    var numero = parseFloat(prompt("digite um número: "));
    if (numero % 2 == 0){
        document.write("numero é par!");
    }
    else {
        document.write("numero é impar!");

    }
    

}

// 5. Crie um programa que recebe um número inteiro 
//     e informa se este número é múltiplo de 10.

function exe05() {
    var numero = parseFloat(prompt("digite um número: "));
    if (numero % 10 == 0){
        document.write("numero é multiplo de 10!");
    }
    else {
        document.write("numero não é multiplo de 10 !");

    }
    
}

