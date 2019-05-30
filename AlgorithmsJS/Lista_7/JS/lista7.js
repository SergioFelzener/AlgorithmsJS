//2 - Crie um programa que recebe 5 números inteiros e exiba o menor. 

function exe01() {
    var numero = parseInt(prompt("digite um numero"));
    for (var cont = 1; cont <= 4; cont++) {
        n = parseInt(prompt("digite um numero"));
        if (n < numero)
            numero = n;
    }
    document.write("o menor é:" + numero);

}


// 3 - Crie um programa que recebe números inteiros até 
//     que o usuário digite 0 e então exiba o maior e o menor.



function exe02() {
    var n = parseInt(prompt("digite um numero:"));
    var maior = n;
    var menor = n;
    do {
        n = parseInt(prompt("digite um numero:"));
        if (n > maior)
            maior = n;
        if (n < menor && n != 0)
            menor = n;
    }
    while (n != 0)

    document.write("o número menor e: " + menor + "<br>" + " e o número maior é:" + maior);


}


//4 - Escreva um programa que sorteia 10 números 
//    pares entre 1 e 100 e exibe na tela. (como garantir 
//    que o sorteio exiba apenas números pares?)

function exe03() {

    var tentativas = 1;
    do {
       var numero = Math.floor(Math.random()*100)+1;
       if(numero % 2 == 0){
           document.write(numero + "<br>");
           tentativas ++;

       }
    } while (tentativas <=10)

}
//5 - Dado um número digitado pelo usuário, exiba o fatorial deste número.

function exe04() {
    var numero = parseInt(prompt("Digite um número"));
    var fatorial = numero;

    for (var cont = numero - 1; cont >= 1; cont--) {
        fatorial = fatorial * cont;
      
    }
    document.write(numero + " seu fatorial é: " + fatorial)
   

}

//6 - Mini-megasena

function exe05() {
    var cont=0;
    var p1 = parseInt(prompt("digite o palpite 1"));
    var p2 = parseInt(prompt("digite o palpite 2"));
    var p3 = parseInt(prompt("digite o palpite 2"));
    var num1 = Math.floor (Math.random() * 60) +1 ;
    var num2 = Math.floor (Math.random() * 60) +1 ;
    var num3 = Math.floor (Math.random() * 60) +1 ;
    
    while (num1!=p1 || num2!=p2 || num3!=p3){
      if (num1!=p1) {
        num1 = Math.floor (Math.random() * 60) +1 ;
      }
       if (num2!=p2) {
        num2 = Math.floor (Math.random() * 60) +1 ;
      }
      if (num3!=p3) {
        num3 = Math.floor (Math.random() * 60) +1 ;
      }
      cont++
      console.log(num1 + " " + num2 + " " + num3)
    
    }
    document.write("Foram necessarias : " + cont + " Tentativas para acertar os 3 numeros");



}

