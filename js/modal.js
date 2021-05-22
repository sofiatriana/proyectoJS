//jquery

const botonAbrir = $('#btn-carrito')
const contenedorModal = $('.modal-contenedor')

const botonCerrar = $('#carritoCerrar')
const modalCarrito = $('.modal-carrito')

botonAbrir.on('click', ()=>{
    contenedorModal.toggleClass('modal-active')
})
botonCerrar.on('click', ()=>{
    contenedorModal.toggleClass('modal-active')
})
contenedorModal.on('click', ()=>{
    contenedorModal.toggleClass('modal-active')
})
modalCarrito.on('click', (event)=>{
    event.stopPropagation()
})