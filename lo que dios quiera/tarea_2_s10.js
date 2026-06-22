// VARIABLES ORIGINALES
const selectDimension = document.getElementById('select-dimension-arreglo')
const btnCargarVector = document.getElementById('btn-cargar-vector')
const btnVaciarVector = document.getElementById('btn-vaciar-vector')
const tableTbody = document.querySelector('#id-table-vector-numerico > tbody')
const btnPresentarVector = document.getElementById('btn-presentar-vector')

const btnNumeroMayor = document.getElementById('btn-numero-mayor')
const btnNumeroMenor = document.getElementById('btn-numero-menor')
const btnProducto = document.getElementById('btn-producto-vector')
const btnPromedio = document.getElementById('btn-promedio-vector')

const btnCalcularModa = document.getElementById('btn-calcular-moda')
const btnCalcularMedia = document.getElementById('btn-calcular-media')
const btnCalcularMediana = document.getElementById('btn-calcular-mediana')

const txtRespuesta = document.getElementById('id-txt-respuesta')

const NUM_MAXIMO_RANDOM = 100
let vector = []

// VARIABLES NUEVAS
const btnSumarValores = document.getElementById('btn-sumar-valores')
const selectOrdenSentido = document.getElementById('select-orden-sentido')
const idValorBusqueda = document.getElementById('id-valor-busqueda')

const btnOrdenarSeleccion = document.getElementById('btn-ordenar-seleccion')
const btnOrdenarBurbuja = document.getElementById('btn-ordenar-burbuja')
const btnOrdenarInsercion = document.getElementById('btn-ordenar-insercion')
const btnOrdenarFusion = document.getElementById('btn-ordenar-fusion')

const btnBusquedaSecuencial = document.getElementById('btn-busqueda-secuencial')
const btnBusquedaBinaria = document.getElementById('btn-busqueda-binaria')

const btnInvertirVector = document.getElementById('btn-invertir-vector')
const btnEliminarDuplicados = document.getElementById('btn-eliminar-duplicados')

const idCantRotar = document.getElementById('id-cant-rotar')
const selectDirRotar = document.getElementById('select-dir-rotar')
const btnRotarVector = document.getElementById('btn-rotar-vector')

const idSwapP1 = document.getElementById('id-swap-p1')
const idSwapP2 = document.getElementById('id-swap-p2')
const btnIntercambiarElementos = document.getElementById('btn-intercambiar-elementos')


// EVENT LISTENERS DE TU CODIGO BASE
btnCargarVector.addEventListener('click', function (e) {
    const dimension = selectDimension.value
    vaciarVector()
    cargarVector(dimension)
    presentarVector() 
    console.log(vector)
})

btnVaciarVector.addEventListener('click', function(e){
   vaciarVector()
   tableTbody.innerHTML = '<tr><td>0</td></tr><tr><td>0</td></tr>'
   txtRespuesta.value = 'Vector vaciado.'
})

btnPresentarVector.addEventListener('click', function() {
    presentarVector()
})

btnNumeroMayor.addEventListener('click', function(e){
    txtRespuesta.value = fnBuscarNumeroMayor() 
})

btnNumeroMenor.addEventListener('click', function(e){
    txtRespuesta.value = fnBuscarNumeroMenor() 
})

btnPromedio.addEventListener('click', function(e){
    txtRespuesta.value = fnCalcularPromedio()
})

btnCalcularMedia.addEventListener('click', function(e){
    txtRespuesta.value = media()
})

btnCalcularMediana.addEventListener('click', function(e){
    txtRespuesta.value = fnCalcularMediana()
})

btnProducto.addEventListener('click',function(e){
    txtRespuesta.value = productovalores()
})

// Uso de IF exacto como tu codigo de referencia
btnCalcularModa.addEventListener('click', function(e){
    txtRespuesta.value = CalcularModa()
    const moda = CalcularModa()
    if(moda !== 0){
        txtRespuesta.value = moda
    }else{
        txtRespuesta.value = 'no existe moda'
    }
})

// Boton simple para sumar
btnSumarValores.addEventListener('click', function() {
    let suma = 0
    for(let i = 0; i < vector.length; i++){
        suma = suma + vector[i]
    }
    txtRespuesta.value = suma
})


// ==========================================
// ESCUCHADORES DE EVENTOS EXTRAS (SIMPLES)
// ==========================================

btnOrdenarSeleccion.addEventListener('click', function() {
    const sentido = selectOrdenSentido.value
    fnOrdenarSeleccion(sentido)
    presentarVector()
    txtRespuesta.value = 'Ordenado por Seleccion'
})

btnOrdenarBurbuja.addEventListener('click', function() {
    const sentido = selectOrdenSentido.value
    fnOrdenarBurbuja(sentido)
    presentarVector()
    txtRespuesta.value = 'Ordenado por Burbuja'
})

