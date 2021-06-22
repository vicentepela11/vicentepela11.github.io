
function slide(){
    var imagem = document.getElementById('img')
    imagem.src = '/img/slide1.jpg'
    
}
function foto2(){
    var imagem = document.getElementById('img')
    imagem.src = '/img/slide2.jpg'
}
function foto3(){
    var imagem = document.getElementById('img')
    imagem.src = '/img/slide3.jpg'
}
var funções = [slide, foto2, foto3]
var indexx = 0


window.setInterval(function(){
    funções[indexx++ % funções.length]();
}, 10000);
