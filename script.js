// Elementos del DOM Base
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

// Nuevos selectores y controles agregados
const selectOrden = document.getElementById('select-orden')
const inputValorBusqueda = document.getElementById('id-valor-busqueda')

const btnOrdenarSeleccion = document.getElementById('btn-ordenar-seleccion')
const btnOrdenarBurbuja = document.getElementById('btn-ordenar-burbuja')
const btnOrdenarInsercion = document.getElementById('btn-ordenar-insercion')
const btnOrdenarFusion = document.getElementById('btn-ordenar-fusion')

const btnBusquedaSecuencial = document.getElementById('btn-busqueda-secuencial')
const btnBusquedaBinaria = document.getElementById('btn-busqueda-binaria')

const btnInvertirVector = document.getElementById('btn-invertir-vector')
const btnEliminarDuplicados = document.getElementById('btn-eliminar-duplicados')

const inputRotaciones = document.getElementById('input-rotaciones')
const btnRotarVector = document.getElementById('btn-rotar-vector')

const inputPos1 = document.getElementById('input-pos1')
const inputPos2 = document.getElementById('input-pos2')
const btnIntercambiarElementos = document.getElementById('btn-intercambiar-elementos')

const NUM_MAXIMO_RANDOM = 100
let vector = []

// --- EVENT LISTENERS BASE ---

btnCargarVector.addEventListener('click', function (e) {
    const dimension = selectDimension.value
    vaciarVector()
    cargarVector(dimension)
    presentarVector()
    txtRespuesta.value = `Vector cargado con ${dimension} elementos aleatorios.`
})

btnVaciarVector.addEventListener('click', function(e){
    vaciarVector()
    presentarVector()
    txtRespuesta.value = "Vector vaciado completamente."
})

btnPresentarVector.addEventListener('click', function() {
    if (!validarVector()) return
    presentarVector()
    txtRespuesta.value = "Vector presentado en la tabla."
})

btnNumeroMayor.addEventListener('click', function(e){
    if (!validarVector()) return
    txtRespuesta.value = `Número Mayor: ${fnBuscarNumeroMayor()}`
})

btnNumeroMenor.addEventListener('click', function(e){
    if (!validarVector()) return
    txtRespuesta.value = `Número Menor: ${fnBuscarNumeroMenor()}`
})

btnPromedio.addEventListener('click', function(e){
    if (!validarVector()) return
    txtRespuesta.value = `Promedio de Valores: ${fnCalcularPromedio()}`
})

btnCalcularMediana.addEventListener('click', function(e){
    if (!validarVector()) return
    txtRespuesta.value = `Mediana Calculada: ${fnCalcularMediana()}`
})

// --- EVENT LISTENERS AGREGADOS Y COMPLETADOS ---

btnProducto.addEventListener('click', function(e) {
    if (!validarVector()) return
    let producto = 1
    for (let i = 0; i < vector.length; i++) {
        producto *= vector[i]
    }
    txtRespuesta.value = `Producto de todos los valores: ${producto}`
})

btnCalcularMedia.addEventListener('click', function(e) {
    if (!validarVector()) return
    txtRespuesta.value = `Media Aritmética: ${fnCalcularPromedio()}`
})

btnCalcularModa.addEventListener('click', function(e) {
    if (!validarVector()) return
    let frecuencias = {}
    let maxFrecuencia = 0
    let modas = []

    for (let i = 0; i < vector.length; i++) {
        let num = vector[i]
        frecuencias[num] = (frecuencias[num] || 0) + 1
        if (frecuencias[num] > maxFrecuencia) {
            maxFrecuencia = frecuencias[num]
        }
    }

    for (let num in frecuencias) {
        if (frecuencias[num] === maxFrecuencia) {
            modas.push(num)
        }
    }

    if (maxFrecuencia === 1) {
        txtRespuesta.value = "Moda: No hay elementos repetidos (Amodal)."
    } else {
        txtRespuesta.value = `Moda: ${modas.join(', ')} (Frecuencia: ${maxFrecuencia} veces)`
    }
})

// Eventos de Ordenamiento
btnOrdenarSeleccion.addEventListener('click', () => {
    if (!validarVector()) return
    fnOrdenarSeleccion(selectOrden.value)
    presentarVector()
    txtRespuesta.value = `Ordenado por Selección (${selectOrden.value})`
})

btnOrdenarBurbuja.addEventListener('click', () => {
    if (!validarVector()) return
    fnOrdenarBurbuja(selectOrden.value)
    presentarVector()
    txtRespuesta.value = `Ordenado por Burbuja (${selectOrden.value})`
})

