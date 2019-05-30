//1 - Escreva um programa que exibe qualquer tabuada completa. 
//O programa deve perguntar ao usuário qual tabuada ele deseja 
//visualizar, que irá responder digitando um número de 1 a 10.


function exe01() {
    var tabuada = parseInt(prompt("Qual tabuada gostaria de cacular solicite de 1 a 10:"));
    // criando a variavel de conta que começa em 1 pois nao precisa multiplicar por zero var cont de contador
    var cont = 1
    while (cont <= 10) {
        document.write("Tabuada do " + tabuada + " x " + cont + " = " + cont * tabuada + "<br>");
        cont++;

    }

}



//2 - Escreva um programa que exibe o quadrado de todos os números de 1 a 20.


function exe02() {
    // criando a variavel de conta que começa em 1 pois nao precisa multiplicar por zero var cont de contador
    var cont = 1
    while (cont <= 20) {
        document.write("Quadrado de " + cont + " = " + cont ** 2 + "<br>");
        cont++;

    }


}


//3 - Escreva um programa que solicita 5 números ao usuário, e para cada número digitado, 
//     informa se este é par ou ímpar.

function exe03() {
    var cont = 1;
    while (cont <= 5) {
        var numero = parseInt(prompt("digite seu numero : "));
        if (numero % 2 == 0) {
            alert("numero par");
        } else {
            alert("Numero impar")
        }
        cont++;
    }


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
//  6 - Escreva um programa que solicita um número ao usuário, e então exibe todos os seus divisores.
//Ex: Se informado 12, deve exibir:
//12
//6
//4
//3
//2
//1
function exe06() {
    var num = parseInt(prompt("digite um numero"));

    for (var cont = num; cont >= 0; cont--) {
        if (num % cont == 0) {
            document.write(cont + "<br>");
        }


    }

}


// 7 - Solicite que o usuário digite uma palavra de 6 caracteres.
//     Se for digitada uma palavra inválida, peça novamente, até 
//     que ele digite uma palavra correta.
function exe07() {
    do {
        var palavra = prompt("digite uma palavra de 6 caracteres:");
    }
    while (palavra.length != 6) {
        if (palavra.length != 6)
            alert("palavra incorreta");
        else {
            window.alert("Correto");
        }
    }




}



