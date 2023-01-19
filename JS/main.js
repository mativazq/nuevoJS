function bienvenida(){
    alert("Hola bienvenidos a Las Delicias de Clarita");
    let nombre = prompt("Por Favor, decime tu nombre");
    while(nombre === ""){
        nombre = prompt("Por Favor, decime tu nombre");
    }
}

class Producto {
    constructor (id, nombre, precio) {
        this.id = id,
        this.nombre = nombre,
        this.precio = Number(precio)
    }
};

const arrayProductos = [];

const producto1 = new Producto(1, 'Torta Bombon', 900);
const producto2 = new Producto(2, 'Alfajores de Maicena', 700);
const producto3 = new Producto(3, 'Cocada', 900);
const producto4 = new Producto(4, 'Alfajores de Chocolate', 700);

arrayProductos.push(producto1, producto2, producto3, producto4);

const ordenarMenorMayor = () => {
    arrayProductos.sort((a,b) => a.precio - b.precio);
    mostrarListaOrdenada();
}

const ordenarMayorMenor = () => {
    arrayProductos.sort((a,b) => b.precio - a.precio);
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    const array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('Lista de precios: '+'\n'+array.join('\n'));
};

const agregarProductos = () => {
    let otroProducto = false;
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;

    do {
        productoNombre = prompt('Que delicia queres? \n - Torta Bombon \n - Alfajores de Maicena \n - Cocada \n - Alfajores de Chocolate');
        productoCantidad = parseInt(prompt('Cuantas queres comprar?'));

        while (Number.isNaN(productoCantidad)) {
            productoCantidad = parseInt(prompt('Cuantas queres comprar?'));
        };

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if (producto) {
            total += producto.precio * productoCantidad;
        } else {
            alert('Esa no es una delicia valida.')
        }

        otroProducto = confirm('Queres elegir otra delicia??');
    } while (otroProducto);

    obtenerDescuento(total);

};

const obtenerDescuento = (total) => {
    if (total >= 5000) {
        total = total * 0.80;
        alert('Tenes un descuento del 20%!');
    }
    obtenerPrecioDeEnvio(total);
};

const obtenerPrecioDeEnvio = (total) => {
    let confirmacion = confirm('Queres envio a domicilio?');
    if (confirmacion && total >= 2000) {
        alert('Tenes envío gratis. El total de la compra es: '+total);
    } else if (confirmacion && total < 2000 && total !== 0) {
        total = total + 800;
        alert('El envío cuesta $200. El total de tu compra es: $'+total);
    } else {
        alert('El total de la compra es: $'+total);
    }
}

const comprar = () => {
    if (confirm('Queres ordenar la lista de productos del mas barato al más caro?')) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
    agregarProductos();
};

bienvenida();
comprar();