function showProject(){
    const div = document.querySelector('.none')
    const button =document.querySelector('#show-or-hidden')

    if(div.style.display === 'flex'){
            div.style.display = 'none'
            button.innerHTML = ('Mostrar Mais ⇩')
    }else{
            div.style.display = 'flex'
            button.innerHTML =('Mostrar Menos ⇧')
        }

    }