const imagenes = document.querySelectorAll('.img')

imagenes.forEach(x=>{
    x.addEventListener('click',()=>{
        if(x.style.border){
            x.style.border = ''
        }else x.style.border = 'solid green .4rem'
        
    })
})