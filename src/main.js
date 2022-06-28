window.addEventListener("keyup", () => calcularPrecioPollo());
window.addEventListener("change", () => calcularPrecioPollo());

function calcularPrecioPollo() {
    precioKilo = document.getElementById("precio").value;
    cantidadKilos = document.getElementById("kilos").value;
    cantidadGramos = document.getElementById("gramos").value;
    dineroRecibido = document.getElementById("pago").value;
    gramosPasados = parseFloat(precioKilo / 1000);
    if (cantidadKilos > 0) {
        totalPagar = cantidadKilos * precioKilo;
    } else {
        totalPagar = 0;
    }
    if (cantidadGramos > 0) {
        totalPagar += (cantidadGramos * gramosPasados);
    }
    if (dineroRecibido < 0) {
        dineroRecibido = 0;
    }
    document.getElementById("totalPagar").innerHTML = Number(totalPagar).toFixed(2);

    cambio = dineroRecibido - totalPagar;
    vuelto = document.getElementById("vuelto");
    faltante = document.getElementById("faltante");
    if (cambio < 0) {
        vuelto.setAttribute("hidden", "hidden");
        document.getElementById("restante").innerHTML = Math.abs(Number(cambio).toFixed(2)) + " ";
        faltante.removeAttribute("hidden");
    } else {
        faltante.setAttribute("hidden", "hidden");
        document.getElementById("cambio").innerHTML = Number(cambio).toFixed(2);
        vuelto.removeAttribute("hidden");
    }
}