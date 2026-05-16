const selectDiasProduccion = document.getElementById('id-select-dias')
const btnCargarProduccion = document.getElementById('id-btn-cargar-produccion') 
const btnPresentar = document.getElementById('id-btn-presentar-produccion') 
const txtPresentarProduccion = document.getElementById('id-listado-produccion')
const btnMayorProduccion = document.getElementById('id-btn-mayor-produccion')
const txtMayorProduccion = document.getElementById('id-txt-mayor-produccion')
const btnMenorProduccion = document.getElementById('id-btn-menor-produccion')
const txtMenorProduccion = document.getElementById('id-txt-menor-produccion')
const btnPromedioProduccion = document.getElementById('id-btn-promedio-produccion')
const txtPromedioProduccion = document.getElementById('id-txt-promedio-produccion')
const btnMayorPromedio = document.getElementById('id-btn-mayor-promedio')
const txtMayorPromedio = document.getElementById('id-txt-mayor-promedio')
const btnMenorPromedio = document.getElementById('id-btn-menor-promedio')
const txtMenorPromedio = document.getElementById('id-txt-menor-promedio')
const btnProduccionRepetida = document.getElementById('id-btn-produccion-repetida')
const txtProduccionRepetida = document.getElementById('id-txt-produccion-repetida')


//vector con variables sin definir
let vectorProduccion = []
//vector con variables que no van a cambiar
const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

btnProduccionRepetida.addEventListener('click', function(e){
    const valorrepetido = detectarRepetidos()
    txtProduccionRepetida.value = valorrepetido
})

 btnMayorPromedio.addEventListener('click', function(e){
    const mayorpromedio = MayorPromedio()
    txtMayorPromedio.value = mayorpromedio
 })

 btnMenorPromedio.addEventListener('click', function(e){
    const menorpromedio = MenorPromedio()
    txtMenorPromedio.value = menorpromedio
 })


btnPromedioProduccion.addEventListener('click', function(e){
const promedio = promedioSemanal()
    txtPromedioProduccion.value = promedio
})

btnCargarProduccion.addEventListener('click' , function (e) {
    const dimension = selectDiasProduccion.value
    //vaciar arreglo para reestablecer los valores 
    vectorProduccion = []
    cargarProduccion(dimension)
    console.log(vectorProduccion)
})

btnPresentar.addEventListener('click' , function(e) {
    txtPresentarProduccion.value = vectorProduccion.join(',')
    })

 btnMayorProduccion.addEventListener('click' , function(e){
    const indice=mayorProduccion()

    const mayor = vectorProduccion[indice]

    const dia = diasSemana[indice]

    txtMayorProduccion.value= 'Dia : ' + dia + '  Valor: '+ mayor
 })

btnMenorProduccion.addEventListener('click' , function(e){
    const indice=menorProduccion()

    const menor = vectorProduccion[indice]

    const dia = diasSemana[indice]

    txtMenorProduccion.value= 'Dia : ' + dia + '  Valor: '+ menor
 })




function cargarProduccion(dimension) {
    for (let i = 0; i < dimension; i++) {
        //generacion de numeros ramdon
        const numAleatorio = Math.ceil(Math.random() * 1000)
        vectorProduccion[i] = numAleatorio
    }
}
 
//funcion para devolver un dato
function mayorProduccion() {
    let mayor = 0;
    let index = 0
//identificar las variables mayores
    for(let i = 0; i < vectorProduccion.length; i++ ){
        const produccion = vectorProduccion[i]
        if(produccion > mayor) {
            mayor = produccion
            index = i
        }
    }
    return index
}

function menorProduccion(){
        let menor = vectorProduccion[0]
        let inferior = 0
        for(let i = 0; i < vectorProduccion.length; i++){
            const produccion = vectorProduccion[i]
            if(produccion< menor){
            menor = produccion
                inferior = i
            }
    }
    return inferior
    }

    function promedioSemanal(){
        let suma = 0
        let division = 0
        for(let i = 0; i < vectorProduccion.length; i++){
            suma  += vectorProduccion[i]
            division = suma/vectorProduccion.length
        }
        return division
    }

function MayorPromedio(){
        let vector = []
        const promediomayor = promedioSemanal()
        for(let i = 0; i < vectorProduccion.length; i++){
            if(vectorProduccion[i] > promediomayor ){
                let posicionVacia = vector.length
                vector[posicionVacia] = vectorProduccion[i]
            }
        }
        return vector.length
    }

    function MenorPromedio(){
        let vector = []
        const promediomenor = promedioSemanal()
        for(let i = 0; i < vectorProduccion.length; i++){
            if(vectorProduccion[i] < promediomenor ){
                let posicionVacia1 = vector.length
                vector[posicionVacia1] = vectorProduccion[i]
            }
        }
        return vector.length
    }
    
function detectarRepetidos() {
    let repetido = "No existen producciones repetidas";
    for (let i = 0; i < vectorProduccion.length; i++) {
        for (let j = i + 1; j < vectorProduccion.length; j++) {
            if (vectorProduccion[i] === vectorProduccion[j]) {
                repetido = "Existen días con producción repetida";
            }
        }
    }
    return repetido;
}





