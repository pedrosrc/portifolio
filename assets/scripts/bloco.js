const bloco = document.querySelectorAll('.container')
const animate = 'container-off';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) /4 );
    bloco.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animate);
        }else{
            element.classList.remove(animate);
        }
    });

}
animeScroll()
if(bloco.length){
window.addEventListener('scroll', function(){
    animeScroll();
})
}