btnOrdenarInsercion.addEventListener('click', () => {
    if (!validarVector()) return
    fnOrdenarInsercion(selectOrden.value)
    presentarVector()
    txtRespuesta.value = `Ordenado por Inserción (${selectOrden.value})`
})

btnOrdenarFusion.addEventListener('click', () => {
    if (!validarVector()) return
    vector = fnOrdenarFusion(vector, selectOrden.value)
    presentarVector()
    txtRespuesta.value = `Ordenado por Fusión (${selectOrden.value})`
})

// Eventos de Búsqueda
btnBusquedaSecuencial.addEventListener('click', () => {
    if (!validarVector()) return
    const valor = parseInt(inputValorBusqueda.value)
    if (isNaN(valor)) {
        txtRespuesta.value = "Error: Por favor ingrese un valor numérico para buscar."
        return
    }
    
    let posiciones = []
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === valor) posiciones.push(i)
    }

    if (posiciones.length > 0) {
        txtRespuesta.value = `Búsqueda Secuencial: Encontrado en las posición(es): ${posiciones.join(', ')}`
    } else {
        txtRespuesta.value = `Búsqueda Secuencial: El valor ${valor} no se encuentra en el vector.`
    }
})

btnBusquedaBinaria.addEventListener('click', () => {
    if (!validarVector()) return
    const valor = parseInt(inputValorBusqueda.value)
    if (isNaN(valor)) {
        txtRespuesta.value = "Error: Por favor ingrese un valor numérico para buscar."
        return
    }

    // La búsqueda binaria requiere ordenamiento previo estricto (Ascendente)
    fnOrdenarSeleccion('ASC')
    presentarVector()

    let inicio = 0
    let fin = vector.length - 1
    let posEncontrada = -1

    while (inicio <= fin) {
        let centro = Math.floor((inicio + fin) / 2)
        if (vector[centro] === valor) {
            posEncontrada = centro
            break
        } else if (vector[centro] < valor) {
            inicio = centro + 1
        } else {
            fin = centro - 1
        }
    }

    if (posEncontrada !== -1) {
        txtRespuesta.value = `Búsqueda Binaria (Auto-ordenado ASC): Encontrado en la posición: ${posEncontrada}`
    } else {
        txtRespuesta.value = `Búsqueda Binaria: El valor ${valor} no se encuentra en el vector.`
    }
})

// Eventos de Transformación Básica
btnInvertirVector.addEventListener('click', () => {
    if (!validarVector()) return
    let izquierdo = 0
    let derecho = vector.length - 1
    while (izquierdo < derecho) {
        let temp = vector[izquierdo]
        vector[izquierdo] = vector[derecho]
        vector[derecho] = temp
        izquierdo++
        derecho--
    }
    presentarVector()
    txtRespuesta.value = "Vector Invertido con éxito."
})

btnEliminarDuplicados.addEventListener('click', () => {
    if (!validarVector()) return
    let longOriginal = vector.length
    let vectorLimpio = []
    for (let i = 0; i < vector.length; i++) {
        if (!vectorLimpio.includes(vector[i])) {
            vectorLimpio.push(vector[i])
        }
    }
    vector = vectorLimpio
    presentarVector()
    let eliminados = longOriginal - vector.length
    txtRespuesta.value = `Eliminar Duplicados: Se eliminaron ${eliminados} elementos repetidos.`
})

// Eventos de Transformación Medio (Rotar e Intercambiar)
btnRotarVector.addEventListener('click', () => {
    if (!validarVector()) return
    let k = parseInt(inputRotaciones.value)
    if (isNaN(k) || k < 1 || k > vector.length) {
        txtRespuesta.value = `Error: Ingrese un número de rotaciones válido entre 1 y ${vector.length}`
        return
    }

    const dir = document.querySelector('input[name="dir-rotar"]:checked').value
    let n = vector.length
    let temp = new Array(n)

    for (let i = 0; i < n; i++) {
        if (dir === 'DER') {
            temp[(i + k) % n] = vector[i]
        } else {
            temp[(i - k + n) % n] = vector[i]
        }
    }
    vector = temp
    presentarVector()
    txtRespuesta.value = `Vector rotado ${k} posiciones hacia la ${dir === 'DER' ? 'Derecha' : 'Izquierda'}`
})

