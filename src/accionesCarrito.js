import { actualizarTotalesCarrito } from './actualizarCarrito.js';
import { productos } from './stock.js';
import { obtenerCarritoStorage } from './storage.js';


//Array vacio del carrito de compras para iterar y con las acciones.
let carrito = [];

//Función con la utilidad de validar la existencia del producto en el array, de ser así sumar +1 sino crear.
const validarProductoRepetido = (productoId) => {

    localStorage.getItem('carrito') ? carrito = obtenerCarritoStorage() : console.log('el carrito no existe');
    

    const productoRepetido = carrito.find(producto => producto.id === productoId);

    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }
};
// función que agrega el producto al carrito. y envía mensaje a través de la librería Toastyfy
const agregarAlCarrito = (productoId) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad = 1}</p>
                    <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                    `;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
    Toastify({
        text:"se agregó el producto al carrito",
        offset:{
            x: 25,
            y: 25,
        },
    }).showToast();
};

// pintarCarrito recibe por parámetro un array de objetos
const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id=cantidad ${producto.id}>Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                        `;
        contenedor.appendChild(div);
    });
};
//Función que elimina el producto del carrito
const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);

    actualizarTotalesCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
    Toastify({

      text: "Producto Eliminado",
      
      duration: 1000,
      stopOnFocus: false,
      
      }).showToast();
};

//boton de compra final
const botonComprar = document.getElementById('btn-compra');

botonComprar.addEventListener('click', () => {


    const carrito = obtenerCarritoStorage()

    const alerta1 = () => {
        Swal.fire({
            title: '¿Estás seguro de quieres comprar éstos productos?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'cancelar',
            confirmButtonText: 'Estoy seguro'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'ya procesamos tu compra!',
                    'te enviaremos un email de confirmación!',
                    'success'
                    
                    

                )
                compra(carrito)
               
            }
        })
    }
    const alerta2= () => {
        Swal.fire({
            title: 'Carrito Vacio!',
            text: "Tu carrito de compras esta vacio!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        })
        
    }
    carrito.length >= 1 ? alerta1() : alerta2()
    
})

const compra = (carrito) => {

    while (carrito.length > 0) {
        carrito.pop()
    }

    actualizarTotalesCarrito(carrito)
    pintarCarrito(carrito)
}
//botón de vaciar carrito


const botonVaciar = document.getElementById('btn-vaciar');

botonVaciar.addEventListener('click', () => {


    const carrito = obtenerCarritoStorage()

    const alerta1 = () => {
        Swal.fire({
            title: '¿Estás seguro de quieres eliminar todos los productos de tu carrito?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'cancelar',
            confirmButtonText: 'Estoy seguro'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Productos eliminados!',
                    'El carrito se vacio correctamente',
                    'success'
                    

                )
                vaciar(carrito)
            }
        })
    }
    const alerta2= () => {
        Swal.fire({
            title: 'Carrito Vacio!',
            text: "Tu carrito de compras esta vacio!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        })
    }
    carrito.length >= 1 ? alerta1() : alerta2()
    
})

const vaciar = (carrito) => {

    while (carrito.length > 0) {
        carrito.pop()
    }

    actualizarTotalesCarrito(carrito)
    pintarCarrito(carrito)
}





export { agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarProductoCarrito, };