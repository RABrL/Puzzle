const imagenes = document.querySelectorAll('.img')
const btnDesord = document.querySelector('#btnDesordenar')
const btnCompr = document.querySelector('#btnComprobar')
const fichas=[0,1,2,3,4,5,6,7,8]
const copia = [...fichas]
let validador = false
let click=false
let img1,img2

imagenes.forEach((x,i)=>{
    x.addEventListener('click',()=>{
        if(x.style.border) desmarcar(i)
        else seleccionar(i)
    })
})

btnDesord.addEventListener('click',desordenar)
btnCompr.addEventListener('click',()=>{
    if(validador) comprobar()
    else alert('Tienes que desordenar el puzzle para poder comprobar')
})

function seleccionar(i){
    if(click){
        moverFichas(img1,img2=i)
    }else {
        click = true
        img1 = i
        imagenes[i].style.border = 'solid green .4rem'
    }
}

function desmarcar(i){
    click = false
    imagenes[i].style.border = ''
}

function desordenar(){
    validador = true
    fichas.sort(function(){return Math.random()-0.5})
    imagenes.forEach((x,i)=>{
        x.src = `./assets/${fichas[i]}.jpg`
    })
}

function moverFichas(x1,x2){
    //Intercambio las imagenes seleccionadas
    imagenes[x1].src = `./assets/${fichas[x2]}.jpg`
    imagenes[x2].src = `./assets/${fichas[x1]}.jpg`
    //Guardo el numero que hay en la posicion del primer click del array en una variable
    let img1 = fichas[x1]
    //Intercambio los numeros de las 2 posiciones del array fichas
    fichas[x1]=fichas[x2]
    fichas[x2] = img1
    //Desmarco las casillas 
    imagenes[x1].style.border = ''
    imagenes[x2].style.border = ''
    click=false
}

function comprobar(){
    let igualdad=0
    for(i=0;i<fichas.length;i++){
        if(copia[i]===fichas[i]) igualdad++
    }
    if(igualdad===9) alert('FELICITACIONES!! el puzzle esta ordenado')
    else alert('Aun no esta ordenado el puzzle')
}