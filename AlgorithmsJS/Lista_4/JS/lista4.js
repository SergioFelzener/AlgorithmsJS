//1a- Escreva um programa que sorteia um número de 1 a 10 
//    e dá duas chances para que o usuário acerte.


function exe01() {
    var num = Math.floor(Math.random() * 10) + 1;
    var palpite_1 = parseInt(prompt("Digite o palpite 1 :"));
    var palpite_2 = parseInt(prompt("Digite o palpite 2 :"));

    if (palpite_1 == num || palpite_2 == num) {
        document.write("Voce acertou" + "<br>" + "o numero sorteado foi : " + num);
    } else {
        document.write("errou " + num);
    }
}



//1b - Escreva um programa que sorteia um número de 1 a 10,
//dá duas chances para que o usuário acerte, mas informa se 
//o número sorteado é maior ou menor que o primeiro palpite.


function exe02() {
    //sorteio de numero random entre 10 numeros 
    var num = Math.floor(Math.random() * 10) + 1; //soma se 1  sorteio ate *10 (0-9) + 1 = (1-10) humero sorteado + 1
    // palpite 1
    var p1 = parseInt(prompt("Palpite 1"));
    // variavel acerto finaliza a condicao se for verdadeira 
    var acertou = false
    // para palpite 1 = a numero sorteado 
    if (p1 == num) {
        alert("ganhou numero sorteado foi :" + num);
        // acerto e verdadeiro altera var acertou para veradeiro consecultivamente nao ira rodar as proximas condicoes 
        // pois estarao condicionadas ao proximo if 
        acertou = true;
    }
    // se nao for verdadeiro informe 
    else {
        // caso numero seja maior que o palpite informe 
        if (num > p1) {
            alert("numero sorteado é maior que o palpite 1");
        }
        // se nao informe 
        else {
            alert("numero menor que o primeiro palpite ");
        }
    }
    // se o acerto continuar false continua 
    if (acertou == false) {
        // segundo palpite 
        var p2 = parseInt(prompt("Palpite 2"));
        // se palpite 2 for igual a palpite 1 informe 
        if (p2 == num) {
            alert("ganhou numero sorteado foi :" + num);
            // acerto e verdadeiro altera var acertou para veradeiro consecultivamente nao ira rodar as proximas condicoes 
            // pois estarao condicionadas ao proximo if 
            acertou = true;
    
        }
        // se nao    
        else {
            alert("ERROU numero sorteado foi : " + num)
        }
    }

}


//1c - Faça o mesmo programa anterior, agora com 3 palpites.

function exe03() {
    //sorteio de numero random entre 10 numeros 
    var num = Math.floor(Math.random() * 10) + 1; //soma se 1  sorteio ate *10 (0-9) + 1 = (1-10) humero sorteado + 1
    // palpite 1
    var p1 = parseInt(prompt("Palpite 1"));
    // variavel acerto finaliza a condicao se for verdadeira 
    var acertou = false
    // para palpite 1 = a numero sorteado 
    if (p1 == num) {
        alert("ganhou numero sorteado foi :" + num);
        // acerto e verdadeiro altera var acertou para veradeiro consecultivamente nao ira rodar as proximas condicoes 
        // pois estarao condicionadas ao proximo if 
        acertou = true;
    }
    // se nao for verdadeiro informe 
    else {
        // caso numero seja maior que o palpite informe 
        if (num > p1) {
            alert("numero sorteado é maior que o palpite 1");
        }
        // se nao informe 
        else {
            alert("numero menor que o primeiro palpite ");
        }
    }
    // se o acerto continuar false continua 
    if (acertou == false) {
        // segundo palpite 
        var p2 = parseInt(prompt("Palpite 2"));
        // se palpite 2 for igual a palpite 1 informe 
        if (p2 == num) {
            alert("ganhou numero sorteado foi :" + num);
            // acerto e verdadeiro altera var acertou para veradeiro consecultivamente nao ira rodar as proximas condicoes 
            // pois estarao condicionadas ao proximo if 
            acertou = true;
        }
        // se nao    
        else {
            // caso numero seja maior que palpite 2 informe 
            if (num > p2) {
                alert("numero sorteado é maior que o palpite 2");
            }
            // se nao for informe 
            else {
                alert("numero menor que o segundo palpite ");
            }
        }
    }
    // repetindo a condicao acima e finalizando 
    // se o acertou continuar false leia palpite 3 
    if (acertou == false) {

        var p3 = parseInt(prompt("Palpite 3"));

        if (p3 == num) {
            alert("ganhou numero sorteado foi :" + num);
        } else {
            alert("errou numero sorteado foi : " + num);
        }
    }

}
//2 - Sorteie dois números de 1 a 5 e peça que o usuário acerte os dois 
//    números de uma vez, não necessariamente na mesma ordem.

function exe04() {
    var num = Math.floor(Math.random() * 5) + 1;
    var num1 = Math.floor(Math.random() * 5) + 1;
    var p1 = parseInt(prompt("Palpite 1"));
    var p2 = parseInt(prompt("Palpite 2"));

    if ((p1 == num || p1 == num1) && (p2 == num1 || p2 == num))
        alert("ganhou numeros sorteados foi :" + num + " " + num1);

    else {
        alert("perdeu !!! numeros sorteados " + num + " " + num1);
    }
}

// 3 -Par ou impar

function exe05() {
    var p1 = prompt("Par ou Impar?");
    var n1 = parseInt(prompt("digite seu numero:"));
    var n2 = Math.floor(Math.random() * 50);
    p1 = p1.toLowerCase();

    var soma = (n1 + n2);
    var resultado = (soma % 2);

    if ((p1 == "par" && resultado == 0) || (p1 == "impar" && resultado == 1)) {
        document.write("ganhou meu numero foi " + n2 + " total " + soma);
    } else {
        document.write("perdeu meu numero foi " + n2 + " total " + soma);

    }


}

//   65 -  Crie um programa que solicita que o usuário digite uma palavra que começa com a letra A.
//         O programa deve então exibir uma mensagem dizendo se ele acertou ou errou. (Importante 
//         o programa aceitar que a letra A seja digitada tanto em minúsculas quanto em maiúsculas).



function exe06() {
    var nome=prompt("Digite um nome que começe com a letra A");
    var resposta=nome.toLowerCase ();
    var caracter=resposta.indexOf ("a");

    if (caracter== 0){
        alert("Ok Nome com letra A correto");
    }
    else {
        alert("nome nao começa com a letra A")
    }
}