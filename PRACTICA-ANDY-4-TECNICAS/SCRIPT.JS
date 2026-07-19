


const productos = [

    ["0001",3500,"Sistema Web Personalizado"],
    ["0002",500,"Computador Core I7"],
    ["0003",200,"Monitor LG 20 pulgadas"],
    ["0004",300,"Teléfono Celular Samsung"],
    ["0005",200,"Cámara Profesional Web"],
    ["0006",150,"Servicio de Mantenimiento Anual"],
    ["0007",100,"Servicio de Hosting Web (1 año)"],
    ["0008",250,"Licencia Software Antivirus (1 año)"],
    ["0009",400,"Impresora Multifuncional HP"],
    ["0010",120,"Router Inalámbrico TP-Link"],
    ["0011",180,"Teclado Mecánico RGB"],
    ["0012",90,"Mouse Óptico USB"],
    ["0013",75,"Audífonos con Micrófono"],
    ["0014",60,"Disco Duro Externo 1TB"],
    ["0015",45,"Memoria USB 64GB"],
    ["0016",250,"Tablet Android 10 pulgadas"],
    ["0017",300,"Smartwatch Deportivo"],
    ["0018",400,"Proyector Multimedia HD"],
    ["0019",150,"Cámara de Seguridad IP"],
    ["0020",80,"Soporte para Laptop Ajustable"]

];



let codigos = [];
let descripciones = [];
let precios = [];
let cantidades = [];
let totales = [];



const selectProducto = document.getElementById("id-select-producto");
const txtCantidad = document.getElementById("id-txt-cantidad");
const txtPrecio = document.getElementById("id-txt-precio");
const txtTotal = document.getElementById("id-txt-total");
const btnAgregar = document.getElementById("id-btn-agregar");

const tablaDetalle = document.querySelector("#id-table-detalle tbody");

const txtSubtotal = document.getElementById("id-txt-subtotal");
const txtIva = document.getElementById("id-txt-iva");
const txtDescuento = document.getElementById("id-txt-descuento");
const txtTotalPagar = document.getElementById("id-txt-total-pagar");



function cargarProductos(){

    for(let i=0;i<productos.length;i++){

        let option=document.createElement("option");

        option.value=i;
        option.textContent=productos[i][2];

        selectProducto.appendChild(option);

    }

}

cargarProductos();



selectProducto.addEventListener("change",actualizarPrecio);
txtCantidad.addEventListener("input",actualizarPrecio);
btnAgregar.addEventListener("click",agregarProducto);



function actualizarPrecio(){

    if(selectProducto.value==""){

        txtPrecio.value="$0.00";
        txtTotal.value="$0.00";
        return;

    }

    let indice=parseInt(selectProducto.value);

    let precio=productos[indice][1];

    let cantidad=parseInt(txtCantidad.value);

    if(isNaN(cantidad) || cantidad<1){

        cantidad=1;

    }

    txtPrecio.value="$"+precio.toFixed(2);

    txtTotal.value="$"+(precio*cantidad).toFixed(2);

}


function agregarProducto(){

    // Validar que se haya seleccionado un producto
    if(selectProducto.value==""){

        alert("Seleccione un producto.");

        return;

    }

    // Obtener cantidad
    let cantidad=parseInt(txtCantidad.value);

    // Validar cantidad
    if(isNaN(cantidad) || cantidad<1){

        alert("Ingrese una cantidad válida.");

        return;

    }

    // Obtener datos del producto seleccionado
    let indiceProducto=parseInt(selectProducto.value);

    let codigo=productos[indiceProducto][0];
    let precio=productos[indiceProducto][1];
    let descripcion=productos[indiceProducto][2];


    let encontrado=false;

    for(let i=0;i<codigos.length;i++){

        if(codigos[i]==codigo){

            cantidades[i]=cantidades[i]+cantidad;

            totales[i]=precios[i]*cantidades[i];

            encontrado=true;

            break;

        }

    }

    if(encontrado==false){

        codigos.push(codigo);

        descripciones.push(descripcion);

        precios.push(precio);

        cantidades.push(cantidad);

        totales.push(precio*cantidad);

    }


    mostrarTabla();

    calcularTotales();

    // Limpiar formulario

    selectProducto.value="";

    txtCantidad.value=1;

    txtPrecio.value="$0.00";

    txtTotal.value="$0.00";

}



function mostrarTabla(){

    tablaDetalle.innerHTML="";

    if(codigos.length==0){

        tablaDetalle.innerHTML=`
        <tr>
            <td colspan="6" style="text-align:center">
                No hay productos en la factura
            </td>
        </tr>
        `;

        return;

    }

    for(let i=0;i<codigos.length;i++){

        let fila=document.createElement("tr");

        fila.innerHTML=`

            <td>${codigos[i]}</td>

            <td>${descripciones[i]}</td>

            <td>$${precios[i].toFixed(2)}</td>

            <td>${cantidades[i]}</td>

            <td>$${totales[i].toFixed(2)}</td>

            <td>

                <button class="btn-remove" onclick="eliminarProducto(${i})">

                    ✕

                </button>

            </td>

        `;

        tablaDetalle.appendChild(fila);

    }

}



function eliminarProducto(indice){

    codigos.splice(indice,1);

    descripciones.splice(indice,1);

    precios.splice(indice,1);

    cantidades.splice(indice,1);

    totales.splice(indice,1);

    mostrarTabla();

    calcularTotales();

}



function calcularTotales(){

    let subtotal=0;

    for(let i=0;i<totales.length;i++){

        subtotal=subtotal+totales[i];

    }

    let iva=subtotal*0.15;

    let descuento=150;

    let total=subtotal+iva-descuento;

    txtSubtotal.textContent="$"+subtotal.toFixed(2);

    txtIva.textContent="$"+iva.toFixed(2);

    txtDescuento.textContent="$"+descuento.toFixed(2);

    txtTotalPagar.textContent="$"+total.toFixed(2);

}