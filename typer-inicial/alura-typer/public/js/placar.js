function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Wesley";
    var Palavras = $("#contador-palavras").text();
    
    var linha =  novaLinha(usuario,Palavras);
    linha.find(".botao-remove").click(removeLinha);
    
    //corpoTabela.append(linha);   
    corpoTabela.prepend(linha);   
}

function novaLinha(usuario,Palavras) {

    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(Palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(){
    event.preventDefault();
    $(this).parent().parent().remove();
};