btnIntercambiarElementos.addEventListener('click', () => {
    if (!validarVector()) return
    let p1 = parseInt(inputPos1.value)
    let p2 = parseInt(inputPos2.value)
    let n = vector.length

    if (isNaN(p1) || isNaN(p2) || p1 < 0 || p1 >= n || p2 < 0 || p2 >= n) {
        txtRespuesta.value = `Error: Las posiciones deben estar entre 0 y ${n - 1}`
        return
    }
    if (p1 === p2) {
        txtRespuesta.value = "Error: Las posiciones ingresadas deben ser diferentes."
        return
    }

    let temp = vector[p1]
    vector[p1] = vector[p2]
    vector[p2] = temp

    presentarVector()
    txtRespuesta.value = `Intercambio: Elemento en posición ${p1} cambiado por elemento en posición ${p2}.`
})

// --- FUNCIONES CORE INTERFACES Y VALIDACIÓN ---

function validarVector() {
    if (vector.length === 0) {
        txtRespuesta.value = "Error: El vector está vacío. Por favor cargue elementos primero."
        return false
    }
    return true
}

function cargarVector(dimension) {
    for(let i = 0; i < dimension; i++){
        const numero = Math.ceil(Math.random() * NUM_MAXIMO_RANDOM)
        vector[i] = numero
    }
}

function vaciarVector(){
    vector = []
    tableTbody.innerHTML = `<tr>${'<td>-</td>'.repeat(10)}</tr><tr>${'<td>0</td>'.repeat(10)}</tr>`
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
                str += `<td bgcolor="#00b7ff" >${vector[i]}</td>`
            }
        }
        str += '</tr>'
        contador++
    }
    tableTbody.innerHTML = str
}

// --- LOGICAS ARITMÉTICAS BASE REUTILIZADAS ---

function fnBuscarNumeroMayor() {
    let mayor = vector[0]
    for (let i=0 ; i < vector.length ; i++){
        if(vector[i] > mayor) mayor = vector[i]
    }
    return mayor
}

function fnBuscarNumeroMenor(){
    let menor = vector[0]
    for (let i=0 ; i < vector.length ; i++){
        if(vector[i] < menor) menor = vector[i]
    }
    return menor
}

function fnCalcularPromedio(){
    let suma = 0
    const dimension = vector.length
    for(let i=0 ; i < vector.length ; i++){
        suma = suma + vector[i]
    }
    return parseFloat (suma / dimension)
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

// --- IMPLEMENTACIÓN DE ALGORITMOS DE ORDENAMIENTO DE LA TAREA ---

function fnOrdenarSeleccion(orden) {
    let n = vector.length
    for (let i = 0; i < n - 1; i++) {
        let indiceMinMax = i
        for (let j = i + 1; j < n; j++) {
            if (orden === 'ASC' ? vector[j] < vector[indiceMinMax] : vector[j] > vector[indiceMinMax]) {
                indiceMinMax = j
            }
        }
        let temp = vector[indiceMinMax]
        vector[indiceMinMax] = vector[i]
        vector[i] = temp
    }
}

function fnOrdenarBurbuja(orden) {
    let n = vector.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let condicion = orden === 'ASC' ? vector[j] > vector[j + 1] : vector[j] < vector[j + 1]
            if (condicion) {
                let temp = vector[j]
                vector[j] = vector[j + 1]
                vector[j + 1] = temp
            }
        }
    }
}

function fnOrdenarInsercion(orden) {
    let n = vector.length
    for (let i = 1; i < n; i++) {
        let actual = vector[i]
        let j = i - 1
        while (j >= 0 && (orden === 'ASC' ? vector[j] > actual : vector[j] < actual)) {
            vector[j + 1] = vector[j]
            j--
        }
        vector[j + 1] = actual
    }
}

function fnOrdenarFusion(arr, orden) {
    if (arr.length <= 1) return arr
    const mitad = Math.floor(arr.length / 2)
    const izq = fnOrdenarFusion(arr.slice(0, mitad), orden)
    const der = fnOrdenarFusion(arr.slice(mitad), orden)

    return unificarFusion(izq, der, orden)
}

function unificarFusion(izq, der, orden) {
    let resultado = []
    let i = 0, j = 0
    while (i < izq.length && j < der.length) {
        let condicion = orden === 'ASC' ? izq[i] < der[j] : izq[i] > der[j]
        if (condicion) {
            resultado.push(izq[i])
            i++
        } else {
            resultado.push(der[j])
            j++
        }
    }
    return resultado.concat(izq.slice(i)).concat(der.slice(j))
}