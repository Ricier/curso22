$( document ).ready(function() {

    $(".btnEditar").on("click", function(){
        var id = $(this).val();
        console.log("I'm click of Edit button id: " + id);
    });

    $(".btnExcluir").on("click", function(){
        var id = $(this).val();
        console.log("I'm click of Delete button id: " + id);
    });


});