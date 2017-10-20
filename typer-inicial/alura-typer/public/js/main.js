var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase").text(numPalavras);

console.log(tamanhoFrase);