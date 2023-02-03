import { mostrarProductos } from "./app.js";
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
});