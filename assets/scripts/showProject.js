function showProject(){
    const div = document.querySelector('.none')
    const button = document.querySelector('#show-or-hidden')
    
    button.addEventListener('click', function(){

        if(div.style.display === 'block'){
            div.style.display = 'none'
        }else{
            div.style.display = 'block'
        }

    })
}