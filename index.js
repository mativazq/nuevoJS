/* import { mostrarProductos } from "./app.js";
import { agregarAlCarrito } from "./nuevoCarrito.js";
import { actualizarTotalesCarrito } from "./totalCarrito.js";
import { obtenerCarritoStorage } from "./storage.js";


document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        agregarAlCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
}); */

import { mostrarProductos } from "./App.js";
import { pintarCarrito } from "./src/accionesCarrito.js";
import { actualizarTotalesCarrito } from "./src/actualizarCarrito.js";
import { obtenerCarritoStorage } from "./src/storage.js";


document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
});


