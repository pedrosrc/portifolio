function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = './imagens/icons/menu_white_36dp.svg'
    }else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = './imagens/icons/close_white_36dp.svg'
    }
}