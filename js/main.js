
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
let productos = []

const divProductos = $('#div-productos')

const obtenerDatos = async ()=>{
  const resp = await fetch('js/stock.json')
  const data = await resp.json()

  productos = data 
  mostrarProductos(productos)
}
obtenerDatos()
      

function mostrarProductos(array) {    

    array.forEach((producto) => {
    divProductos.append( `
    <div class="container">
                    <div class="card">  
                          <h3>${producto.prenda} ${producto.marca}</h3>
                         <img src=${producto.img} alt="" class="imagen">
                          <ul class="tamaño">
                            <span>Talla:</span>
                            <li class="li">${producto.talla}</li>
                            <span>Precio:</span>
                            <li class="li"> $${producto.precio}</li>
                         </ul>
                         <button class="btn" onclick=agregarProductos(${producto.id})>Añadir al carrito</button>
                    </div>
             </div>   
    `)
   })
}


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
 
function eliminarProductos(id) {

  const productosEliminar = carrito.find(el => el.id == id)
  const indice = carrito.indexOf(productosEliminar)

  carrito.splice(indice,1)

  localStorage.setItem('carrito', JSON.stringify(carrito))
  actualizarCarrito()
}



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



const finalizarCompra = async() =>{
  const carritoMp = carrito.map(el => ({
        title: el.prenda,
        description: "",
        picture_url: "",
        category_id: el.id,
        quantity: el.cantidad,
        currency_id: "COP",
        unit_price: el.precio
  }))

  const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
    method: "POST",
    headers: {
      Authorization: 'Bearer TEST-c743d9a7-fdc0-44d6-8a8b-9b7d3371ceda'
    },
    body: JSON.stringify({
        items: carritoMp
    })
  })

  const {init_point} = await resp.json()

  window.open(init_point, '_blank')
} 
  

  
  
  function filtrar() {
    
    const prenda = document.getElementById('prendas')
    
    if (prenda.value == 'Todos') {
        mostrarProductos(productos)
    } else {
        const arrayFiltrado = productos.filter(producto => producto.prenda == prenda.value)
        mostrarProductos(arrayFiltrado)
    }
}

const prenda = document.getElementById('prendas')

prenda.addEventListener('change', ()=>{
    filtrar()
})



 






