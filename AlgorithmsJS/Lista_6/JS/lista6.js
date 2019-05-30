//1 - Solicite um número e então diga se este é um número perfeito. 


function exe01() {
    var num = parseInt(prompt("digite um numero"));
    var cont = num;
    var result = 0;

    while (cont >= 1) {

        cont--;
        if (num % cont == 0) {

            result = result + cont;
        }
    }
    if (result == num) {
        document.write("é perfeito");
    } else {
        document.write("nao e");
    }
}



//2a - (já pode ter sido feito anteriormente) Adivinhe o número - 
//     Crie um programa que solicita um número ao usuário entre 1 e 10,
//    sorteia um outro número dentro desta faixa de valores, e então 
//    diz se os dois números são iguais. 


function exe02() {
    var num = parseInt(prompt("digite o numero de 1 a 10:"));
    var sorteio = Math.floor(Math.random() * 10);
    if (num == sorteio) {
        document.write("voce ganhou, numero sorteado foi: " + sorteio);
    } else {
        document.write("Errou numero sorteado foi : " + sorteio);
    }

}


//2b - Faça um aprimoramente do programa anterior. Desta vez, seu 
//     programa deverá dar dicas, dizendo se o numero sorteado é maior ou 
//     menor, e permitir um novo palpite do usuário, ATÉ ELE ACERTAR. Mostrar 
//     quantas tentativas foram efetuadas (ele não irá sortear o número 
//     novamente). FALTA FALAR QUANTAS TENTATIVAS ??????

function exe03() {
    
    var sorteio = Math.floor(Math.random() * 10) +1;
    var tentativas = 1;
    var num = parseInt(prompt("digite o numero de 1 a 10:"));
    while (num != sorteio){
        if (num > sorteio){
            alert("numero menor");
        }
        else {
            alert("numero maior");
        }

        var num = parseInt(prompt("digite o numero de 1 a 10:"));
        // incrementa tentativas +1 que começa em 1 pois se acertar na 1 ja foi 1 tentativa =)
        tentativas ++

    }
    document.write("ACERTOU NUMERO SORTEADO FOI : " + sorteio +  " numero de tentativas : " + tentativas);
   

}
//4 - Escreva um programa que exibe a soma dos números de 1 a 100

function exe04() {
    var cont = 1;
    var soma = 0;

    while (cont <= 100) {
        // é o mesmo que : soma = cont + soma 
        (soma += cont);
        cont++;
    }
    document.write(soma);
}

//5 - Escreva um programa que solicita 10 números 
//    e ao final exibe a soma de todos eles.

function exe05() {
    var cont = 0;
    var num = 0;
    var soma = 0;

    while (cont <= 9) {
        var num = parseInt(prompt("Digite o numero a somar"));
        soma = num + soma;
        cont++;

    }
    document.write(soma);


}