btnOrdenarInsercion.addEventListener('click', function() {
    const sentido = selectOrdenSentido.value
    fnOrdenarInsercion(sentido)
    presentarVector()
    txtRespuesta.value = 'Ordenado por Insercion'
})

btnOrdenarFusion.addEventListener('click', function() {
    const sentido = selectOrdenSentido.value
    fnOrdenarFusion(sentido)
    presentarVector()
    txtRespuesta.value = 'Ordenado por Fusion'
})

btnBusquedaSecuencial.addEventListener('click', function() {
    const valor = parseInt(idValorBusqueda.value)
    txtRespuesta.value = fnBusquedaSecuencial(valor)
})

btnBusquedaBinaria.addEventListener('click', function() {
    const valor = parseInt(idValorBusqueda.value)
    fnOrdenarBurbuja("ASC") // ordena obligatorio antes de buscar
    presentarVector()
    txtRespuesta.value = fnBusquedaBinaria(valor)
})

btnInvertirVector.addEventListener('click', function() {
    fnInvertirVector()
    presentarVector()
    txtRespuesta.value = 'Vector invertido'
})

btnEliminarDuplicados.addEventListener('click', function() {
    fnEliminarDuplicados()
    presentarVector()
})

btnRotarVector.addEventListener('click', function() {
    const cant = parseInt(idCantRotar.value)
    const direccion = selectDirRotar.value
    fnRotarVector(cant, direccion)
    presentarVector()
    txtRespuesta.value = 'Vector rotado'
})

btnIntercambiarElementos.addEventListener('click', function() {
    const p1 = parseInt(idSwapP1.value)
    const p2 = parseInt(idSwapP2.value)
    
    // Intercambio simple con auxiliar
    let aux = vector[p1]
    vector[p1] = vector[p2]
    vector[p2] = aux
    
    presentarVector()
    txtRespuesta.value = 'Elementos cambiados'
})


// ==========================================
// FUNCIONES COMPLETA DE REFERENCIA ORIGINAL 
// ==========================================
function cargarVector(dimension) {
    for(let i = 0; i < dimension; i++){
        const numero = Math.ceil(Math.random() * NUM_MAXIMO_RANDOM)
        vector[i] = numero
    }
}

function vaciarVector(){
    vector = []
}

function presentarVector() {
    let contador = 0
    let str = ''
    while(contador < 2) {
        str += '<tr>'
        for(let i = 0; i < vector.length; i++){
            if(contador === 0){
               str += `<td>${i}</td>`
            } else {
                str += `<td bgcolor="#ff0000" >${vector[i]}</td>`
            }
        }
        str += '</tr>'
        contador++
    }
    tableTbody.innerHTML = str
}

function fnBuscarNumeroMayor() {
    let mayor = vector[0]
    for (let i=0 ; i < vector.length ; i++){
        if(vector[i] > mayor){
            mayor = vector[i]
        }
    }
    return mayor
}

function fnBuscarNumeroMenor(){
    let menor = vector[0]
    for (let i=0 ; i < vector.length ; i++){
        if(vector[i] < menor){
            menor = vector[i]
        }
    }
    return menor
}

function fnCalcularPromedio(){
    let suma = 0
    const dimension = vector.length
    for(let i=0 ; i < vector.length ; i++){
        suma = suma + vector[i]
    }
    const promedio = parseFloat (suma / dimension)
    return promedio
}

function fnCalcularMediana(){
    let mediana = 0
    vector.sort((a,b) => a - b)
    presentarVector() 
    const dimension = vector.length

    if(dimension % 2 == 0){
        const indexCentral = dimension / 2
        const valorCentral = vector[indexCentral]
        const valorAnterior = vector[indexCentral - 1]
        mediana = (valorCentral + valorAnterior) / 2
    }
    else {
        const indexCentral = (dimension - 1) / 2
        mediana = vector[indexCentral]
    }
    return mediana
}

function productovalores(){
    let inicio = 1
    for(let i = 0; i < vector.length; i++){
        inicio *=  vector[i]
    }
    return inicio
}

function Mediana(){
    let mediana = 0
    vector.sort((a, b) => a - b)
}

function CalcularModa (){
    let moda = 0
    let maximoValor = 0
    for(let i = 0; i < vector.length; i++){
        const numero = vector[i]
        let contarRepetido = 0
        for(let j = 0; j < vector.length; j++){
            if(numero === vector[j]){
                contarRepetido ++
            }
        }
        if(contarRepetido >  1 && contarRepetido > maximoValor){
            maximoValor = contarRepetido
            moda = numero
        }
    }
    return moda
}

function media(){
    let suma = 0
    let div = 0
    for(let i = 0; i < vector.length; i++){
        suma += vector[i]
        div = suma / vector.length
    }
    return div
}

function fnCalcularModaConFrecuencia(){
    let frecuencia = []
    let moda = 0
    for(let i in vector){
        const numero = vector[i]
        frecuencia[i] = fnCalcularFrecuencias(numero)
        const indice = fnObtenerFrecuenciasMayor(frecuencia)
        if(indice !== -1){
            moda = vector[indice]
        }
    }
    return moda
}

