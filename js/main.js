
const divProductos = document.getElementById('divProductos')

mostrarProductos(productosAdidas)

function mostrarProductos(array) {

    divProductos.innerHTML = ''

    array.forEach((contenedor) => {
    
        let div = document.createElement('div')
        div.classList.add('container','contenedor', 'mb-5')
        div.innerHTML = `
              <ul class="thumb">
                    <li class="d-flex justify-content-center align-items-center"><img src=${contenedor.img} alt=""></li>
                    <li class="d-flex justify-content-center align-items-center"><img src=${contenedor.img} alt=""></li>
                    <li class="d-flex justify-content-center align-items-center"><img src=${contenedor.img} alt=""></li>
               </ul>
              <div class="imgBox d-flex flex-column align-items-center justify-content-between">
                  <h3 class="text-light">${contenedor.prenda} Adidas </h3>
                  <img src=${contenedor.img} alt="" class="imagen">
                  <ul class="tamaño d-flex justify-content-center align-items-center">
                      <span class="text-light">Talla:</span>
                      <li class="d-flex justify-content-center align-items-center">${contenedor.talla}</li>
                      <span class="text-light">Precio:</span>
                      <li class="d-flex justify-content-center align-items-center">${contenedor.precio}</li>
                  </ul>
                  <button class="btn" onclick=agregarProductos(${contenedor.id})>Añadir al carrito</button>
              </div>
        `
        divProductos.appendChild(div)
    
    })
}
const carrito = []

function agregarProductos(id){
    const productoEscogido = productosAdidas.find (el => el.id == id)
    if (productoEscogido) {
        carrito.push(productoEscogido)
    }
    actualizarCarrito()
}

function eliminarProductos(id) {
    const productosEliminar = carrito.find(el => el.id == id)
    const indice = carrito.indexOf(productosEliminar)
    carrito.splice(indice,1)

    actualizarCarrito()
}
function actualizarCarrito() {
    const carritoContenedor = document.getElementById('carrito-contenedor')
    const precioTotal = document.getElementById('precioTotal')
    const contadorCarrro = document.getElementById('contadorCarro')


    carritoContenedor.innerHTML = ''

    carrito.forEach((contenedor) => {
        carritoContenedor.innerHTML += `
            <div class="productoCarrito">
                <p class="text-light">${contenedor.prenda}</p>
                <p class="text-light">Precio: $${contenedor.precio}</p>
                <button onclick=eliminarProductos(${contenedor.id})  class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
            </div>
        `
    })
    
    precioTotal.innerText = carrito.reduce((acc, el) => acc += el.precio, 0)
    contadorCarro.innerText = carrito.length
}

function filtrarPrendas() {
    
    const talles = document.getElementById('prendas')
    
    if (talles.value == 'Todos') {
        mostrarProductos(productosAdidas)
    } else {
        const arrayFiltrado = productosAdidas.filter(contenedor => contenedor.prenda == prendas.value)
        mostrarProductos(arrayFiltrado)
    }
}

const talles = document.getElementById('prendas')

talles.addEventListener('change', ()=>{
    filtrarPrendas()
})

