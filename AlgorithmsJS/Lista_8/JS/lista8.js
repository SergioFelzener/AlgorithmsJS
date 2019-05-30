 //1 - Crie um vetor de caracteres de 10 posições. Insira a letra "F" em todas as posições.


 function exe01() {


     var x = [];

     for (var i = 0; i < 10; i++) {
         x[i] = "F"
         document.write(x + "</br>");
     }

 }



 //2 - Solicite 5 números. Exiba os que estão acima da média.


 function exe02() {
     var n = [];
     var soma = 0;

     for (var i = 0; i < 5; i++) {
         n[i] = parseInt(prompt("digite um numero"));
         soma = soma + n[i];
     }
     document.write("numeros digitados : " + n + "</br>");

     var media = soma / 5
     document.write("media : " + media + "</br>")

 }


 //3 - Crie um vetor de 100 posições, preencha com números aleatórios de 1 a 100. 
 //    Exiba a média destes.

 function exe03() {
     var n = [];
     var soma = 0;

     for (var i = 0; i < 100; i++) {
         n[i] = Math.floor(Math.random() * 100) + 1
         document.write(n[i] + "</br>")
         soma = soma + n[i];
     }


     var media = soma / 5
     document.write("media : " + media + "</br>")

 }
 //4 - Crie e preencha o mesmo vetor de 100 números. 
 //    Calcule a soma de todos que são menores que a média dos 10 últimos.

 function exe04() {
    var vetor = [];
    var media = 0;
    var vetorSplice = 0;
    var soma = 0;

    for (var i = 0; i < 100; i++) {
        vetor[i] = Math.floor(Math.random() * 100 + 1);
    }
    document.write("Array " + vetor + "<br>")

    vetorSplice = vetor.splice(90)
    document.write("Splice " + vetorSplice + "<br>")

    for (var x = 0; x < 10; x++) {
        media += vetorSplice[x];
    }

    document.write("Soma de vetorSplice " + media + "<br>")

    media = Math.floor(media / x)
    document.write("Media do vetorSplice " + media + "<br>")

    for (var y = 0; y < 100; y++) {
        if (vetor[y] < media) {
            document.write(vetor[y] + ",")
            soma += vetor[y];
        }
    }
    document.write("A soma dos numeros abaixo da media dos ultimos 10 numeros do vetor é : " + soma + "<br>")

    

 }

 //5 - Escreva o conteúdo do vetor do exercício anterior na tela, colocando 
 //    cada valor ao lado do anterior (na mesma linha). Se o valor do vetor 
 //    for múltiplo de 10, então insira uma quebra de linha.

 function exe05() {
    var arrayInicial = [];
    var media = 0;
    var arraySplice = 0;
    var value = 0;

    for (var i = 0; i < 100; i++) {
        arrayInicial[i] = Math.floor(Math.random() * 100 + 1);
    }
    console.log("Array " + arrayInicial)

    arraySplice = arrayInicial.splice(90)
    console.log("Splice " + arraySplice)

    for (var x = 0; x < 10; x++) {
        media += arraySplice[x];
    }

    console.log("Soma de arraySplice " + media)

    media = Math.floor(media / x)
    console.log("Media do arraySplice " + media)

    for (var y = 0; y < 100; y++) {
        if (arrayInicial[y] < media) {
            value = arrayInicial[y];
            if (value % 10 != 0) {
                document.write(value + "  ")
            }
            if (value % 10 == 0) {
                document.write(value + "<br>")
            }
        }
    }


 }

