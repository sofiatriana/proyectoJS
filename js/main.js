
// NAV RESPONSIVE
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

// MOSTRAR PRODUCTOS
const divVuelos = $('#div-productos')

mostrarProductos(productos)

function mostrarProductos(array) {    

    array.forEach((producto) => {
    divVuelos.append( `
    <div class="container">
                    <div class="card">  
                          <h3>${producto.prenda} ${producto.marca}</h3>
                         <img src=${producto.img} alt="" class="imagen">
                          <ul class="tamaño">
                            <span>Talla:</span>
                            <li class="li">${producto.talla}</li>
                            <span>Precio:</span>
                            <li class="li">${producto.precio}</li>
                         </ul>
                         <button class="btn"  onclick=agregarProductos(${producto.id})>Añadir al carrito</button>
                    </div>
             </div>   
    `)
   })
}

// Agregar productos al carrito
let carrito = []
let carritoLS = JSON.parse(localStorage.getItem('carrito'))

if (carritoLS) {  
    carrito = carritoLS
    actualizarCarrito()
}
function agregarProductos(id){
    const productoEscogido = productos.find (el => el.id == id)
    if (productoEscogido) {
        carrito.push(productoEscogido)
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarCarrito()
}
// eliminar productos del carrito 
function eliminarProductos(id) {
  const productosEliminar = carrito.find(el => el.id == id)
  const indice = carrito.indexOf(productosEliminar)
  carrito.splice(indice,1)

  localStorage.setItem('carrito', JSON.stringify(carrito))
  actualizarCarrito()
}

// actualizar carrito / modal
function actualizarCarrito() {
  const carritoContenedor = document.getElementById('carrito-contenedor')
  const precioTotal = document.getElementById('precioTotal')
  const contadorCarro = document.getElementById('contadorCarro')


  carritoContenedor.innerHTML = ''
  

  carrito.forEach((producto) => {
      carritoContenedor.innerHTML += `
      <div class="productoEnCarrito">
            <p>${producto.prenda} ${producto.marca}</p>
            <p>Talla: ${producto.talla}</p>
            <p>Precio: ${producto.precio}K</p>
           <button class="boton-eliminar" onclick=eliminarProductos(${producto.id})><i class="fas fa-trash-alt"></i></button>
      </div>
      `
  })
  
  precioTotal.innerText = carrito.reduce((acc, el) => acc += el.precio, 0)
  contadorCarro.innerText = carrito.length
}





// function filtrar() {
    
//   const talles = document.getElementById('talles')
  
//   if (talles.value == 'all') {
//       mostrarProductos(productos)
//   } else {
//       const arrayFiltrado = productos.filter(producto => producto.talla == talles.value)
//       mostrarProductos(arrayFiltrado)
//   }
// }

// const talles = document.getElementById('talles')

// talles.addEventListener('change', ()=>{
//   filtrar()
// })




// Jquery nav responsive
// const hamburger = $(".hamburger");
// const navLinks = $(".nav-links");
// const links = $(".nav-links .li_nav-links");

// hamburger.on("click", () => {
//   navLinks.toggleClass("open");

// NO APARECEN LOS LINKS?
//   links.each(link => {
//     link.toggleClass("fade");
//   });
// });