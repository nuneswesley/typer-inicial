var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var botaoReiniciar = $("#botao-reiniciar");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometros();
    inicializaMarcadores();
    botaoReiniciar.click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase").text(numPalavras);
}

function inicializaContadores() {
    campo.on("input",function(){
          var conteudo =  campo.val();
         
          var qtdPalavras = conteudo.split(/\S+/).length -1;
          $("#contador-palavras").text(qtdPalavras);
        
          var qtdCaracteres = conteudo.length;
          $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometros() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus",function(){
        botaoReiniciar.toggleClass("botao-desativado");
        var cronometro = setInterval(function(){
            
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);

            // if( frase.startsWith(digitado)) {
            //     campo.addClass("borda-verde");
            //    } else {
            //     campo.addClass("borda-vermelha");
            //    }

            if(tempoRestante < 1){
               clearInterval(cronometro);
               finalizaJogo();
            }
        },1000);    
    });    
}

function finalizaJogo() {
    campo.attr("disabled",true);
    botaoReiniciar.toggleClass("botao-desativado");
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on("input",function(){
        var digitado = campo.val();
        var comparavel = frase.substr(0,digitado.length);
    
        if(digitado == comparavel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    
    });
}

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Wesley";
    var numPalavras = $("#contador-palavras").text();
    var botaoRemover = "<a href='#' class='botao-remover'><i class='small material-icons'>delete</i></a>"
    var linha = "<tr>"+
                    "<td>" + usuario + "</td>"+
                    "<td>" + numPalavras + "</td>"+
                    "<td>" + botaoRemover + "</td>"+
                "</tr>";

    corpoTabela.append(linha);   
    //corpoTabela.prepend(linha);   
    
}

$(".botao-remover").click(function(event){
    event.preventDefault();
    $(this).parent().parent().remove();
});

function reiniciaJogo() {
        campo.attr("disabled", false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo-digitacao").text(tempoInicial);
        inicializaCronometros();
        campo.toggleClass("campo-desativado");
        campo.removeClass("borda-vermelha")
        campo.removeClass("borda-verde");
}


