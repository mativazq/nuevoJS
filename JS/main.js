
function bienvenida() {
    alert("Hola bienvenidos a Las Delicias de Clarita");
    let nombre = prompt("Por Favor, decime tu nombre");
    while (nombre === "") {
        nombre = prompt("Por Favor, decime tu nombre");
    }
}

function menuDelicias() {
    let delicias;

    do {
        delicias = prompt("Que postre vas a elegir? : \n1.- Chocotorta\n2.- Torta Bombon\n3.- Merengada \n4.- Cocada")
    } while (delicias != 1 && delicias != 2 && delicias != 3 && delicias != 4)

}


switch (delicias) {
    case "1":
        function menuDelicias() {

            return "Torta Bombon";
    case "3":
        return "Merengada";
    case "4":
        return "Cocada";
        }
}



function precioTortas(torta) {
    return 500;
} else if (torta === "Merengada") {
    return 700;
} else if (torta === "Cocada") {
    return 600;
}






function cobrarTorta(torta, precio) {

    alert("Usted eligio : " + torta + ".\nEl precio de la torta es de $" + precio);

    let pago = prompt("Con cuanto desea abonar?");

}


if (precio < pago) {


    bienvenida();

    let deliciaSeleccionada = menuDelicias();

    let precioDelicia = precioTortas(deliciaSeleccionada);

    cobrarTorta(deliciaSeleccionada, precioDelicia);

}
