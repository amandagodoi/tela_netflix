$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/*loop: true navegar de forma infinita*/ 
/*margin: 10 define espaçamento entre imagens*/
/*loop: true navegar de forma infinita*/
/*nav:true setinha de navegação*/
/*responsive tudo se adapta ao tamanho da tela*/

function mostrarInfo() {
    $('#info').toggle();
    // selecionando a div info que irá ser mostrado e retirado da tela
    // toggle mostra e oculta a div info
    if ($('#info').is(":visible")) {
        //se a div info estiver visível na tela
        $('#trocarInfo').html("MENOS");
        // o conteúdo da span id "trocarInfo" será alterada para "MENOS"
    }
    else {
        $('#trocarInfo').html("MAIS");
        // caso contrário, o conteúdo da span id "trocarInfo" será alterada para "MAIS"
    }
    
}


