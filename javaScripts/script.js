$(".botao").click(function(){
    $(".menu").show();
    $(".titulobanner").hide();
    $(".contato").hide();
});

$(".btn-close").click(function(){
    $(".menu").hide()
    $(".titulobanner").show();
    $(".contato").show()
})

$(".botaoblog").click(function(){
    $(".menu").show();
    $(".menu").hide();
});

$(".btn-close").click(function(){
    $(".menu").hide()
})

$('div a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        target0ffset = $(id).offset().top;
    console.log(target0ffset);

    $('html, body').animate({
        scrollTop: target0ffset 
    }, 500)
});