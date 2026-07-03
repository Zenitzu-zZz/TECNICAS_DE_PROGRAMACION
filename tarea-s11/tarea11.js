const selectProducto = document.getElementById('select-producto');
const inputCantidad = document.getElementById('id-cantidad-prod');
const btnAgregarProducto = document.getElementById('btn-agregar-producto');
const btnVaciarFactura = document.getElementById('btn-vaciar-factura');
const tableFacturaTbody = document.querySelector('#id-table-factura > tbody');
const btnCalcularFactura = document.getElementById('btn-calcular-factura');
const txtResumenFactura = document.getElementById('id-txt-resumen-factura');

// vectores para guardar datos de la factura
let productos = [];
let cantidades = [];
let precios = [];

const inputMontoCajero = document.getElementById('id-monto-cajero');
const selectOperacion = document.getElementById('select-operacion');
const btnProcesarOperacion = document.getElementById('btn-procesar-operacion');
const btnVaciarCajero = document.getElementById('btn-vaciar-cajero');
const tableCajeroTbody = document.querySelector('#id-table-cajero > tbody');
const btnCalcularCajero = document.getElementById('btn-calcular-cajero');
const txtResumenCajero = document.getElementById('id-txt-resumen-cajero');

// vectores para guardar datos del cajero
let movimientosTipo = [];  
let movimientosMonto = []; 
let saldoActual = 0;       

// boton para agregar productos a los arreglos
btnAgregarProducto.addEventListener('click', function () {
    const nombreProd = selectProducto.value;
    const opcionSeleccionada = selectProducto.options[selectProducto.selectedIndex];
    const precioProd = parseFloat(opcionSeleccionada.getAttribute('data-precio'));
    const cantidadProd = parseInt(inputCantidad.value);

    // validar que no pongan numeros negativos o vacios
    if (isNaN(cantidadProd) || cantidadProd <= 0) {
        alert('Por favor, ingrese una cantidad válida mayor a 0.');
        return;
    }

    // meter datos a los vectores usando el length
    productos[productos.length] = nombreProd;
    cantidades[cantidades.length] = cantidadProd;
    precios[precios.length] = precioProd;

    presentarFactura();
});

// boton para borrar todo de la factura
btnVaciarFactura.addEventListener('click', function () {
    productos = [];
    cantidades = [];
    precios = [];
    tableFacturaTbody.innerHTML = '<tr><td colspan="4">No hay productos registrados</td></tr>';
    txtResumenFactura.value = '';
});

// boton para hacer las operaciones de la factura
btnCalcularFactura.addEventListener('click', function () {
    if (productos.length === 0) {
        txtResumenFactura.value = 'La factura está vacía.';
        return;
    }
    txtResumenFactura.value = fnCalcularTotalesFactura();
});

// boton para procesar retiros o depositos
btnProcesarOperacion.addEventListener('click', function () {
    const monto = parseFloat(inputMontoCajero.value);
    const tipo = selectOperacion.value;

    if (isNaN(monto) || monto <= 0) {
        alert('Ingrese un monto válido y mayor que cero.');
        return;
    }

    // validar que no retire mas de lo que tiene guardado
    if (tipo === 'Retiro') {
        if (monto > saldoActual) {
            alert('Fondos insuficientes. Su saldo disponible es: $' + saldoActual.toFixed(2));
            return; 
        }
        saldoActual -= monto; 
    } else {
        saldoActual += monto;
    }

    // guardar datos en el vector del cajero
    movimientosTipo[movimientosTipo.length] = tipo;
    movimientosMonto[movimientosMonto.length] = monto;

    inputMontoCajero.value = ''; 
    presentarCajero();
});

// boton para reiniciar el cajero a cero
btnVaciarCajero.addEventListener('click', function () {
    movimientosTipo = [];
    movimientosMonto = [];
    saldoActual = 0;
    tableCajeroTbody.innerHTML = '<tr><td colspan="3">No hay movimientos realizados</td></tr>';
    txtResumenCajero.value = '';
});

// boton para mostrar lo depositado y retirado
btnCalcularCajero.addEventListener('click', function () {
    if (movimientosTipo.length === 0) {
        txtResumenCajero.value = 'No se registran movimientos.';
        return;
    }
    txtResumenCajero.value = fnCalcularResultadosCajero();
});

// funcion para mostrar los productos en la tabla html
function presentarFactura() {
    let str = '';
    for (let i = 0; i < productos.length; i++) {
        str += '<tr>';
        str += '<td>' + i + '</td>';
        str += '<td>' + productos[i] + '</td>';
        str += '<td>' + cantidades[i] + '</td>';
        str += '<td>$' + precios[i].toFixed(2) + '</td>';
        str += '</tr>';
    }
    tableFacturaTbody.innerHTML = str;
}

// funcion para mostrar los movimientos bancarios en la tabla html
function presentarCajero() {
    let str = '';
    for (let i = 0; i < movimientosTipo.length; i++) {
        str += '<tr>';
        str += '<td>' + (i + 1) + '</td>';
        str += '<td>' + movimientosTipo[i] + '</td>';
        str += '<td>$' + movimientosMonto[i].toFixed(2) + '</td>';
        str += '</tr>';
    }
    tableCajeroTbody.innerHTML = str;
}

// calcular la cuenta con los redondeos del ejemplo del pdf
function fnCalcularTotalesFactura() {
    let subtotal = 0;
    for (let i = 0; i < productos.length; i++) {
        subtotal += cantidades[i] * precios[i];
    }
    const iva = Math.floor(subtotal * 0.15 * 100) / 100;
    const descuento = Math.round(subtotal * 0.05 * 100) / 100;
    const totalPagar = Math.round((subtotal + iva - descuento) * 10) / 10;

    return 'Subtotal: ' + subtotal.toFixed(2) + ' | IVA (15%): ' + iva.toFixed(2) + ' | Descuento: ' + descuento.toFixed(2) + ' | Total: ' + totalPagar.toFixed(1);
}

// sacar los totales de depositos y retiros usando un for
function fnCalcularResultadosCajero() {
    let totalDepositado = 0;
    let totalRetirado = 0;
    for (let i = 0; i < movimientosTipo.length; i++) {
        if (movimientosTipo[i] === 'Deposito') {
            totalDepositado += movimientosMonto[i];
        } else if (movimientosTipo[i] === 'Retiro') {
            totalRetirado += movimientosMonto[i];
        }
    }
    const saldoCalculado = totalDepositado - totalRetirado;
    return 'Total Depositado: $' + totalDepositado.toFixed(2) + ' | Total Retirado: $' + totalRetirado.toFixed(2) + ' | Saldo Final: $' + saldoCalculado.toFixed(2);
}