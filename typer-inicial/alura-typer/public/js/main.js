var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase").text(numPalavras);

//console.log(tamanhoFrase);

var campo = $(".campo-digitacao");

campo.on("input",function(){
      var conteudo =  campo.val();

      var qtdPalavras = conteudo.split("/\s+/").length -1;
      $("#contador-palavras").text(qtdPalavras);

      var qtdCaracteres = conteudo.length;
      $("#contador-caracteres").text(qtdCaracteres);
});

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus",function(){
    var cronometro = setInterval(function(){
        
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);

        if(tempoRestante < 1){
           campo.attr("disabled",true);
           clearInterval(cronometro);
        }

    },1000);    

});