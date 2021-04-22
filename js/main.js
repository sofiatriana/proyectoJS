let bienvenida = '¡Bienvenidos a Parvati!'

function saludoBienvenida() {
    let otraBienvenida = bienvenida + ' Nos encanta ver a los clientes felices tanto como cuidar a el planeta'
    alert(otraBienvenida)
}
saludoBienvenida()

let productos = [
    {marca: 'Shein', prenda: 'Blusa', precio: 78},
    {marca: 'Zara', prenda: 'Pantalón', precio: 56},
    {marca: 'Adidas', prenda: 'Tennis', precio: 67},
    {marca: 'H & M', prenda: 'Chaqueta', precio: 87},
    {marca: 'Forever21', prenda: 'Falda', precio: 45},
    {marca: 'Nike', prenda: 'Leggins', precio: 30}
    
]

 let escojaMarca = productos.filter (function(productos) {
   return productos.marca === 'Shein';
})
.map(function(productos){
    return productos.prenda;
})
console.log(escojaMarca);

let escoja = [];
for (let i = 0; i < productos.length; i++){
    if (productos[i].marca === 'Zara'){
        escoja.push(productos[i].prenda);
        escoja.push(productos[i].precio);
        
    }
}
console.log(escoja);

