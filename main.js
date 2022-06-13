const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')
const coresRobo = document.querySelectorAll('[data-cor]')
const robo = document.querySelector('.robo')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
controle.forEach ( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        ManipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca)
    })
})

function ManipulaDados(dataControle, parent, peca){
    const contador = parent.querySelector('[data-controleContador]')
    if(dataControle === "-"){
        if(contador.value > 0){
            contador.value = Number(contador.value) - 1
        ManipulaEstatisticas(peca, dataControle)
        } else{
            alert('equipamentos menores que 0 não é possivel')
            
        }
        }
    else {
        contador.value = Number(contador.value) + 1
        ManipulaEstatisticas(peca, dataControle)
    }
}

function ManipulaEstatisticas(peca, dataControle){

    if (dataControle === "+") {
        estatistica.forEach( (elemento) => {
          elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        })
      } else {
        estatistica.forEach( (elemento) => {
          elemento.textContent = Number(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        })
      }
}


coresRobo.forEach( (coresRobo) => {
    coresRobo.addEventListener('click', (evento) => {
        trocaCor(evento.target.dataset.cor)
        
    })
})   

function trocaCor(cor){
    robo.attributes.src.textContent = `img/Robotron 2000 - ${cor}.png`
}

