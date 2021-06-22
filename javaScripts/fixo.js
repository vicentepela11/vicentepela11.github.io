const target = document.querySelectorAll('[data-fixo]');
const fixo = 'cima1' 

function menufixo(){
// 160
    target.forEach(function(element) {
        if(window.pageYOffset > 200){
            element.classList.add('opacyti')
        }else if(window.pageYOffset > 400){
            element.classList.remove('opacyti')
        }else{
            element.classList.remove('opacyti')

        }
        if(window.pageYOffset >= 700){
            element.classList.add(fixo)
        }else{
            element.classList.remove(fixo)

        }
    });
}
window.addEventListener('scroll', function(){
    menufixo()
})