//1 - Crie uma matriz 3x3 de números inteiros, associe o valor 8 ao elemento central desta matriz. 
//    Exiba a matriz na tela de forma adequada.


function exe01() {
    var x = [];
    for (var i = 0; i <= 2; i++) {
        x[i] = [];
        for (var j = 0; j <= 2; j++) {
            x[i][j] = Math.floor(Math.random() * 2) + 1;
        }
    }
    x[1][1] = 8

    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 2; j++) {

            document.write(x[i][j] + " ")
        }
        document.write("<br>");
    }

}



//2 - Crie uma matriz 10x10 de caracteres. Atribua uma letra "B" a 
//    todos os elementos da matriz. Atribua então o caracter "8" a 
//    um elemento randômico da matriz. Exiba a matriz na tela.


function exe02() {
    var x = [];
    for (var i = 0; i <= 9; i++) {
        x[i] = [];
        for (var j = 0; j <= 9; j++) {
            x[i][j] = "B";

        }

    }
    var n8 = Math.floor(Math.random() * 9) + 1;
    x[n8][n8] = 8

    for (var i = 0; i <= 9; i++) {
        for (var j = 0; j <= 9; j++) {
            document.write(x[i][j] + " ");

        }
        document.write("<br>");
    }


}


//3 - Crie uma matriz 20 x 20 de inteiros. Preencha com números 
//    aleatórios entre 10 e 99. Exiba então a soma dos valores 
//    de todas as linhas desta matriz, e informe qual linha possui 
//    o maior valor.

function exe03() {
    var total = 0;
    var x = [];
    for (var i = 0; i <= 19; i++) {
        x[i] = [];
        for (var j = 0; j <= 19; j++) {
            x[i][j] = Math.floor(Math.random() * 90) + 10;
            total += x[i][j];
            document.write(x[i][j] + " ");
        }
        document.write("<br>");
    }
    document.write("a soma de todo array e: " + total + "<br>")
    var result = 0;
    for (var j = 0; j < x.length; j++) {
        var som = 0;
        for (var i = 0; i < x[j].length; i++) {
            som += x[j][i];
            if (som > result) {
                result = som
            }
        }

        document.write("a soma da linha " + j + " : " + x[j] + " = " + som + "<br>");

    }
    document.write("linha: " + [j] + " : " + result + "<br>");


}
//4 - Utilizando a mesma matriz, exiba a soma dos elementos da diagonal principal.

function exe04() {
    var matriz = [];
    var totalLinha = [];
    var total = 0;
    var maior = 0;
    var showMaior = 0;

    //Insere os números na matriz
    for (var i = 0; i < 5; i++) {
        matriz[i] = [];

        for (var x = 0; x < 5; x++) {
            matriz[i][x] = Math.floor(Math.random() * 4) + 10;
        }
    }

    // // Escreve a matriz na tela
    for (var i = 0; i < 5; i++) {
        for (var x = 0; x < 5; x++) {
            document.write(matriz[i][x] + ", ");
        }
        document.write("<br>")
    }

    document.write("<br>")

    // Faz a soma de cada linha da matriz e a soma total
    for (var i = 0; i < 5; i++) {
        total += matriz[i][i];
    }

    document.write("<br>")
    document.write("Total da diagonal - " + total);
}