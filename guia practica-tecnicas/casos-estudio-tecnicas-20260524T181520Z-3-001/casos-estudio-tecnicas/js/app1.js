const btnCargar = document.getElementById('id-btn-cargar-ejemplo')
const txtDatosCargados = document.getElementById('id-txt-datos-cargados')
const btnPromedio = document.getElementById('id-btn-presentar-promedio')
const txtPromedio = document.getElementById('id-txt-presentar-promedio')
const btnSuperior = document.getElementById('id-btn-superior-promedio')
const txtSuperior = document.getElementById('id-txt-superior-promedio')
const btnCritico = document.getElementById('id-btn-presentar-critico')
const txtCritico = document.getElementById('id-txt-presentar-critico')
const btnPorcentaje = document.getElementById('id-btn-presentar-ejemplo')
const txtPorcentaje = document.getElementById('id-listado-ejemplo')

let arraynumero = []
let arraytexto = ["Arroz", "Azúcar", "Leche", "Aceite", "Pan", "Bebidas", "Galletas"]

btnCargar.addEventListener('click', function (e) {
    cargarVector(arraytexto.length)
    let cadenaDatos = ""
    for (let i = 0; i < arraynumero.length; i++) {
        cadenaDatos += arraytexto[i] + ": " + arraynumero[i] + "\n"
    }
    txtDatosCargados.value = cadenaDatos
})

btnPromedio.addEventListener('click', function(e) {
    let prom = promedio()
    txtPromedio.value = prom.toFixed(2)
})

btnSuperior.addEventListener('click', function(e) {
    let superio = superiorpromedio()
    txtSuperior.value = superio
})

btnCritico.addEventListener('click', function(e) {
    let critico = ventasCriticas()
    txtCritico.value = critico
})

btnPorcentaje.addEventListener('click', function(e) {
    let total = totalVentas()
    let cadena = ""
    for(let i = 0; i < arraynumero.length; i++) {
        let porc = (arraynumero[i] / total) * 100
        cadena += arraytexto[i] + ": " + porc.toFixed(2) + "%\n"
    }
    txtPorcentaje.value = cadena
})

function cargarVector(dimension) {
    for (let i = 0; i < dimension; i++) {
        const numEntero = Math.floor(Math.random() * (5000 - 10 + 1)) + 10
        arraynumero[i] = numEntero
    }
}

function totalVentas() {
    let suma = 0
    for(let i = 0; i < arraynumero.length; i++) {
        suma += arraynumero[i]
    }
    return suma
}

function promedio() {
    let suma = 0
    for(let i = 0; i < arraynumero.length; i++) {
        suma += arraynumero[i]
    }
    let div = suma / arraynumero.length
    return div
}

function superiorpromedio() {
    let vectorsuperior = []
    let prom = promedio()
    for(let i = 0; i < arraynumero.length; i++) {
        if(arraynumero[i] > prom) {
            vectorsuperior[vectorsuperior.length] = arraynumero[i]
        }
    }
    let mayorpromedio = vectorsuperior.length
    return mayorpromedio
}

function ventasCriticas() {
    let vectorcritico = []
    for(let i = 0; i < arraynumero.length; i++) {
        if(arraynumero[i] < 100) {
            vectorcritico[vectorcritico.length] = arraynumero[i]
        }
    }
    let totalCriticos = vectorcritico.length
    return totalCriticos
}