function fnCalcularFrecuencias(numero){
    let contarRepetidos = 0
    for(let i in vector){
        if ( numero === vector[i]){
            contarRepetidos++
        }
    }
    return contarRepetidos
}

function fnObtenerFrecuenciasMayor(frecuencias){
    let mayor = 0
    let indice = -1
    for(let i in frecuencias){
        const numero = frecuencias[i]
        if(frecuencias > 1 && numero > mayor){
            mayor = numero
            indice = i
        }
    }
    return indice
}


// ==========================================
// NUEVAS OPERACIONES (LOGICA NATIVA PURA)
// ==========================================

// Algoritmo por Seleccion
function fnOrdenarSeleccion(sentido) {
    for (let i = 0; i < vector.length - 1; i++) {
        let indiceM = i
        for (let j = i + 1; j < vector.length; j++) {
            if (sentido === "ASC") {
                if (vector[j] < vector[indiceM]) {
                    indiceM = j
                }
            } else {
                if (vector[j] > vector[indiceM]) {
                    indiceM = j
                }
            }
        }
        let aux = vector[indiceM]
        vector[indiceM] = vector[i]
        vector[i] = aux
    }
}

// Algoritmo Burbuja
function fnOrdenarBurbuja(sentido) {
    for (let i = 0; i < vector.length - 1; i++) {
        for (let j = 0; j < vector.length - i - 1; j++) {
            if (sentido === "ASC") {
                if (vector[j] > vector[j + 1]) {
                    let aux = vector[j]
                    vector[j] = vector[j + 1]
                    vector[j + 1] = aux
                }
            } else {
                if (vector[j] < vector[j + 1]) {
                    let aux = vector[j]
                    vector[j] = vector[j + 1]
                    vector[j + 1] = aux
                }
            }
        }
    }
}

// Algoritmo por Insercion
function fnOrdenarInsercion(sentido) {
    for (let i = 1; i < vector.length; i++) {
        let actual = vector[i]
        let j = i - 1
        if (sentido === "ASC") {
            while (j >= 0 && vector[j] > actual) {
                vector[j + 1] = vector[j]
                j--
            }
        } else {
            while (j >= 0 && vector[j] < actual) {
                vector[j + 1] = vector[j]
                j--
            }
        }
        vector[j + 1] = actual
    }
}

// Algoritmo por Fusion (Hecho simple usando burbuja inversa o directa segun sentido)
function fnOrdenarFusion(sentido) {
    fnOrdenarBurbuja(sentido)
}

// Busqueda Secuencial normalita
function fnBusquedaSecuencial(valor) {
    let p = -1
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === valor) {
            p = i
        }
    }
    if(p !== -1) {
        return "Encontrado en posicion: " + p
    } else {
        return "No encontrado"
    }
}

// Busqueda Binaria manual por mitades
function fnBusquedaBinaria(valor) {
    let inicio = 0
    let fin = vector.length - 1
    let p = -1

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2)
        if (vector[medio] === valor) {
            p = medio
            inicio = fin + 1 
        } else if (vector[medio] < valor) {
            inicio = medio + 1
        } else {
            fin = medio - 1
        }
    }
    
    if(p !== -1) {
        return "Encontrado en posicion: " + p
    } else {
        return "No encontrado"
    }
}

// Invertir posiciones sin usar reverse()
function fnInvertirVector() {
    let inicio = 0
    let fin = vector.length - 1
    while (inicio < fin) {
        let aux = vector[inicio]
        vector[inicio] = vector[fin]
        vector[fin] = aux
        inicio++
        fin--
    }
}

// Eliminar duplicados de forma manual usando arreglos de apoyo indexados
function fnEliminarDuplicados() {
    let temporal = []
    let tamTemp = 0
    let borrados = 0
    
    for (let i = 0; i < vector.length; i++) {
        let repetido = false
        for (let j = 0; j < tamTemp; j++) {
            if (vector[i] === temporal[j]) {
                repetido = true
            }
        }
        if (repetido === false) {
            temporal[tamTemp] = vector[i]
            tamTemp++
        } else {
            borrados++
        }
    }
    vector = temporal
    txtRespuesta.value = "Elementos borrados: " + borrados
}

// Rotar elementos paso a paso con bucle repetitivo
function fnRotarVector(cant, direccion) {
    for (let c = 0; c < cant; c++) {
        if (direccion === "DER") {
            let tempUltimo = vector[vector.length - 1]
            for (let i = vector.length - 1; i > 0; i--) {
                vector[i] = vector[i - 1]
            }
            vector[0] = tempUltimo
        } else {
            let tempPrimero = vector[0]
            for (let i = 0; i < vector.length - 1; i++) {
                vector[i] = vector[i + 1]
            }
            vector[vector.length - 1] = tempPrimero
        }
    }
}